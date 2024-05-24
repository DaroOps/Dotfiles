import { eventBus, env } from "../../global";

const url = `https://${env.RAPID_API_HOST}/search/?q=${query}=albums&limit=4&numberOfTopResults=4`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${env.RAPID_API_KEY}`,
		'X-RapidAPI-Host': `${env.RAPID_API_HOST}`
	}
};

export default fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      eventBus.publish('dataReceived', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
}