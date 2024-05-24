import { eventBus } from "./global.js";

class DataManager {
  constructor() {
    this.data = {};
    eventBus.subscribe('fetch-data', this.fetchData.bind(this));
  }

  async fetchData({ signal, fetchFunction, args }) {
    try {
      this.data[signal] = await fetchFunction(...args);
      eventBus.publish(`data-fetched-${signal}`, this.data[signal]);
    } catch (error) {
      console.error(`Error when get data for the signal ${signal}:`, error);
      eventBus.publish(`fetch-error-${signal}`, error);
    }
  }
}

export const dataManager = new DataManager();