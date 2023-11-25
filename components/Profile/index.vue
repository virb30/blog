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
            <a href="https://www.linkedin.com/in/vinicius-boscoa"
                class="block bg-gray-300 rounded py-2 px-3 text-xl text-gray-800" @click="contactAccessed('linkedin')"
                id="contact-linkedin">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <a href="https://www.github.com/virb30" class="block bg-gray-300 rounded py-2 px-3 text-xl text-gray-800"
                @click="contactAccessed('github')" id="contact-github">
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSessionStore } from '~/stores/session';

const sessionStore = useSessionStore();
const analytics = useAnalytics();

const contactAccessed = (type: string) => {
    const sessionId = sessionStore?.sessionId;

    if (sessionId) {
        analytics.logEvent('contact', {
            type,
            sessionId
        })
    }
}

</script>

<style scoped lang="postcss">
a+a {
    @apply ml-3;
}

a:hover {
    @apply bg-indigo-700 text-white;
}
</style>
