<template>
	<h1>{{ title }}</h1>
  </template>

  <script>

  var testingEsLintStr = 'testing';

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
