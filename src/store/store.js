import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		products:[
		      {name:'banana', price:20},
		      {name:'apple', price:140},
		      {name:'mango', price:120},
		      {name:'shiny star',price:40}
      	],
      	cartsdata:[
      			
      	],
      	selldata:[

      	]
	},
	getters:{
		selProudct: state =>{
			  var selProduct =  state.products.map( product =>{
              return{
                name: "!!" + product.name +" !!",
                price: product.price
              }
          }) ;
          return selProduct;
		}

	},
	mutations: {

		reducePrice: (state,payload) =>{
				state.products.forEach(product =>{
					product.price -= payload;
				})
		},
		 

		pushcartitem: (state,payload) => {
			state.cartsdata.push(payload);
		},
		pushadditem: (state,payload) => {

			state.products.push({name:payload[0],price:payload[1]})
			//state.cartsdata.push(payload);
		},
		pushsellitem: (state,payload) => {
			for(var i=0; i<payload.length; i++){
       			  state.selldata.push(payload[i])
			}
			if(state.cartsdata.length>0){
			 state.cartsdata = [];
			}
		}
	
	},
	actions: {
		reducePrice: (context,payload) =>{
			setTimeout(function(){
				context.commit('reducePrice',payload)
			},2000)
		},
		pushcartitem :(context,payload) =>{
			context.commit('pushcartitem',payload)
		},
		pushsellitem :(context,payload) =>{
			context.commit('pushsellitem',payload)
		},
		pushadditem: (context,payload,rload) =>{
			context.commit('pushadditem',payload);
		}
	


	}




});

