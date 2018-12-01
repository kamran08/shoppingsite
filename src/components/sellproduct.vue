<template>
	
	<div>
	<h1>your selling item is :</h1>
		<li v-for="product in showsellitem">
			{{product}}
		</li>
	</div>
</template>
<script>
export default {
    computed: {
     showsellitem(){
        return this.$store.state.selldata;
      }
  },

  methods:{
   
  }
}
</script>

<style>