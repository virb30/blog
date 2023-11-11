<template>
    <div class="w-full">
        <slot />
        <client-only>
            <CookieConsent v-cloak v-if="!policyAccepted" />
        </client-only>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, computed } from 'vue'
import CookieConsent from '../components/CookieConsent/index.vue';
import { useConsentTermStore } from '../stores/consent-term';
import { useRoute } from 'vue-router';

const consentTermStore = useConsentTermStore()

const fetchFromStorage = () => consentTermStore.fetchFromStorage()

const route = useRoute();

useHead({
    link: [
        {
            rel: 'canonical',
            href: 'https://viniboscoa.dev' + route.path,
        },
    ],
})

onBeforeMount(() => {
    fetchFromStorage();
})

const policyAccepted = computed(() => consentTermStore.getPolicyAccepted)

</script>

<style scoped>
[v-cloak] {
    display: none;
}
</style>
