<template>
  <section class="login">
    <h2 class="login-title">ログイン</h2>
    <b-row class="justify-content-md-center mb-3">
      <b-col md="6">
        <div class="login-social">
          <b-button class="login-social-facebook mr-2">Facebook</b-button>
          <b-button class="login-social-twitter mr-2">Twitter</b-button>
          <b-button class="login-social-google mr-2">Google+</b-button>
        </div>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col md="6">
      <b-form class="login-form" autocomplete="off">
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
        <b-btn variant="primary" @click="login">ログイン</b-btn>
      </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .login {
    &-title {
      text-align: center;
      line-height: 200%;
    }
    &-social {
      text-align: center;
      color: white;
      &-facebook {
        background: #3b5998;
        &:hover {
          opacity:0.8;
        }
      }
      &-twitter {
        background: #00aced;
        &:hover {
          opacity:0.8;
        }
      }
      &-google {
        background: #c32f10;
        &:hover {
          opacity:0.8;
        }
      }
    }
    &-form {
      text-align: center;
    }
  }
</style>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$cognito.login(this.email, this.password)
        .then(result => {
          this.$router.replace('/home')
        })
        .then(err => {
          this.error = err
        })
    }
  }
}
</script>
