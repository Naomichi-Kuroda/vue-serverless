<template>
  <div class="home">
    <div class="row">
      <b-col md="6">
        <h1 class="mb-3">Learn JavaScript,<br>one puzzle at a time.</h1>
        <router-link to="/problem/1">
          <b-btn variant="primary">Start Now!</b-btn>
        </router-link>
      </b-col>
      <b-col md="6">
        <img src="./../assets/HeroImage.jpg">
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
  .home {
    margin: 60px;
  }
</style>
