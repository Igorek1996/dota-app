export const useMyHeroesStore = defineStore('heroes', {
  state: () => ({
    name: 'heroes store',
    description: 'store for heroes'
  }),
  actions: {
    async fetchHeroes() {
      const heroes = await fetch('https://api.opendota.com/api/heroes')
      const data = await heroes.json()


      return data
    }
  }
})
