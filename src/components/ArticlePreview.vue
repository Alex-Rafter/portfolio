<script setup>
const props = defineProps({
    title: String,
    date: String,
    url: String,
});

console.log(props);

</script>

<template>
  <a
    :href="url ?? '/article'"
    class="preview d-block mb-2 position-relative"
  >
    <div class="preview__anchor text-decoration-none">
      <h2 class="fw-light text-dark mb-1 text-lowercase">{{ title ?? 'Just a description' }}</h2>
      <p class="small text-danger h-100 d-flex align-items-center mb-0 position-absolute end-0 top-0">{{ date ?? '10/10/2024' }}</p>
    </div>
  </a>
</template>
<style scoped>

a.preview {
	text-decoration: none;
    cursor: pointer;
}

a.preview:hover {

	&:before {
		position: absolute;
		top: -1.4px;
		left: -1.4rem;
		content: '+';
		height: 100%;
		display: flex;
		align-items: center;
		color: #212529;
		font-size: 1.5rem;
		font-weight: 300;
	}

	& :is(h2, p) {
		color: #fff !important;
		background-color: #212529;
	}
}

</style>
