<template>
  <div class="content__container">
    <div class="content__header front__content">
      <img class="crest" src="~/assets/images/hogwarts-1.svg" alt="Hogwarts Crest" />
    </div>

    <div class="content__header back__content page2-content">
      <div class="content back__content__heading">
        <h3 class="back__section__heading">UNIFORME</h3>
        <p>Os estudantes do primeiro ano precisam de:</p>
        <ol class="back__header__list">
          <li>
            <span v-html="applyItalicization('3 conjuntos de vestes comuns de trabalho (pretas)')" />
          </li>
          <li>
            <span v-html="applyItalicization('1 chapéu pontudo simples (preto) para uso diário')" />
          </li>
          <li>
            <span v-html="applyItalicization(
              '1 par de luvas protetoras (couro de dragão ou similar)'
            )" />
          </li>
          <li>
            <span v-html="applyItalicization(
              '1 capa de inverno (preta com fechos prateados)'
            )" />
          </li>
        </ol>
        <h4>(As roupas do aluno devem ter etiquetas com seu nome)</h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
