import { defineStore } from 'pinia'

export const useMyHeroesStore = defineStore('heroes', {
  state: () => ({
    name: 'heroes store',
    description: 'store for heroes',
    heroes: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchHeroes() {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('https://api.opendota.com/api/heroes')
        if (!response.ok) throw new Error('Не вдалося отримати героїв')
        const data = await response.json()
        this.heroes = data
      } catch (err) {
        console.error(err)
        this.error = err.message
      } finally {
        this.loading = false
      }
    }
  }
})

export default useMyHeroesStore
