<template>
  <div class="content__container">
    <div>
      <div class="content__signOff front__content">
        <p>Yours sincerely,</p>
        <p class="content__signature">Minerva McGonagall</p>
        <p>Deputy Headmistress</p>
      </div>
      <div class="content__footer  front__content">
        <div class="content">
          <h2>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h2>
          <p class="content__footerText">
            Headmaster: Albus Dumbledore (Order of Merlin, First Class, Grand
            Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of
            Wizards)
          </p>
        </div>
      </div>
      <div class="content back__content back__content__footer page2-content">
        <h3 class="back__section__heading footer__heading">
          OTHER EQUIPMENT
        </h3>
        <ul class="back__footer__list">
          <li>
            <span v-html="applyItalicization(' 1 Wand')" />
          </li>
          <li>
            <span v-html="applyItalicization(' 1 Cauldron (pewter, standard size 2)')" />
          </li>
          <li><span v-html="applyItalicization(' 1 Set glass or crystal phials')" /></li>
          <li><span v-html="applyItalicization(' 1 Telescope')" /></li>
          <li><span v-html="applyItalicization(' 1 Set brass scales')" /></li>
        </ul>
        <h4>
          <span v-html="applyItalicization(
            ' Students may also bring an owl OR a cat OR a toad'
          )" />
        </h4>
        <h3 class="back__footer content__footerText">
          <span v-html="applyItalicization(
            ' PARENTS ARE REMINDED THAT FIRST-YEARS ARE NOT ALLOWED THEIR OWN BROOMSTICKS'
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
    /by\s+([\w\s]+)/g,
    '<span style="font-style: italic; font-size: 0.8em; color: #0c0434;">by $1</span>'
  );

  return text;
}
</script>

<style src="./post.css" scoped />