<template>
	<div>
	<h1>Cart your are Selected by </h1>
	<li v-for="product in Shocart">
		<ol>{{product}}</ol>
	</li>
	<button v-on:click="savecart(Shocart)">click to confirm</button>
	<p >{{msg}}</p>
	
	</div>
</template>
<script>
export default {
			data(){
					return{
						msg:''
					}
			},
		    computed: {
				     Shocart(){
				        return this.$store.state.cartsdata;
				      }
		  	},

		  methods:{
			    savecart(data){
			    		 this.$store.dispatch('pushsellitem',data)
			    		 if(data.length>0)
			    		 this.msg = "Your Order are receved";
			    		 else  this.msg = "your don't select any of those";
						
				}
					
		   }

 }
  
</script>

<style>

</style>