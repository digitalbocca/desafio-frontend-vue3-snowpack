<template lang="pug">
.container-fluid.d-flex.flex-column.justify-content-center.align-items-center
  .row
    .col-sm-12.col-lg-8
      h1.text-center.text-uppercase Perfil GitHub
      .input-group.mt-5
        input.form-control(v-model="username" type="text" placeholder="user")
        button.btn.btn-primary(@click="pesquisarUsername()") Pesquisar
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'Home',
  setup () {
    const username = ref('')

    const pesquisarUsername = () => {
      alert(username.value)
      limparCampos()
    }

    const limparCampos = () => username.value = ''

    return {
      username,
      pesquisarUsername
    }
  }
}

</script>