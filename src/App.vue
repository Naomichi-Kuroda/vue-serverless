<template>
  <section class="app">
    <app-header/>
    <b-container fluid>
      <router-view/>
    </b-container>
  </section>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>
