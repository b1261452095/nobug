<template>
  <div class="row">
    <h2 v-if="firstView">请输入用户名搜索</h2>
    <h2 v-if="loading">Loading... ...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <h2 v-if='noMsg'>{{noMsg}}</h2>
    <div class="card" v-for="(user,index) in users" :key="index">
      <a :href="user.url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</template>
<script>
import PubSub from 'pubsub-js'
import axios from 'axios'
export default {
  data() {
    return {
      firstView:true,
      loading:false,
      users:null,
      errorMsg:'',
      noMsg:''
    }
  },
  mounted() {
    PubSub.subscribe('search',(msg,searchName) => {
      const url = `https://api.github.com/search/users?q=${searchName}`
      const url1 = `https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b`
      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMsg = ''
      this.noMsg = ''
      axios.get(url).then(reponse =>{
        this.loading =false
        const result = reponse.data
        if(result.items.length === 0){
          this.noMsg = '没有查询到数据'
        }
        const users = result.items.map(item => ({
          url:item.html_url,
          avatar_url:item.avatar_url,
          name:item.login
        }))
        console.log(users);
        this.users = users
      }).catch(error => {
        this.loading = true
        console.log(error)
        this.loading = false
        this.errorMsg = '搜索失败'
      })
    })
  },
}
</script>
<style lang="">
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>