<template>
  <vs-row justify="center">
    <vs-col w="4">
      <h4 class="notMargin">Авторизация</h4>
      <vs-input class="mb-16" v-model="email" placeholder="Email" block>
        <template #icon>
          @
        </template>
      </vs-input>
      <p>{{ msg }}</p>
      <vs-input type="password" v-model="password" placeholder="Пароль" block>
        <template #icon>
          #
        </template>
      </vs-input>

      <vs-button block class="m-0 mt-24">Авторизоваться</vs-button>
      <vs-button to="/register" block transparent class="mt-24">Еще нет аккаунта? Зарегистрироваться</vs-button>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      msg: ''
    }
  },
  methods: {}
}
</script>

<style scoped>
.mb-16 {
  margin-bottom: 16px;
}

.mt-24 {
  margin-top: 24px;
}
</style>
