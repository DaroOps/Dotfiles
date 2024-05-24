import { eventBus } from "../global.js";

const playListTrack = document.querySelector(".album-tracks")
let index = 0

eventBus.subscribe('albumClicked', ()=>{index=0})
eventBus.subscribe('trackClicked', (track)=>{
    for (let index = 0; index < playListTrack.length; index++) {
        const element = array[index];
        
    }
})

export const handleTrackChange = (direction) => {
  const children = Array.from(playListTrack.children);
  const maxIndex = children.length - 1;

  if (direction === 'next') {
    index = (index + 1) % children.length;
  } else if (direction === 'prev') {
    index = (index - 1 + children.length) % children.length;
  }

  console.log('current track', index);
  children[index].click();
};