<template>
    <main class="flex flex-col lg:flex-row m-auto max-w-6xl">

        <Head>
            <Title> {{ title }}</Title>
        </Head>
        <aside class="flex flex-col justify-center items-center w-full">
            <div class="my-6">
                <Profile />
            </div>
        </aside>

        <section class="p-6 mt-12">
            <div class="p-6">
                <h2 class="text-2xl">
                    Sobre mim
                </h2>
                <p class="text-lg leading-6 my-2 text-justify">
                    Engenheiro de Computação, especialista em segurança da informação com mais de <strong>9
                        anos</strong> de experiência como desenvolvedor de sistemas.
                </p>
                <p class="text-lg leading-6 my-2 text-justify">
                    Apaixonado por tecnologia, desafios e resolver problemas. Estou sempre buscando me aprimorar e
                    desenvolver tanto pessoal quanto profissionalmente.
                </p>
                <p class="text-lg leading-6 my-2 text-justify">
                    Minhas áreas de interesse incluem - mas não estão limitadas a - Desenvolvimento Web (Full-stack),
                    Automação de processos, Data Science e Machine Learning.
                </p>
            </div>

            <div class="p-6">
                <h2 class="text-2xl">
                    Tecnologias
                </h2>
                <p class="block mt-6">
                    <strong>Back-end: </strong>
                    PHP / Laravel / CodeIgniter 3, Python / Django, Javascript, Typescript, Node / Express / Nestjs
                </p>
                <p class="block mt-6">
                    <strong>Front-end:</strong>
                    HTML, CSS, Vue.js / Nuxt, React / Next, jQuery
                </p>
                <p class="block mt-6">
                    <strong>Banco de dados:</strong>
                    PostgreSQL, MySQL/MariaDB, Oracle
                </p>
                <p class="block mt-6">
                    <strong>Ferramentas:</strong>
                    Git, Linux Docker
                </p>
            </div>
        </section>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const title = ref('Sobre | viniboscoa.dev');
</script>

<style scoped lang="postcss">
div+div {
    @apply mt-6;
}
</style>
