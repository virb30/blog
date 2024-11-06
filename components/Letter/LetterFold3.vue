<template>
  <div class="content__container">
    <div>
      <div class="content__signOff front__content">
        <p>Atenciosamente,</p>
        <p class="content__signature">Minerva McGonagall</p>
        <p>Diretora substituta</p>
      </div>
      <div class="content__footer  front__content">
        <div class="content">
          <h2>ESCOLA DE MAGIA E BRUXARIA DE HOGWARTS</h2>
          <p class="content__footerText">
            Diretor: Alvo Dumbledore (Orde de Merlim, Primeira Classe, Grande
            Feiticeiro, Bruxo Chefe, Cacique Supremo, Confederação Internacional
            de Bruxos)
          </p>
        </div>
      </div>
      <div class="content back__content back__content__footer page2-content">
        <h3 class="back__section__heading footer__heading">
          OUTROS EQUIPAMENTOS
        </h3>
        <ul class="back__footer__list">
          <li>
            <span v-html="applyItalicization(' 1 varinha mágica')" />
          </li>
          <li>
            <span v-html="applyItalicization(' 1 caldeirão (estanho, tamanho padrão 2)')" />
          </li>
          <li><span v-html="applyItalicization(' 1 conjunto de frascos')" /></li>
          <li><span v-html="applyItalicization(' 1 telescópio')" /></li>
          <li><span v-html="applyItalicization(' 1 balança de latão')" /></li>
        </ul>
        <h4>
          <span v-html="applyItalicization(
            ' Os alunos podem ainda trazer uma coruja OU um gato OU um sapo'
          )" />
        </h4>
        <h3 class="back__footer content__footerText">
          <span v-html="applyItalicization(
            ' LEMBRAMOS AOS PAIS QUE OS ALUNOS DO PRIMEIRO ANO NÃO PODEM USAR VASSOURAS PESSOAIS'
          )" />
        </h3>
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
