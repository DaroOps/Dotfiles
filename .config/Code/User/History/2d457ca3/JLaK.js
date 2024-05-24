import { eventBus, env } from "../../global.js";

const url = `https://${env.RAPID_API_HOST}/search/`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${env.RAPID_API_KEY}`,
		'X-RapidAPI-Host': `${env.RAPID_API_HOST}`
	}
};

export const getSuggestions = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      eventBus.publish('trackSuggestions', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
}