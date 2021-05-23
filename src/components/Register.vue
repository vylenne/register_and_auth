<template>
  <vs-row justify="center">
    <vs-col w="4">
      <h4 class="notMargin">Регистрация</h4>
      <vs-input class="mb-16" v-model="email" placeholder="Email" block>
        <template #icon>
          @
        </template>
      </vs-input>
      <vs-input class="mb-16" type="password" v-model="password" placeholder="Пароль" block>
        <template #icon>
          #
        </template>
      </vs-input>
      <vs-input type="password" v-model="repeatPassword" placeholder="Подтвердите пароль" block>
        <template #icon>
          #
        </template>
      </vs-input>

      <vs-button block class="m-0 mt-24" @click="openNotification('top-center', 'danger')">Зарегистрироваться</vs-button>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    openNotification(position = null, color) {
      return this.$vs.notification({
        color,
        position,
        title: 'Ваши данные не прошли валидацию!',
        text: 'Проверьте правильность email или пароля'
      })
    }
  }
}
</script>
