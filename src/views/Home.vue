<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Items/>
  </div>
</template>

<script>
// @ is an alias to /src
import Items from '../components/Items'

export default {
  name: 'Home',
  components: {
    Items
  }
}
</script>
