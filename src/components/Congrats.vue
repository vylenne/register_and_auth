<template>
  <vs-row justify="center">
    <vs-col w="3">
      <vs-card type="5">
        <template #title>
          <h3>Поздравляем!</h3>
        </template>
        <template #img>
          <img src="https://acegif.com/wp-content/gifs/happy-cat-9.gif" alt="cat">
        </template>
        <template #text>
          <p>
            Вы прошли авторизацию и можете теперь выйти
          </p>
        </template>
        <template #interactions>
          <vs-button shadow>Выход</vs-button>
        </template>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "Hello"
}
</script>

<style scoped>

</style>