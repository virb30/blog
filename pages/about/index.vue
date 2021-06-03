<template>
	<main :class="$style.content">
		<aside>
			<div :class="$style.profileContainer">
				<Profile />
			</div>
		</aside>

		<section>
			<div :class="$style.textBox">
				<h1>Sobre</h1>
				<p>
					Engenheiro de Computação, especialista em segurança da informação e apaixonado por tecnologia com mais de 7 anos de experiência como desenvolvendor de sistemas.
				</p>
				<p>
					Em busca de se tornar um profissional completo, seu perfil é generalista, capaz de navegar entre backend e frontend com facilidade. Domina o PHP, Laravel e Vue.js.
					Conhece suficientemente bem Python e Django e recentemente se aventura no mundo do Data Science.
				</p>
				<p>
					Gosta de desafios e resolver problemas dos mais variados tipos e sempre aprender algo novo.
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
					HTML, CSS, , Vue.js / Nuxt, React / Next, jQuery
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
