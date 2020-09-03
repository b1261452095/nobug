<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="this.comments.length === 0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment , index) in comments" :key="index" :comment="comment" :deleteComment='deleteComment' :index='index'/>
    </ul>
  </div>
</template>
<script>
import Item from '@/components/Item/Item'

export default {
  // 声明接收属性
  props: ['comments','deleteComment','index'],
  components: {
    Item
  }
}
</script>
<style lang="">
.reply {
  margin-top: 0px;
}

li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
