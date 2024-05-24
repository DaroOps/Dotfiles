import { getMissionByRocket} from '../modules/getMissionByRocket.js'

export const buttonsSelection = (rockets)=>{

    let items = [];

    rockets.forEach(rocket => {
        let patchImg = ""

        getMissionByRocket(rocket.id).then((docs)=>{
            patchImg = docs?.links.small
        })

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
