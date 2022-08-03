<template>
  <router-view />
</template>

<script>
let brand = " | ระบบร้องเรียน";
export default ({
  name : 'App',
  watch:{
    $route(to){
      document.title = to.meta.title + brand
    }
  }
})
</script>
