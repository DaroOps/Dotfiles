import {getClientByEmployeeCode, getEmployByCode, getEmployeeByOfficeCode, getProductByCode, getRequestDetailsByRequest, getRequestByCodeClient } from `../helpers/helpers`

// import {  } from `./clients.js`;
// import {  } from `./employees.js`;
// import {  } from `./products.js`;
// import {  } from `./request_details.js`;
// import { } from `./requests.js`;

const port= 5004;
const endpoint = `http://localhost:${port}/offices`


export const getAllOfficesCodeAndCity = async () => {
    const res = await fetch(`${endpoint}`);
    const data = await res.json();
    return data.map(({ code_office, city }) => ({ codigo: code_office, ciudad: city }));
};

export const getAllOfficesAndPhonesFromSpain = async () => {
    const res = await fetch(`${endpoint}?country=España`);
    const data = await res.json();
    return data.map(({ city, movil }) => ({ ciudad: city, telefono: movil }));
};

export const getOfficesByCode = async (code) => {
    const res = await fetch(`${endpoint}?code_office=${code}`);
    return await res.json();
};

export const OfficesExcludingSalesRepsWithFruitPurchases = async () => {
    const res = await fetch(`${endpoint}`);
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
// export const getCitieAndPhoneOfficesByCountry = async (countryName=`Spain`)=>{

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
// // export const getOfficeAdressesByClientsCity = async (cityName=`Fuenlabrada`)=>{

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