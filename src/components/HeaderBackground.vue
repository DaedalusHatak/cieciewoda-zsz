<template>
  

    <div class="d-flex flex-column fill-height block align-center background justify-center text-white">
      <h1 class="text-xs-h6 text-md-h3 text-lg-h2">{{props.heading}}</h1>
      <slot> 
      </slot>
  </div>

    
  </template>
  <script setup>
  import { defineProps } from 'vue';

const props = defineProps({
	heading: {
		type: String,
	},
  apex:{
    type: String,
  }
});
  </script>
  <style>
  .v-container {
    padding: 0;
    margin: 0;
    max-width: 100%;
  }
  
  .bg-aqua {
    background-color: aqua;
  }
  .background{
    background-image: url("../assets/background-dark-top.jpg");
    background-attachment: fixed;
    position: relative;
    background-position:top;
    min-height: 400px;
  }
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
  </style>