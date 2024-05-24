const endpoint = 

export const getMeh = async () => {

    const queryDetails = document?.querySelector(`#queryDetails${report.queryID}`);
    
    const clients = await (await fetch(`${endpoint}`)).json();

    clients.forEach(element => {
        
    });

    return clients.filter(client => client.name_employee && client.lastnames_employee);
}
getMeh()