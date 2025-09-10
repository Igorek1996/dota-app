<template>
  <div class="guild">
    <RouterLink class="guild__link" to="/guild">
      <Icon name="game-icons:knight-banner" style="color: black" />
    </RouterLink>

    <div class="guild__content">
      <div class="guild__img">
        <img
          src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ee/ee8f3f4c6f3c1d5e2b8e4a4f4e4e4e4e4e4e4e4_full.jpg"
          alt="avatar" />
      </div>
      <div class="guild__info">
        <DotaBtn>Найти новую гильдию</DotaBtn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.guild {
  &__link {
    width: 45px;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;

    &:hover {
      &~.guild {
        &__content {
          display: flex;
        }
      }
    }

  }

  &__content {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 100%;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  &__img {
    height: 200px;
  }
}
</style>