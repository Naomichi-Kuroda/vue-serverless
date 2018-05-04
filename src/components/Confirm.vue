<template>
  <section class="confirm">
    <h2 class="confirm-title">確認コード</h2>
    <b-row class="justify-content-md-center">
      <b-col md="6">
        <b-form class="confirm-form" autocomplete="off">
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
            <b-form-input type="password" placeholder="confirmation code" v-model="confirmationCode"></b-form-input>
          </b-input-group>
          <b-btn variant="primary" @click="confirm">確認コード送信</b-btn>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">
  .confirm {
    &-title {
      text-align: center;
      line-height: 200%;
    }
    &-form {
      text-align: center;
    }
  }
</style>

<script>
export default {
  name: 'Confirm',
  data () {
    return {
      email: '',
      confirmationCode: ''
    }
  },
  methods: {
    confirm () {
      this.$cognito.confirmation(this.email, this.confirmationCode)
        .then(result => {
          this.$router.replace('/login')
        })
        .then(err => {
          this.error = err
        })
    }
  }
}
</script>
