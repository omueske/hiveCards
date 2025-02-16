import { defineStore } from 'pinia';
import type { Location } from '../interfaces/location.interface';

export const useLocationStore = defineStore('locations', {
  state: () => ({
    locations: [] as Location[],
  }),

  getters: {
    getLocations(state) {
      return state.locations;
    },
},

  actions: {
    async fetchLocations() {
      try {
      const response = await fetch('http://localhost:3000/location');
      const locations = await response.json();
      this.locations = locations;
      } catch (error) {
        alert(error);
        console.error(error);

      }
    },
    async addLocation(location: Location) {
      try {
        const response = await fetch('http://localhost:3000/location', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(location),
        });
        const newLocation = await response.json();
        this.locations.push(newLocation);
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
    async deleteLocation(location: Location) {
      try {
        await fetch(`http://localhost:3000/locations/${location.id}`, {
          method: 'DELETE',
        });
        this.locations = this.locations.filter((l) => l.id !== location.id);
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
    async updateLocation(location: Location) {
      try {
        await fetch(`http://localhost:3000/locations/${location.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(location),
        });
        this.locations = this.locations.map((l) => (l.id === location.id ? location : l));
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },

    // ==============================================================================
    // Heres to fetch the haves and replace the id in the hive array with the object
    // ==============================================================================
    async fetchHive(id: string) {
      try {
        const response = await fetch('http://localhost:3000/beehive/' + id);
        return await response.json();
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
  }
}); 