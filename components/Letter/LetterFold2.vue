<template>
  <div class="content__container">
    <div class="content front__content">
      <p class="content__greeting">{{ `${greetings} ${title} ${surname},` }}</p>
			<section class="content__body">
				<p class="content__paragraph">
					Temos o prazer de informar que V. Sa. tem uma vaga na Escola de Magia e
					Bruxaria de Hogwarts. Estamos anexando uma lista dos livros e equipamentos
					necessários.
				</p>
				<p class="content__paragraph">
					O ano letivo se inicia em 1 de setembro. Aguardamos sua coruja até 31 de
					julho, no mais tardar.
				</p>
			</section>
    </div>
    <div class="content back__content back__content__body page2-content">
      <h3 class="back__section__heading">LIVROS</h3>
      <p>Os alunos devem comprar um exemplar de cada um dos seguintes:</p>
      <ul class="back__body__list">
        <li>
          <span v-html="applyItalicization(
            'Livro padrão de feitiços (série 1) por Miranda Goshawk'
          )" />
        </li>
        <li>
          <span v-html="applyItalicization('História da Magia por Bathilda Bagshot')" />
        </li>
        <li>
          <span v-html="applyItalicization('Teoria da magia por Adalbert Waffling')" />
        </li>
        <li>
          <span v-html="applyItalicization(
            'Guia de transfiguração para iniciantes por Emeric Switch'
          )" />
        </li>
        <li>
          <span v-html="applyItalicization(
            'Mil ervas e fungos mágicos por Phyllida Spore'
          )" />
        </li>
        <li>
          <span v-html="applyItalicization(
            'Bebidas e poções mágicas por Arsenius Jigger'
          )" />
        </li>
        <li>
          <span v-html="applyItalicization(
            'Animais fantásticos e onde habitam por Newt Scamander'
          )" />
        </li>
        <li>
          <span v-html="applyItalicization(
            'As forças das trevas: Um guia de autoproteção por Quentin Trimble'
          )" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps(['title', 'surname', 'gender']);

const greetings = computed(() => {
	return props.gender === 'F'? 'Prezada': 'Prezado';
})

const applyItalicization = (text: string) => {
  // Italicizing text in parentheses
  text = text.replace(
    /\(([^)]+)\)/g,
    '<span style="font-style: italic; font-size: 0.8em; color: #0c0434;">($1)</span>'
  );

  // Italicizing text following 'by'
  text = text.replace(
    /por\s+([\w\s]+)/g,
    '<span style="font-style: italic; font-size: 0.8em; color: #0c0434;">por $1</span>'
  );

  return text;
}
</script>

<style src="./post.css" scoped />
