<template>
  <h1>
    <Letter :title="title" :surname="surname" :gender="gender"/>
  </h1>
</template>

<script setup lang="ts">
import { navigateTo, useRoute, useRuntimeConfig } from 'nuxt/app';
import { jwtDecode } from 'jwt-decode';
import { ref } from 'vue';

const title = ref("");
const surname = ref("");
const gender = ref("");

type LetterPayload = {
	title: string;
	surname: string;
	version: string;
	gender: "F" | "M";
};

definePageMeta({
	middleware: [
		function (to: any, from: any) {
			try {
				if (!to.query.token) {
				 throw new Error('Token not provided');
				}
				const jwt = jwtDecode<LetterPayload>(to.query.token);
				if (!jwt.title || !jwt.surname || !jwt.version) {
					throw new Error('Invalid payload');
				}
			} catch (error) {
				return navigateTo('/', { redirectCode: 301});
			}
		}
	]
})

useHead({
	title: 'Carta'
});

const route = useRoute();

const extractDataFromJwt = (token: string) => {
	const jwt = jwtDecode<LetterPayload>(token);
	title.value = jwt.title;
	surname.value = jwt.surname;
	gender.value = jwt.gender ?? "";
}

extractDataFromJwt(route.query.token as string);

</script>
