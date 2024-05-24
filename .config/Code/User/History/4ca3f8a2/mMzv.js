import { eventBus } from "../global.js";

const playListTrack = document.querySelector(".album-tracks")
let index = 0

eventBus.subscribe('albumClicked', ()=>{index=0})
eventBus.subscribe('trackClicked', (data)=>{
    for (let playListIndex = 0; playListIndex < playListTrack.length; playListIndex++) {
        if(data.track.id === playListTrack[playListIndex].id){
            console.log("coincide en el tarcklist");
        }
    }
    console.log(track);
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