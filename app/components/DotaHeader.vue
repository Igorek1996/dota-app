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
          <RouterLink to="/heroes">Герои</RouterLink>
        </li>
        <li>
          <RouterLink to="/arsenal">Арсенал</RouterLink>
        </li>
        <li>
          <RouterLink to="/streams">Просмотр</RouterLink>
        </li>
        <li>
          <RouterLink to="/knowledge">База знаний</RouterLink>
        </li>
        <li>
          <RouterLink to="/custom-games">Игротека</RouterLink>
        </li>
      </ul>
    </nav>

    <RouterLink to="/cristals">35</RouterLink>
    <div class="header__buttons">
      <span>Уведомления</span>
      <RouterLink to="/changes">Изменения</RouterLink>
      <RouterLink to="/dota-plus">DotaPlus</RouterLink>
      <button>Выход</button>
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

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