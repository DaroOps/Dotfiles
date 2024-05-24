const endpoint = 

export const getMeh = async () => {
    const clients = await (await fetch(`${endpoint}`)).json();

    clients.forEach(element => {
        
    });

    return clients.filter(client => client.name_employee && client.lastnames_employee);
}
getMeh()