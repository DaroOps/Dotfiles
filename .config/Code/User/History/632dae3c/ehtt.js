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