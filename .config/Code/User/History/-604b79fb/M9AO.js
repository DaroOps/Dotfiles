const url = 'https://spotify23.p.rapidapi.com/search/?q=nightmare&type=albums&limit=4&numberOfTopResults=4';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c50ca6a9fmsh782d031552a0decp1a3966jsnae814566aa15',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

export default fetchData = async () => {
    try {
      const response = await fetch('');
      const data = await response.json();
      eventBus.publish('dataReceived', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
}