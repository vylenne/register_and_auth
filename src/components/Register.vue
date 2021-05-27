<template>
  <vs-row justify="center">
    <vs-col w="4">
      <h4 class="notMargin">Регистрация</h4>
      <vs-input class="mb-16" v-model="name" placeholder="Имя" block>
        <template #icon>
          <svg width="16" height="16" stroke="black" stroke-width="1" fill="none">
            <circle cx="8" cy="8" r="6"/>
            <circle cx="8" cy="8" r="2"/>
            <path d="M3.81863443903,12.4 a8,15 1 0,1 8.3,0"/>
          </svg>
        </template>
      </vs-input>
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

      <vs-button block class="m-0 mt-24" @click="openNotification('bottom-center', 'danger')">
        Зарегистрироваться
      </vs-button>
      <vs-button to="/auth" block transparent class="mt-24">
        Уже есть аккаунт? Войти
      </vs-button>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: '',
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
