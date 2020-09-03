<template>
  <div>
    <Header></Header>
    <div class="container">
      <Add :addComment="addComment"></Add>
      <list :comments="comments" :deleteComment='deleteComment'></list>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header/Header'
import List from '@/components/List/List'
import Add from '@/components/Add/Add'

export default {
  data () {
    return {
      comments: [
        {
          name: 'sadf',
          content: 'dasdasd'
        },
        {
          name: 'sasadfdf',
          content: 'asdfasdf'
        }
      ]
    }
  },
  components: {
    Header,
    List,
    Add
  },
  methods: {
    addComment (comment) {
      this.comments.unshift(comment)
		},
		deleteComment (index) {
			this.comments.splice(index,1)
		}
  }
}
</script>
<style lang="">
</style>
