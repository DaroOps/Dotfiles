import { eventBus } from "../global";


eventBus.subscribe('trackClicked', (data) => {
    this.render(data);
});

export const updateTracks = (albums) => {
    eventBus.subscribe("trackClicked", async (id) => {
      console.log("sure im work in here too");
      clearTracks();
      const trackCards = generateTrackCards(albums, id);
      if (trackCards) {
        tracksAsideElement.appendChild(trackCards);
      }
    });
  
  };