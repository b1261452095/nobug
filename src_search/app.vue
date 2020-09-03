<template>
  <div class="container">
    <Header></Header>
    <UserMain />
  </div>
</template>
<script>
import Header from '@/componets/Header'
import Main from '@/componets/Main'
export default {
  data() {
    return {
      
    }
  },
  components:{
    Header,
    UserMain: Main
  }
}
</script>
<style lang="">

</style>