<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
     <router-link :to="{path: 'view'}" v-for="item in list" tag='li' :key="item.id" class="view_li">
       <div>title : {{item.title}}, subtitle : {{item.subtitle}}，tag:<span  v-for="item in item.tags" :key="item.id">{{item.count}} / {{item.name}} / {{item.title}}</span></div>
     </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  },
  created:function () {
		this.getlist();//这里定义这个方法，vue实例之后运行到这里就调用这个函数
	},
  methods: {
		getlist () {
			this.$http.get('/douban/book/search?q=javascript').then( (response) =>{
				this.list=response.data.books;
				console.log(response);
			}).catch( (response) =>{
				console.log(response);
			})
    },
  }  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
