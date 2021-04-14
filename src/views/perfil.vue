<template lang="pug">
.container-fluid.d-flex.flex-column.justify-content-center.align-items-center
  .row
    .col-sm-12.col-lg-8
      h1.text-center.text-uppercase {{ username }}
  .row
    .col-sm-12.col-lg-8
      p.text-center
        img(:src="avatarUrl" alt="Imagem do Usuário")
  .row
    .col-sm-12.col-lg-8.text-center
      h2 {{ name }}
      p {{ company }}
</template>

<script>

import { reactive, toRefs, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  name: 'Perfil',
  setup () {
    const route = useRoute()

    const username = route.params.username

    const userData = reactive({
      avatarUrl: 'https://picsum.photos/500/500',
      name: 'loading...',
      company: 'loading...'
    })

    onMounted(async () => {
      const data = (await axios.get(`https://api.github.com/users/${username}`)).data
      userData.avatarUrl = data.avatar_url
      userData.name = data.name
      userData.company = data.company
    })

    return {
      username,
      ...toRefs(userData)
    }
  }
}

</script>