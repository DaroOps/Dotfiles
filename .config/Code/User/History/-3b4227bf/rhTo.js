import {env} from "../../global.js";

const url = `https://${env.RAPID_API_HOST}/albums/?ids=`;
const cacheKey = 'tracklist-cache'

export const getAlbumsTracks = async (ids) => {
    let cacheUrl = `${url}${ids}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${env.RAPID_API_KEY}`,
            'X-RapidAPI-Host': `${env.RAPID_API_HOST}`
        }
    };

    const cachedResponse = await caches.match(cacheUrl);
    if(cachedResponse){
      const data = await cachedResponse.json();
      eventBus.publish('datareceived', data);
      return data;
    }

    try {
      const response = await fetch((url+ids), options);
      const data = await response.json();
      console.log("DATA DE ALBUMS TRACKS", data);
      return data.albums;
    } catch (error) {
      console.error('Error:', error);
    }
}