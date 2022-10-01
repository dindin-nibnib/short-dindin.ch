<script lang="ts" setup>
const route = useRoute();
const links = new Map([
	["vsc", "https://code.visualstudio.com/"]
]);

onMounted(() => {
	if (links.has(route.params.slug[0])) {
		window.location.href = links.get(route.params.slug[0]);
	} else {
		window.location.href = "/404";
	}
});

</script>

<template>
	<div class="bg-slate-300 dark:bg-slate-800 dark:text-white h-screen">
		<h1>Redirecting...</h1>
	</div>
</template>	
