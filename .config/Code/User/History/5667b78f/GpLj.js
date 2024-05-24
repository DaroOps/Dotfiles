const endpoint = 

export const getMeh = async () => {
    const clients = await (await fetch(`${endpoint}`)).json();

    for (const client of clients) {
        const payment = await getPaymentByClientCode(client.client_code);
        if (payment) {
            const employee = await getEmployByCode(client.code_employee_sales_manager);
            client.name_employee = `${employee.name}`;
            client.lastnames_employee = `${employee.lastname1} ${employee.lastname2}`;
        }
    }

    return clients.filter(client => client.name_employee && client.lastnames_employee);
}