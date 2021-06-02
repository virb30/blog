<template>
	<main :class="$style.container">
		<aside>
			<div :class="$style.profile">
				<Profile />
			</div>
			<div :class="$style.summary"></div>
		</aside>

		<section>
			<h1>Sobre</h1>
			<p>
				Engenheiro de Computação, especialista em segurança da informação e apaixonado por tecnologia. Atuo como desenvolvedor de sistemas com ênfase em aplicações Web.
				Desenvolver além da minha profissão, meu hobby. Sou capaz de navegar facilmente entre os mundos frontend e backend, mas minha preferência é o backend.
				Recentemente tenho me aventurado no mundo do Data Science.
			</p>
			<p>Gosto de desafios e resolver problemas dos mais variados tipos.</p>
			<p>Estou sempre aprendendo algo novo.</p>
		</section>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	head: {
		title: 'Sobre | viniboscoa.dev',
	},
});
</script>

<style lang="postcss" module src="./style.module.postcss" scoped>
</style>
