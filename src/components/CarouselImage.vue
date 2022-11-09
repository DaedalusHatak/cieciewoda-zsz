<template>
		<v-carousel class="med" color="#C0CA33"  height="80vh"  :cycle="cycle" interval="100" theme="dark">
		<v-carousel-item  fade  
			>
			
				<v-img cover src="../assets/1.webp"></v-img
					>
			
			</v-carousel-item>
		<v-carousel-item fade  
			>
			<v-img cover  src="../assets/2.webp"></v-img>
			</v-carousel-item
		><v-carousel-item fade  
			>
			
			<v-img cover  src="../assets/3.webp"></v-img></v-carousel-item
		><v-carousel-item fade  
			>
			
			<v-img cover  src="../assets/4.webp"></v-img></v-carousel-item
		><v-carousel-item  fade  
			>
			
			<v-img cover  src="../assets/5.webp"></v-img></v-carousel-item>
	</v-carousel >
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	value: {
		type: String,
	},
});
let cycle;
if(props.value==="5"){
	 cycle = false;
}
else{cycle = false;}

</script>
<style scoped>
.v-carousel {
	text-align:end;
	
		max-width: 60vh !important;
	margin: 0 auto;
}
.v-carousel img{
	scale:1.0;
}
  @media screen and (max-width:600px) and (min-width:320px)
  {
	.med{
		height: auto !important;
	}
	.med img{
		scale:1.0;
		width:100%;
		height:100%;
	}
  }

  @media screen and (max-width:320px)
  {
	.med{
		height:auto !important;
	}
	.med img{
		width:100%;
		height:100%;
	}
  }
.v-window__container {
	height: 0;
   }

</style>
