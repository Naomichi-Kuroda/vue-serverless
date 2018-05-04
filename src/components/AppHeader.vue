<template>
  <section class="app-header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{name: 'Home'}">Vue Project</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarColor01" style="">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Problem', params: {id: 1}}">Start</router-link>
          </li>
        </ul>
        <b-form inline>
          <b-btn class="btn-outline-info mr-2" :to="{name: 'Login'}">ログイン</b-btn>
          <b-btn class="btn-outline-info mr-2" :to="{name: 'Signup'}">ユーザー登録</b-btn>
          <b-btn class="btn-outline-info mr-2" :to="{name: 'Confirm'}">確認コード</b-btn>
        </b-form>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
