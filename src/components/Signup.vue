<template>
  <section class="signup">
    <h2 class="signup-title">ユーザー登録</h2>
    <b-row class="justify-content-md-center">
      <b-col md="6">
        <b-form class="signup-form" autocomplete="off">
          <b-input-group class="mb-3">
            <b-input-group-text slot="prepend">
              <icon name="user"></icon>
            </b-input-group-text>
            <b-form-input type="text" placeholder="email" v-model="email"></b-form-input>
          </b-input-group>
          <b-input-group class="mb-3">
            <b-input-group-text slot="prepend">
              <icon name="lock"></icon>
            </b-input-group-text>
            <b-form-input type="password" placeholder="password" v-model="password"></b-form-input>
          </b-input-group>
          <b-input-group class="mb-3">
            <b-input-group-text slot="prepend">
              <icon name="lock"></icon>
            </b-input-group-text>
            <b-form-input type="password" placeholder="confirm password" v-model="passwordConfirm"></b-form-input>
          </b-input-group>
          <b-btn variant="primary" @click="signup">ユーザー登録</b-btn>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .signup {
    &-title {
      text-align: center;
      line-height: 200%;
    }
    &-form {
      text-align: center;
    }
  }
</style>

<script>export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    signup () {
      if (this.email && (this.password === this.passwordConfirm)) {
        this.$cognito.signUp(this.email, this.password)
          .then(result => {
            // 登録に成功したら、確認コードの入力画面を表示
            this.$router.replace('/confirm')
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>
