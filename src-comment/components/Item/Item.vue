<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user">
      <span>{{comment.name}}</span>
      <span>说:</span>
    </p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
export default {
	props: ['comment','deleteComment','index'],
	methods: {
		deleteItem () {
			console.log('this',this);
			const {comment,deleteComment,index} = this
			if(window.confirm(`是否确认删除${comment.name}!`)){
				this.deleteComment(index)
			}
		}
		
	}
}
</script>
<style lang="">
</style>
