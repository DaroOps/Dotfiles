const port= 5004;
const endpoint = `http://localhost:${port}/offices`

// 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
// 1. (1) List the office codes and cities where offices are located.

export const getAllOfficesCitiesAndCodes = async ()=>{

    let response = await fetch(`${endpoint}`);
    let offices =  await response.json();
    let info = []
    offices.forEach(office => {
        info.push({
           code_office: office.code_office,
            :
        })    
    });

    return info

}

//(2) List the cities and phone numbers of offices in Spain.


export const getAllClientsNameByCountry = async (countryName="Spain")=>{

    let response = await fetch(`${endpoint}?country=${countryName}`);
    let clients =  await response.json();
    let info = []
    clients.forEach(client => {
        info.push({
            client_name : client.client_name
        })    
    });

    return info

}

//(6) List the addresses of offices that have clients in Fuenlabrada.


export const getAllClientsNameByCountry = async (countryName="Spain")=>{

    let response = await fetch(`${endpoint}?country=${countryName}`);
    let clients =  await response.json();
    let info = []
    clients.forEach(client => {
        info.push({
            client_name : client.client_name
        })    
    });

    return info

}