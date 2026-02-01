<template>
  <header class="header">
    <DotaSettings />
    <div class="history">
      <a class="history__btn" href="">
        <Icon name="codicon:triangle-left" style="color: black" />
      </a>
      <a class="history__btn" href="">
        <Icon name="codicon:triangle-right" style="color: black" />
      </a>
    </div>
    <DotaLogo />
    <nav class="nav">
      <ul>
        <li>
          <NuxtLink to="/heroes">Герои</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/arsenal">Арсенал</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/streams">Просмотр</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/knowledge">База знаний</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/custom-games">Игротека</NuxtLink>
        </li>
      </ul>
    </nav>

    <NuxtLink to="/cristals">35</NuxtLink>
    <div class="header__buttons">
      <span>Уведомления</span>
      <NuxtLink to="/changes">Изменения</NuxtLink>
      <NuxtLink to="/dota-plus">DotaPlus</NuxtLink>
      <button>Выход</button>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    height: 60px;
    gap: 20px;

    &__buttons {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  .nav {
    margin-right: auto;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .nav ul {
    display: flex;
    align-items: center;
    height: 100%;
    list-style: none;
    gap: 20px;
    padding: 0;
    margin: 0;
  }

  .history {
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
