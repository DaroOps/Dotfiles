import { getMissionByRocket} from '../modules/getMissionByRocket.js'

export const buttonsSelection = async (rockets)=>{

    let items = [];
    let patchImg = ""

    await for(){}


    rockets.forEach(rocket => {
        let divDescriptionContainer = document.createElement("div");
        divDescriptionContainer.classList.add("description__container");
       
        let divImg = document.createElement("div");
        let imgSrc = document.createElement("img");
        imgSrc.src = patchImg

        divImg.append(imgSrc)

        let divDescription = document.createElement("div");
        let h3Title = document.createElement("h3")
        let smallDescription = document.createElement("small")

        h3Title.textContent = `${rocket.name}`

        smallDescription.textContent = `${rocket.company}`

        divDescription.append(h3Title)
        divDescription.append(smallDescription)

        divDescriptionContainer.append(divImg)
        divDescriptionContainer.append(divDescription)

        items.push(divDescriptionContainer)
    });
    return items;
}
