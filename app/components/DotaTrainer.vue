<template>
  <div class="trainer">
    <RouterLink to="trainer" class="trainer__btn">
      <Icon name="fa7-solid:headset" style="color: black" />
    </RouterLink>

    <div class="trainer__content">
      <div class="trainer__content-block">
        <h3 class="trainer__title">Стать тренером
          <span class="trainer__title-icon">
            <Icon name="material-symbols:info" style="color: black" />
          </span>
        </h3>
        <div class="trainer__content-wrapper">
          <div class="trainer__info">
            <div class="trainer__info-column">
              <h4 class="trainer__info-title">
                Рейтинг тренера
              </h4>
              <div class="trainer__info-value">
                <Icon name="marketeq:headset-alt" style="color: #888888" />
                <span>0</span>
              </div>
            </div>
            <div class="trainer__info-column">
              <h4 class="trainer__info-title">
                Доступно
              </h4>
              <div class="trainer__info-value">
                <span>14</span>
              </div>
            </div>
          </div>
          <DotaBtn>Показать игроков</DotaBtn>
        </div>
      </div>
      <div class="trainer__content-block">
        <h3 class="trainer__title">Найти личного тренера
          <span class="trainer__title-icon">
            <Icon name="material-symbols:info" style="color: black" />
          </span>
        </h3>
        <div class="trainer__content-wrapper">
          <p>Нужна помощь? Обратитесь за советом к опытному игроку.</p>
          <DotaBtn>Запросить тренера</DotaBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.trainer {
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;

    &:hover {
      &~.trainer {
        &__content {
          display: block;
        }
      }
    }
  }

  &__content {
    display: none;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 100%;
  }

  &__content-block {}

  &__title {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
    padding-inline: 10px;
  }

  &__title-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }

  &__info-column {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__info-title {}

  &__info-value {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
</style>