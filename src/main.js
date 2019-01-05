// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	data: {
		list : [],
	},
  router,
  components: { App },
	template: '<App/>',
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
})
