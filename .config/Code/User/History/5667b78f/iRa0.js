const endpoint = "https://api.spacexdata.com/v4/crew"

export const getMeh = async () => {

    const body = document?.querySelector(`.body`);

    const clients = await (await fetch(`${endpoint}`)).json();

    clients.forEach(element => {
        body += clients.image
    });

    return clients.filter(client => client.name_employee && client.lastnames_employee);
}
getMeh()