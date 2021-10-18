<template>
	<div class="w-full flex items-center justify-center flex-col p-2">
		<img src="~/assets/images/profile.jpg" alt="avatar" class="h-40 w-40 rounded-full mb-8" />
		<h1 class="mb-4 text-3xl font-bold">
			Vinícius Bôscoa
		</h1>
		<span class="block font-thin mb-4 text-lg mt-2 text-center">
			Desenvolvimento Web, Segurança da Informação e Data Science
		</span>
		<div class="flex mt-6">
			<a
				href="https://www.linkedin.com/in/vinicius-boscoa"
				class="block bg-gray-200 rounded py-2 px-3 text-xl text-gray-800"
			>
				<FontAwesomeIcon :icon="['fab', 'linkedin-in']" />
			</a>
			<a
				href="https://www.github.com/virb30"
				class="block bg-gray-200 rounded py-2 px-3 text-xl text-gray-800"
			>
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

<style module scoped src="./style.module.css"></style>
