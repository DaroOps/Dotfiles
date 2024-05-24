import { getClientByEmployeeCode } from "./clients.js";
import { getEmployByCode, getEmployeeByOfficeCode } from "./employees.js";
import { getProductByCode } from "./products.js";
import { getRequestDetailsByRequest } from "./request_details.js";
import { getRequestByCodeClient } from "./requests.js";

const port= 5004;
const endpoint = `http://localhost:${port}/offices`

const getSalesRepsWithFruitPurchases = async (offices) => {
    const salesRepsWithFruitPurchases = [];

    for (const office of offices) {
        const employees = await getEmployeeByOfficeCode(office.code_office);

        for (const employee of employees) {
            const clients = await getClientByEmployeeCode(employee.employee_code);

            for (const client of clients) {
                const requests = await getRequestByCodeClient(client.client_code);

                for (const request of requests) {
                    const details = await getRequestDetailsByRequest(request.code_request);

                    for (const detail of details) {
                        const product = await getProductByCode(detail.product_code);

                        if (product.gama === "Frutales") {
                            salesRepsWithFruitPurchases.push({ employee_code: employee.employee_code, office_code: office.code_office });
                        }
                    }
                }
            }
        }
    }

    return salesRepsWithFruitPurchases;
};

export const getAllOfficesCodeAndCity = async () => {
    const res = await fetch("http://localhost:5504/offices");
    const data = await res.json();
    return data.map(({ code_office, city }) => ({ codigo: code_office, ciudad: city }));
};

export const getAllOfficesAndPhonesFromSpain = async () => {
    const res = await fetch("http://localhost:5504/offices?country=España");
    const data = await res.json();
    return data.map(({ city, movil }) => ({ ciudad: city, telefono: movil }));
};

export const getOfficesByCode = async (code) => {
    const res = await fetch(`http://localhost:5504/offices?code_office=${code}`);
    return await res.json();
};

export const OfficesExcludingSalesRepsWithFruitPurchases = async () => {
    const res = await fetch("http://localhost:5504/offices");
    const offices = await res.json();
    const salesRepsWithFruitPurchases = await getSalesRepsWithFruitPurchases(offices);
    const officesWithoutSalesReps = offices.filter(office => !salesRepsWithFruitPurchases.some(salesRep => salesRep.office_code === office.code_office));
    return officesWithoutSalesReps.map(office => office.code_office);
};

// // 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
// // 1. (1) List the office codes and cities where offices are located.
// export const getAllOfficesCitiesAndCodes = async ()=>{

//     let response = await fetch(`${endpoint}`);
//     let offices =  await response.json();
//     let info = []
//     offices.forEach(office => {
//         info.push({
//            office_code: office.code_office,
//            office_city: office.city 
//         })    
//     });
//     return info
// }

// // 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
// //(2) List the cities and phone numbers of offices in Spain.
// export const getCitieAndPhoneOfficesByCountry = async (countryName="Spain")=>{

//     let response = await fetch(`${endpoint}?country=${countryName}`);
//     let offices =  await response.json();
//     let info = []
//     offices.forEach(office => {
//         info.push({
//             office_country: office.country,
//             office_city: office.city,
//             office_phone: office.movil
//         })    
//     });
//     return info
// }

// //(6) List the addresses of offices that have clients in Fuenlabrada.
// // export const getOfficeAdressesByClientsCity = async (cityName="Fuenlabrada")=>{

// //     let response = await fetch(`${endpoint}?country=${countryName}`);
// //     let offices =  await response.json();
// //     let info = []
// //     offices.forEach(office => {
// //         info.push({
// //             office_country: office.country,
// //             office_city: office.city,
// //             office_phone: office.movil
// //         })    
// //     });
// //     return info
// // }