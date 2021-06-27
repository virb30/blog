<template>
	<div :class="$style.container">
		<img src="~/assets/images/profile.jpg" alt="avatar" />
		<h1>Vinícius Bôscoa</h1>
		<span> Desenvolvimento Web, Segurança da Informação e Data Science</span>
		<div :class="$style.socialContainer">
			<a href="https://www.linkedin.com/in/vinicius-boscoa">
				<FontAwesomeIcon :icon="['fab', 'linkedin-in']" />
			</a>
			<a href="https://www.github.com/virb30">
				<FontAwesomeIcon :icon="['fab', 'github']" />
			</a>
		</div>
	</div>
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';

library.add(faLinkedinIn, faGithub, faEnvelope);

export default Vue.extend({
	components: {
		FontAwesomeIcon,
	},
});
</script>

<style module lang="postcss" scoped src="./style.module.postcss"></style>
