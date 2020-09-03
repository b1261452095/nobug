<template>
  <div>
    <p>click{{count}}times,count is {{eveOrOrd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数添加</button>
    <button @click="incrementSync">异步添加</button>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['eveOrOrd'])//eveOrOrd() {return this.$store.getters.['eveOrOrd']; },
  },
  methods:{
    ...mapActions(['increment','decrement','incrementOdd','incrementSync'])
  }
};
</script>
<style lang="">
</style>