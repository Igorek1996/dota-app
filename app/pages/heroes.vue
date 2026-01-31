<template>
  <div class="container-inner">
    <div class="bans-inner">
      <span>🛈</span>
      <span>Баны</span>
      <div class="bans-hero-icons"></div>

    </div>
    <div class="heroes-inner">
      <div class="str-heroes">
        <div  class="heroes-tittle">
          <img src="../assets/img/hero_strength.png" height="16" width="16"/>
          <span>Сила</span>
        </div>
        <div class="str-heroes-inner">
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>

        </div>
      </div>
      <div class="agi-heroes">
        <div  class="heroes-tittle">
          <img src="../assets/img/hero_agility.png" height="16" width="16"/>
          <span>Ловкость</span>
        </div>
        <div class="agi-heroes-inner">
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>

        </div>
      </div>
      <div class="int-heroes">
        <div  class="heroes-tittle">
          <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
          <span>Интелект</span>
        </div>
        <div class="int-heroes-inner">
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>

        </div>
      </div>

      <div class="uni-heroes">
        <div class="heroes-tittle">
          <img src="../assets/img/hero_universal.png" height="16" width="16"/>
          <span>Универсальные</span>
        </div>
        <div class="uni-heroes-inner">
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>
          <div class="hero-card"></div>

        </div>
      </div>
    </div>
    <div class="heroes-filter-inner">
      <div class="sort-heroes">
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
      <div class="atributes-block">
        <div class="hero-type">
          <span>Тип</span>
          <div class="icons">
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
          </div>

        </div>
        <div class="hero-dificulty">
          <span>Сложность</span>
          <div class="icons">
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
          </div>

        </div>
        <div class="hero-marks">
          <span>Метки</span>
          <div class="icons">
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
            <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
          </div>

        </div>
        <div class="hero-pins">
          <span>Наклейки</span>
          <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>

        </div>
        <div class="events">
          <span>Событие</span>
          <img src="../assets/img/hero_intelligence.png" height="16" width="16"/>
        </div>
      </div>


    </div>
    {{ heroes.localized_name }}
  </div>

</template>

<script setup>
const heroes = useMyHeroesStore();

await callOnce(heroes.fetchHeroes);
import { ref, onMounted, onBeforeUnmount } from 'vue'

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

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style>
.heroes-header {
  margin-left:298px;
  text-transform: uppercase;
}
.heroes-header>a {
  padding: 0 13px;
}
.bans-inner {
  display: flex;
  align-items: center;
  margin: 25px 135px 11px 960px;
}
.bans-inner>span {
  padding-right: 5px;
  text-transform: uppercase;
}
.heroes-inner {
  display: grid;
  grid-template-columns: repeat(4, 295px);
  width: 1070px;
  margin-left: 187px;
}
.str-heroes-inner,.agi-heroes-inner, .int-heroes-inner {
  display: grid;
  grid-template-columns: repeat(6, 42px);
  gap: 6px;
}
.uni-heroes-inner {
  display: grid;
  grid-template-columns: repeat(4, 42px);
  gap: 6px;
}

.hero-card {
  border: 1px solid #333;
  width: 42px;
  height: 70px;
}
.heroes-tittle {
  margin-bottom: 6px;
  align-items: center;
}
.heroes-tittle>span {
  align-items:  center;
  text-transform: uppercase;
  padding-left: 3px;
}
.heroes-filter-inner{
  margin-top: 40px;
  margin-left: 188px;
  margin-right: 198px;
  display: flex;
  justify-content: space-between;
}
.atributes-block{
  display: flex;
  gap: 15px;
  align-items: center;
}
.atributes-block > div {
  display: flex;
  align-items: center;
  gap: 8px;
}
.hero-type, .hero-dificulty, .hero-marks, .hero-pins, .events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icons {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.sort-heroes {
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
  min-width: 220px;
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
  right: 10px;
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
}
</style>
