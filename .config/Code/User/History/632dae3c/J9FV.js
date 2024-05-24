import { getProductByCode } from "./products.js";
import { getRequestByDetails } from "./requests.js";
import { getClientByCode } from "./clients.js";



export const getRequestDetailsByProductCode = async (code) => {
  const res = await fetch(`http://localhost:5507/request_details?product_code=${code}`);
  const details = await res.json();
  return details;
};

export const getRequestDetailsByRequest = async (code) => {
  const res = await fetch(`http://localhost:5507/request_details?code_request=${code}`);
  const details = await res.json();
  return details;
};

// 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

export const lisOfProductRangesPurchasedByClient = async () => {
  const res = await fetch("http://localhost:5507/request_details?_expand=product&_expand=request&_embed=request.client");
  const data = await res.json();

  const clientsArray = data.reduce((acc, detail) => {
    const { product, request } = detail;
    const { client } = request;
    const clientIndex = acc.findIndex(c => c.code_client === client.client_code);

    if (clientIndex === -1) {
      acc.push({ code_client: client.client_code, client_name: `${client.contact_name} ${client.contact_lastname}`, gama: [product.gama] });
    } else {
      const existingClient = acc[clientIndex];
      if (!existingClient.gama.includes(product.gama)) {
        existingClient.gama.push(product.gama);
      }
    }

    return acc;
  }, []);

  clientsArray.sort((a, b) => a.code_client - b.code_client);
  return clientsArray;
};

const getSalesRepsWithFruitPurchases = async (offices) => {
    const salesRepsWithFruitPurchases = new Set();
  
    // Obtener todos los detalles de solicitud que involucran productos frutales
    const fruitRequestDetails = await (await fetch("http://localhost:5507/request_details?join=inner&product_gama=Frutales")).json();
  
    // Crear un mapa de códigos de solicitud a detalles de solicitud
    const requestDetailsMap = new Map();
    for (const detail of fruitRequestDetails) {
      const requestCode = detail.code_request;
      if (!requestDetailsMap.has(requestCode)) {
        requestDetailsMap.set(requestCode, new Set());
      }
      requestDetailsMap.get(requestCode).add(detail);
    }
  
    for (const office of offices) {
      const employees = await getEmployeeByOfficeCode(office.code_office);
  
      for (const employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code);
  
        for (const client of clients) {
          const requests = await getRequestByCodeClient(client.client_code);
  
          for (const request of requests) {
            if (requestDetailsMap.has(request.code_request)) {
              salesRepsWithFruitPurchases.add({ employee_code: employee.employee_code, office_code: office.code_office });
            }
          }
        }
      }
    }
  
    return [...salesRepsWithFruitPurchases];
  };
