<template>
	<div>
		<h2>Product list : </h2>
    <ul>
        <li v-for="product in selProduct">
           <p>product name: {{product.name}}</p>
           <p>price: ${{product.price}}</p>
           <button v-on:click="savecart(product.name)"> add cart</button>
           <br>
        </li>
    </ul>
	</div>
</template>

<script>
export default {
    computed: {
          products(){
            return this.$store.state.products
          },
           selProduct(){
                 return this.$store.getters.selProudct;
            }
     },
     methods:{
          reducePrice(amount){
            this.$store.dispatch('reducePrice',amount)
          },

         savecart(data){
          this.$store.dispatch('pushcartitem',data)
          }
      }
  }

  

</script>

<style>

</style>