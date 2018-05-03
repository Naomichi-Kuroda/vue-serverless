<template>
  <section class="app-header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{name: 'Home'}">LearnJS</router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Problem', params: {id: 1}}">Start</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
