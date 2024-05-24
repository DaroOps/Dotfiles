import { eventBus, env } from "../../global.js";

const url = `https://${env.RAPID_API_HOST}/recommendations/?limit=10&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry`;

export const getAlbumsTracks = async (ids) => {
    const options = {
        method: 'GET',
        params: {
            ids: '3IBcauSj5M2A6lTeffJzdv,3t3BbpFJiGcXl4jI5CRLLA'
        },
        headers: {
            'X-RapidAPI-Key': `${env.RAPID_API_KEY}`,
            'X-RapidAPI-Host': `${env.RAPID_API_HOST}`
        }
    };
    let idList = ids
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      eventBus.publish('trackSuggestions', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
}