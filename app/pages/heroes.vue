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
        <span>Сортировка:</span>
        <div class="dropup-sort">
          <button class="dropup-toggle">Атрибуты</button>

          <ul class="dropup-menu">
            <li><a href="#">Атрибут 1</a></li>
            <li><a href="#">Атрибут 2</a></li>
            <li><a href="#">Атрибут 3</a></li>
            <li><a href="#">Атрибут 4</a></li>
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

</style>
