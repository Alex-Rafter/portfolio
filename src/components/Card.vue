<template>
	<div>
	  <h1>{{ title }}</h1>
	  <p>This is a card component</p>
	</div>
  </template>

  <script>
  export default {
	name: 'TitleComponent',
	props: {
	  title: {
		type: String,
		required: true
	  }
	}
  }
  </script>

  <style scoped>
  h1 {
	font-size: 2em;
	color: #333;
  }
  </style>
