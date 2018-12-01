<template>
	
	<div>
	<H1> this is add item page</H1>
	<div v-if="ok">
	   <input v-model="message" placeholder="">
	   <input v-model="price" placeholder="">
	   <button v-on:click="Addproduct(),okk=true,ok=false">add</button>
	</div>
	<button v-if="okk" v-on:click="ok=true,okk=false">add new item</button>
	<p>{{msg}}</p>
	</div>
</template>
<script>
export default {
	
    data(){
		return {
		data:[],
		ok:false,
		okk:true,
		msg:'',
		message:'nothing',
		price:0
	     }
	},
    computed: {
    
   },
  methods:{ 
  	 Addproduct(){
 		this.data[0] = this.message
 		this.data[1] = this.price
  	 	this.$store.dispatch('pushadditem',this.data)
     	this.msg = "Your Product is successfully Added";
     }
  }
}
</script>

<style>