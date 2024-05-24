import {env} from "../../global.js";

const url = `https://${env.RAPID_API_HOST}/albums/`;

export const getAlbumsTracks = async (ids) => {
    const options = {
        method: 'GET',
        params: {
            ids: ids
        },
        headers: {
            'X-RapidAPI-Key': `${env.RAPID_API_KEY}`,
            'X-RapidAPI-Host': `${env.RAPID_API_HOST}`
        }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("DATA DE ALBUMS TRACKS", data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
}