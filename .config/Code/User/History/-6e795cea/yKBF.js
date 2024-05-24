import { getOfficesByCode, getClientByEmployeeCode } from "../helper.js";

const port = 5002
const endpoint = `http://localhost:${port}/employees`


export const getCEOInformation = async () => {
    const employees = await getAllEmployees();
    const ceoEmployee = employees.find(employee => employee.code_boss === null); 
    if (ceoEmployee) {
        return {
            position: ceoEmployee.position,
            name: ceoEmployee.name,
            lastnames: `${ceoEmployee.lastname1} ${ceoEmployee.lastname2}`,
            email: ceoEmployee.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        };
    } else {
        return "ERROR 404: CEO not found!";
    }
};



export const getEmployByCode = async (code) => {
    const res = await fetch(`${endpoint}?employee_code=${code}`);
    return await res.json();
};

export const getEmployByCode2 = async (code) => {
    const [employee] = await getEmployByCode(code);
    return employee;
};

export const getEmployByBossCode = async (code) => {
    const res = await fetch(`${endpoint}?code_boss=${code}`);
    return await res.json();
};

export const getNameByEmployeeCode = async (code) => {
    const [employee] = await getEmployByCode(code);
    return employee.name;
};

export const getEmployeeByOfficeCode = async (code) => {
    const res = await fetch(`${endpoint}?code_office=${code}`);
    return await res.json();
};

export const getAllNameSurnamesAndEmailInCargeOfBossSeven = async () => {
    const employees = await getEmployByBossCode(7);
    return employees.map(({ name, lastname1, lastname2, email }) => ({
        nombre: name,
        apellidos: `${lastname1} ${lastname2}`,
        email: email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
    }));
};

export const getBossesFullnameAndEmail = async () => {
    const employees = await getEmployByCode();
    return employees.filter(({ code_boss }) => code_boss === null).map(({ position, name, lastname1, lastname2, email }) => ({
        puesto: position,
        nombre: name,
        apellidos: `${lastname1} ${lastname2}`,
        email: email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
    }));
};

export const getAllEmployees = async () => {
    const res = await fetch(`${endpoint}`);
    return await res.json();
};

export const getAllEmployeesNotSalesRepresentative = async () => {
    const employees = await getEmployByPosition("Representante Ventas");
    return employees.filter(employee => employee.position !== "Representante Ventas").map(({ name, lastname1, lastname2, position }) => ({
        nombre: name,
        apellidos: `${lastname1} ${lastname2}`,
        puesto: position
    }));
};


const getEmployeeData = async (employee) => {
    const { extension, email, code_office, position, id, ...employeeData } = employee;
    return employeeData;
};

export const getEmployeesWithBoss = async () => {
    const employees = await getEmployByCode();
    const bosses = [];

    for (const employee of employees) {
        if (employee.code_boss !== null) {
            const existingBoss = bosses.find(boss => boss.boss === employee.code_boss);
            const employeeData = await getEmployeeData(employee);

            if (existingBoss) {
                existingBoss.employees.push(employeeData.name);
            } else {
                bosses.push({
                    boss: employee.code_boss,
                    nameBoss: await getNameByEmployeeCode(employee.code_boss),
                    employees: [employeeData.name]
                });
            }
        }
    }

    return bosses.map(({ nameBoss, employees }) => ({ nameBoss, employees }));
};

export const getEmployeesWithBosses = async () => {
    const employees = await getEmployByCode();
    const bosses = [];

    for (const employee of employees) {
        const employeeData = await getEmployeeData(employee);
        const jefeDelJefe = employeeData.code_boss === null ? 'No tiene' : await getNameByEmployeeCode(await getEmployByCode2(employeeData.code_boss).code_boss);
        bosses.push({
            NombreDelTrabajador: employeeData.name,
            NombreDelJefe: await getNameByEmployeeCode(employeeData.code_boss),
            jefeDelJefe
        });
    }

    return bosses;
};

export const getEmployeesWithoutOffice = async () => {
    const employees = await getEmployByCode();
    const data = [];

    for (const employee of employees) {
        const offices = await getOfficesByCode(employee.code_office);
        if (!offices.length) {
            data.push({
                code: employee.employee_code,
                name: employee.name
            });
        }
    }

    return data;
};

export const getEmployeesWithoutClients = async () => {
    const employees = await getEmployByCode();
    const data = [];

    for (const employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code);
        if (!clients.length) {
            data.push({
                code: employee.employee_code,
                name: employee.name
            });
        }
    }

    return data;
};

export const getEmployeesWithoutClientsAndTheirOffices = async () => {
    const employees = await getEmployByCode();
    const data = [];

    for (const employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code);
        const offices = await getOfficesByCode(employee.code_office);

        if (clients.length === 0 && offices && offices.length > 0) {
            const matchingOffice = offices.find(office => office.code_office === employee.code_office);
            if (matchingOffice) {
                data.push({
                    code: employee.employee_code,
                    name: employee.name,
                    office: matchingOffice
                });
            }
        }
    }

    return data;
};

export const getEmployeesWithoutOfficeAndWithoutClients = async () => {
    const employees = await getEmployByCode();
    const data = [];

    for (const employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code);
        const offices = await getOfficesByCode(employee.code_office);

        if (!clients.length || !offices.length) {
            data.push({
                code: employee.employee_code,
                name: employee.name
            });
        }
    }

    return data;
};

export const getEmployeesWithoutClientsAndTheirBosses = async () => {
    const employees = await getEmployByCode();
    const data = [];

    for (const employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code);
        const name_boss = employee.code_boss ? await getNameByEmployeeCode(employee.code_boss) : "No tiene";

        if (!clients.length) {
            data.push({
                name: employee.name,
                boss_name: name_boss
            });
        }
    }

    return data;
};