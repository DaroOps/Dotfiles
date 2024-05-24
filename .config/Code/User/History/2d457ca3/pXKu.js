import { eventBus, env } from "../../global.js";
const cacheKey = 'suggestions-cache'
const url = `https://${env.RAPID_API_HOST}/recommendations/?limit=10&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${env.RAPID_API_KEY}`,
		'X-RapidAPI-Host': `${env.RAPID_API_HOST}`
	}
};

export const getSuggestions = async () => {

    let cacheUrl = `${url}`


    try {
      const response = await fetch(url, options);
      const data = await response.json();
      eventBus.publish('trackSuggestions', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
}