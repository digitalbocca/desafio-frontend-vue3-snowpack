<template lang="pug">
router-view.min-vh-100
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">

@import https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css

*
  padding: 0
  margin: 0
  box-sizing: border-box

body, html
  margin: 0
  padding: 0
  min-height: 100vh

#app
  min-height: 100vh

</style>