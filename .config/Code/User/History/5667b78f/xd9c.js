const endpoint = "https://api.spacexdata.com/v4/crew"

getMeh = async () => {
    const body = document?.querySelector('.body');
    let htmlContent = "";
  
    const clients = await (await fetch(`${endpoint}`)).json();
  
    clients.forEach(element => {
      htmlContent += `<img src="${element.image}" alt="${element.name}'s portrait">`;
    });
  
    body.innerHTML = htmlContent;
}

getMeh()
