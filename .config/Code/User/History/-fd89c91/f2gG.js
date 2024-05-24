import { even } from "./global.js";

class DataManager {
  constructor() {
    this.data = null;
    eventBus.subscribe('fetch-data', this.fetchData.bind(this));
  }

  async fetchData(fetchFunction, ...args) {
    try {
      this.data = await fetchFunction(...args);
      eventBus.publish('data-fetched', this.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      eventBus.publish('fetch-error', error);
    }
  }
}

export const dataManager = new DataManager();