import {eventBus } from "../global.js";

getSuggestions()

eventBus.subscribe('trackSuggestions', insertSuggestions.bind())

export const insertSuggestions = (data)=>{
    if (data){
        const target = document.querySelector('.track-suggestions')
        const tracks = data.tracks
        const fragment = document.createDocumentFragment();

        tracks.forEach(track => {
            const trackCard = document.createElement('track-card');
            
            trackCard.setAttribute('track-name', track.name);
            trackCard.setAttribute('track-artist', track.artists[0]?.name);
            trackCard.setAttribute('img-url', track.album.images[0]?.url)

            fragment.appendChild(trackCard);
        });

        target.appendChild(fragment)
        
    }
}
