const endpoint = "https://api.spacexdata.com/v4/crew"

export const getMeh = async () => {

    const body = document?.querySelector(`.body`);
    let temp = ""
    const clients = await (await fetch(`${endpoint}`)).json();

    clients.forEach(element => {
        temp += clients.image
    });

    body.innerHTML = temp
}
getMeh()