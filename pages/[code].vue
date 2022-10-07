<script lang="ts" setup>
const route = useRoute();
const links = new Map([
	["vsc", "https://code.visualstudio.com/"],
	["pwned", "https://haveibeenpned.com/"],
	["mld", "https://drawsql.app/"],
]);

onMounted(() => {
	console.log(links);
	if (route.params.code instanceof Array) {
		window.location.href = "/";
		return;
	}

	if (links.has(route.params.code)) {
		window.location.href = links.get(route.params.code);
	} else {
		window.location.href = "/";
	}
});

</script>

<template>
	<div class="bg-slate-300 dark:bg-slate-800 dark:text-white h-screen flex flex-row items-center justify-center">
		<h1>Redirecting...</h1>
	</div>
</template>	
