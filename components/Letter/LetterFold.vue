<template>
  <div class="content__container">
    <div class="content__header front__content">
      <img class="crest" src="~/assets/images/hogwarts-1.svg" alt="Hogwarts Crest" />
    </div>

    <div class="content__header back__content page2-content">
      <div class="content back__content__heading">
        <h3 class="back__section__heading">UNIFORM</h3>
        <p>First-year students will require:</p>
        <ol class="back__header__list">
          <li>
            <span v-html="applyItalicization('Three sets of plain work robes (black)')" />
          </li>
          <li>
            <span v-html="applyItalicization('One plain pointed hat (black) for day wear')" />
          </li>
          <li>
            <span v-html="applyItalicization(
              'One pair of protective gloves (dragon hide or similar)'
            )" />
          </li>
          <li>
            <span v-html="applyItalicization(
              'One winter cloak (black, silver fastenings)'
            )" />
          </li>
        </ol>
        <h4>Please note that all pupils’ clothes should carry name tags</h4>
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
    /by\s+([\w\s]+)/g,
    '<span style="font-style: italic; font-size: 0.8em; color: #0c0434;">by $1</span>'
  );

  return text;
}

</script>

<style src="./post.css" scoped />