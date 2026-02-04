<template>
  <div class="container-inner">
    <div class="bans">
      <span class="bans__info">🛈</span>
      <span class="bans__text">Баны</span>
      <div class="bans__hero_icons"></div>

    </div>
    <div class="heroes">
      <div class="heroes__str">
        <div  class="heroes__tittle">
          <img src="../assets/img/hero_strength.png" height="16" width="16"/>
          <span>Сила</span>
        </div>
        <div class="heroes__str__inner">
          <HeroCard
              v-for="hero in strHeroes"
              :key="hero.id"
              :heroName="hero.name"
              :localizedName="hero.localized_name"
          />


        </div>
      </div>
      <div class="heroes__agi">
        <div  class="heroes__tittle">
          <img src="../assets/img/hero_agility.png" height="16" width="16"/>
          <span>Ловкость</span>
        </div>
        <div class="heroes__agi__inner">
          <HeroCard
              v-for="hero in agiHeroes"
              :key="hero.id"
              :heroName="hero.name"
              :localizedName="hero.localized_name"
          />

        </div>
      </div>
      <div class="heroes__int">
        <div  class="heroes__tittle">
          <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
          <span>Интелект</span>
        </div>
        <div class="heroes__int__inner">
          <HeroCard
              v-for="hero in intHeroes"
              :key="hero.id"
              :heroName="hero.name"
              :localizedName="hero.localized_name"
          />

        </div>
      </div>

      <div class="heroes__uni">
        <div class="heroes__tittle">
          <img src="../assets/img/hero_universal.png" height="16" width="16"/>
          <span>Универсальные</span>
        </div>
        <div class="heroes__uni__inner">
          <HeroCard
              v-for="hero in uniHeroes"
              :key="hero.id"
              :heroName="hero.name"
              :localizedName="hero.localized_name"
          />

        </div>
      </div>
    </div>
    <div class="heroes__filter">
      <div class="heroes__sort">
        <span class="sort-label">Сортировка:</span>

        <div
            class="dropup-sort"
            :class="{ open: isOpen }"
            ref="dropdown"
        >
          <button class="dropup-toggle" @click="toggle">
            {{ selected }}
            <span class="arrow" :class="{rotated: isOpen}">▾</span>
          </button>

          <ul class="dropup-menu">
            <li
                v-for="attr in attributes"
                :key="attr"
            >
              <a href="#" @click.prevent="select(attr)">
                {{ attr }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="attributes">
        <div class="attributes__type">
          <span>Тип</span>
          <div class="icons">

            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>
            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>

          </div>

        </div>
        <div class="attributes__dificulty">
          <span>Сложность</span>
          <div class="icons">
            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>
            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>
            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>


          </div>

        </div>
        <div class="attributes__marks">
          <span>Метки</span>
          <div class="icons">
            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>
            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>
            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>
            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>
            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>
            <img src="../assets/img/filter-diamond.png" height="20" width="26"/>

          </div>

        </div>
        <div class="attributes__pins">
          <span>Наклейки</span>
          <img src="../assets/img/filter-diamond.png" height="20" width="26"/>

        </div>
        <div class="attributes__events">
          <span>Событие</span>
          <img src="../assets/img/filter-diamond.png" height="20" width="26"/>
        </div>
      </div>


    </div>
  </div>

</template>

<script setup>
import { useMyHeroesStore } from '~/stores/heroes.ts'
import { ref,computed, onMounted, onBeforeUnmount } from 'vue'
import HeroCard from '@/components/HeroCard.vue'


const heroesStore = useMyHeroesStore()

const strHeroes = computed(() =>
    heroesStore.heroes.filter(hero => hero.primary_attr === 'str')
)
const agiHeroes = computed(() =>
    heroesStore.heroes.filter(hero => hero.primary_attr === 'agi')
)
const intHeroes = computed(() =>
    heroesStore.heroes.filter(hero => hero.primary_attr === 'int')
)
const uniHeroes = computed(() =>
    heroesStore.heroes.filter(hero => hero.primary_attr === 'all')
)

const isOpen = ref(false)
const selected = ref('Атрибуты')

const attributes = [
  'Атрибут 1',
  'Атрибут 2',
  'Атрибут 3',
  'Атрибут 4'
]

const dropdown = ref(null)

function toggle() {
  isOpen.value = !isOpen.value

}

function select(attr) {
  selected.value = attr
  isOpen.value = false
}

function handleClickOutside(e) {
  if (dropdown.value && !dropdown.value.contains(e.target)) {
    isOpen.value = false

  }
}

onMounted(async () => {
  document.addEventListener('click', handleClickOutside)
  await heroesStore.fetchHeroes()
  console.log(heroesStore.heroes)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style>
.container-inner{
  display: flex;
  flex-direction: column;
}

.heroes-header {
  margin-left:298px;
  text-transform: uppercase;
}
.heroes-header>a {
  padding: 0 13px;
}
.bans {
  display: flex;
  align-items: center;
  margin: 25px 135px 11px 960px;
}
.bans>span {
  padding-right: 5px;
  text-transform: uppercase;
}
.heroes {
  display: grid;
  grid-template-columns: repeat(4, 295px);
  width: 1070px;
  margin-left: 187px;
  flex:1;
}
.heroes__str__inner,.heroes__agi__inner, .heroes__int__inner {
  display: grid;
  grid-template-columns: repeat(6, 42px);
  gap: 6px;
}
.heroes__uni__inner {
  display: grid;
  grid-template-columns: repeat(4, 42px);
  gap: 6px;
}


.heroes__tittle {
  margin-bottom: 6px;
  align-items: center;
}
.heroes-tittle>span {
  align-items:  center;
  text-transform: uppercase;
  padding-left: 3px;
}
.heroes__filter{
  margin-top: 88px;
  margin-left: 182px;
  margin-right: 198px;
  display: flex;
  justify-content: space-between;
}
.attributes{
  display: flex;
  gap: 15px;
}
.attributes > div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.attrubutes>span {
  text-align: revert;
}

.attributes__type, .attributes__dificulty, .attributes__marks, .attributes__pins, .attributes__events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icons {
  display: flex;
  flex-wrap: wrap;
  filter: grayscale(0.5);
}
.icons>img {
  //filter: opacity(0.5);
  filter: grayscale(1);
}
.icons>img:hover {
  //filter: opacity(1);
}
.heroes__sort {
  display: flex;
  align-items: center;
  color: #9ca3af;
}

.sort-label {
  font-size: 10px;
  text-transform: uppercase;
  padding-right: 5px;
}

.dropup-sort {
  position: relative;
}

.dropup-toggle {
  background: linear-gradient(#2a2f36, #1f2329);
  border: 1px solid #3a3f46;
  color: #e5e7eb;
  padding: 6px 30px 6px 12px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 3px;
  min-width: 215px;
  text-align: left;
}

.dropup-toggle:hover {
  background: linear-gradient(#31363d, #262a30);
}

.dropup-toggle .arrow {
  position: absolute;
  font-size: 30px;
  top: -10%;
  transform: rotate(180deg);
  right: 5px;
  transition: transform 0.2s ease;

}
.arrow.rotated {
  transform: rotate(0deg);
}

.dropup-menu {
  position: absolute;
  bottom: 100%;
  left: 0;
  background: #1f2329;
  border: 1px solid #3a3f46;
  border-radius: 3px;
  list-style: none;
  padding: 4px 0;
  margin: 4px 0 0;
  min-width: 100%;
  display: none;
  z-index: 10;
}

.dropup-menu li a {
  display: block;
  padding: 6px 12px;
  font-size: 13px;
  color: #d1d5db;
  text-decoration: none;
}

.dropup-menu li a:hover {
  background: #2d3238;
  color: #fff;
}

.dropup-sort.open .dropup-menu {
  display: block;
  position:
}
</style>
