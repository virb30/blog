<template>
	<main :class="$style.content">
		<aside>
			<div :class="$style.profileContainer">
				<Profile />
			</div>
		</aside>

		<section>
			<div :class="$style.textBox">
				<h1>Sobre mim</h1>
				<p>
					Engenheiro de Computação, especialista em segurança da informação com mais de <strong>7 anos</strong> de experiência como desenvolvedor de sistemas.
				</p>
				<p>
					Apaixonado por tecnologia, desafios e resolver problemas. Estou sempre buscando me aprimorar e desenvolver tanto pessoal quanto profissionalmente.
				</p>
				<p>
					Minhas áreas de interesse incluem - mas não estão limitadas a - Desenvolvimento Web (Full-stack), Automação de processos, Data Science e Machine Learning.
				</p>
			</div>

			<div :class="$style.textBox">
				<h1>Tecnologias</h1>
				<p>
					<strong>Back-end: </strong>
					PHP / Laravel / CodeIgniter 3, Python / Django, Javascript, Typescript, Node / Express / Nestjs
				</p>
				<p>
					<strong>Front-end:</strong>
					HTML, CSS, Vue.js / Nuxt, React / Next, jQuery
				</p>
				<p>
					<strong>Banco de dados:</strong>
					PostgreSQL, MySQL/MariaDB, Oracle
				</p>
				<p>
					<strong>Ferramentas:</strong>
					Git, Linux Docker
				</p>
			</div>
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
