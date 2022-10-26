<template>
    <div class="d-flex flex-column block align-center background justify-center text-white">
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
    background-color: #212121;

    background-image: url("./../assets/probva1.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-blend-mode:soft-light;
    min-height: 400px;
  }
  </style>