import { eventBus } from "../global.js";

const playListTrack = document.querySelector(".album-tracks")
let index = 0

eventBus.subscribe('albumClicked', ()=>{index=0})
eventBus.subscribe('trackClicked', (data)=>{
    for (let playListIndex = 0; playListIndex < playListTrack.children.length; playListIndex++) {
        if(data.track.id === playListTrack.children[playListIndex].id){
           index = playListIndex
           console.log(inde);
        }
    }
    
    // console.log(playListTrack.children[1]);
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