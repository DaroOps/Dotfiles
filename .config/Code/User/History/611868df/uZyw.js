import { getSuggestions, eventBus } from "../global";

eventBus.subscribe('trackSuggestions', )

export const insertSuggestions = (data)=>{
    if (data){
        const target = document.querySelector('.track-suggestions')
        const tracks = data.tracks
        const fragment = document.createDocumentFragment();

        tracks.forEach(track => {
            
        });
        
    }
}


// <track-card></track-card>
//         <track-card></track-card>
//         <track-card></track-card>
//         <track-card></track-card>
//         <track-card></track-card>
//         <track-card></track-card>
//         <track-card></track-card>
