import { getMissionByRocket } from '../modules/getMissionByRocket.js';

export const buttonsSelection = async (rockets) => {
  const items = [];

  for (const rocket of rockets) {
    try {
      let docs = await getMissionByRocket(rocket.id);
      let patchImg = docs[0]?.links.patch.small || '';
        console.log(docs.for);
      const divDescriptionContainer = document.createElement('div');
      divDescriptionContainer.classList.add('description__container');

      const divImg = document.createElement('div');
      const imgSrc = document.createElement('img');
      imgSrc.src = patchImg;
      divImg.append(imgSrc);

      const divDescription = document.createElement('div');
      const h3Title = document.createElement('h3');
      const smallDescription = document.createElement('small');

      h3Title.textContent = `${rocket.name}`;
      smallDescription.textContent = `${rocket.company}`;

      divDescription.append(h3Title);
      divDescription.append(smallDescription);

      divDescriptionContainer.append(divImg);
      divDescriptionContainer.append(divDescription);

      items.push(divDescriptionContainer);
    } catch (error) {
      console.error(`Error fetching mission for rocket ${rocket.id}:`, error);
    }
  }

  return items;
};