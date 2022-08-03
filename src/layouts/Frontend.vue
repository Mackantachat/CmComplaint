<template>
  <Nav />
  <main>
    <router-view />
  </main>
  <Foot />
</template>

<script>
import Nav from '@/components/frontend/Nav.vue'
import Foot from '@/components/frontend/Foot.vue'
export default {
  name: 'FrontendLayout',
  components: {
    Nav,
    Foot
  }
}
</script>
