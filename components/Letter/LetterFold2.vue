<template>
  <div class="content__container">
    <div class="content front__content">
      <p class="content__greeting">{{ `Dear ${title} ${surname},` }}</p>
      <p class="content__body">
        We are pleased to inform you that you have a place at Hogwarts School
        of Witchcraft and Wizardry. Please find enclosed a list of all
        necessary books and equipment. Term begins on 1 September. We await
        your owl by no later than 31 July.
      </p>
    </div>
    <div class="content back__content back__content__body page2-content">
      <h3 class="back__section__heading">SET BOOKS</h3>
      <p>All students should have a copy of each of the following:</p>
      <ul class="back__body__list">
        <li>
          <span v-html="applyItalicization(
            'The Standard Book of Spells (Grade 1) by Miranda Goshawk'
          )" />
        </li>
        <li>
          <span v-html="applyItalicization('A History of Magic by Bathilda Bagshot')" />
        </li>
        <li>
          <span v-html="applyItalicization('Magical Theory by Adalbert Waffling')" />
        </li>
        <li>
          <span v-html="applyItalicization(
            'A Beginner’s Guide to Transfiguration by Emeric Switch'
          )" />
        </li>
        <li>
          <span v-html="applyItalicization(
            'One Thousand Magical Herbs and Fungi by Phyllida Spore'
          )" />
        </li>
        <li>
          <span v-html="applyItalicization(
            'Magical Drafts and Potions by Arsenius Jigger'
          )" />
        </li>
        <li>
          <span v-html="applyItalicization(
            'Fantastic Beasts and Where to Find Them by Newt Scamander'
          )" />
        </li>
        <li>
          <span v-html="applyItalicization(
            'The Dark Forces: A Guide to Self-Protection by Quentin Trimble'
          )" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps(['title', 'surname']);

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
