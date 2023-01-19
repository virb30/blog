<template>
    <div id="consent-term-container"
        class="bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 fixed bottom-0 w-full">
        <div class="py-6 px-8 flex items-center justify-center max-w-6xl m-auto">
            <p class="text-sm">
                Nós usamos Google Analytics para realizar análises estatísticas de uso da página e interações para
                avaliar e desenvolver nosso site. Ao utilizar nossos serviços você concorda com a coleta dessas
                informações.
                Para saber mais sobre como o Google utiliza os dados coletados através desse serviço, acesse: <a
                    href="http://www.google.com/policies/privacy/partners/"
                    class="underline">http://www.google.com/policies/privacy/partners/</a>
            </p>
            <button type="button"
                class="ml-4 border-2 border-gray-50 rounded px-4 h-8 text-xs text-gray-50 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-900 dark:text-gray-900 dark-hover:bg-gray-900 dark-hover:text-gray-50"
                @click="acceptCookiesPolicy">
                Aceitar
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useConsentTermStore } from '~/stores/consent-term';

const consentTermStore = useConsentTermStore();

const acceptCookiesPolicy = () => consentTermStore.acceptCookiesPolicy();
</script>
