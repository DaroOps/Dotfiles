const endpoint = "https://api.spacexdata.com/v4/crew"

const getMeh = async () => {
    const body = document?.querySelector('body');
    let htmlContent = "";
  
    const clients = await (await fetch(`${endpoint}`)).json();
  
    clients.forEach(element => {
      htmlContent += `<img src="${element.image}" referrerpolicy="no-referrer" alt="dashboard">`;
    });
  
    body.innerHTML = htmlContent;
}

getMeh()
