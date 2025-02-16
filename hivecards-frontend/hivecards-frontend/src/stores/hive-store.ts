import { defineStore } from 'pinia';
import type { BeeHive } from '../interfaces/beehive.interface';

export const useHiveStore = defineStore('hives', {
  state: () => ({
    hives: [] as BeeHive[],
  }),

  getters: {
    getHives(state) {
      return state.hives;
    },
},

  actions: {
    async fetchHives() {
      try {
      const response = await fetch('http://localhost:3000/beehive');
      const hives = await response.json();
      this.hives = hives;
      } catch (error) {
        alert(error);
        console.error(error);

      }
    },
    async addHives(hive: BeeHive) {
      try {
        const response = await fetch('http://localhost:3000/beehive', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(hive),
        });
        const newHive = await response.json();
        this.hives.push(newHive);
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
    async deleteHive(hive: BeeHive) {
      try {
        await fetch(`http://localhost:3000/locations/${hive.id}`, {
          method: 'DELETE',
        });
        this.hives = this.hives.filter((hl) => hl.id !== hive.id);
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
    async updateHive(hive: BeeHive) {
      try {
        await fetch(`http://localhost:3000/locations/${hive.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(hive),
        });
        this.hives = this.hives.map((l) => (l.id === hive.id ? hive : l));
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
  }
}); 