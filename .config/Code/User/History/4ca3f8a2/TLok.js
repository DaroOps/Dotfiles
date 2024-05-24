import { eventBus } from "../global.js";

const playListTrack = document.querySelector(".album-tracks")
let index = 0

eventBus.subscribe('albumClicked', ()=>{
    console.log('reset index?', index);
    index=0})


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