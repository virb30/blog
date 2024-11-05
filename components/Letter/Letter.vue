<template>
  <div class="letter__container">
    <div class="letter forward" :class="{ unfolded: unfolded, flipped: flipped }">
      <div class="fold fold1" @click="handleUnfold">
        <LetterFold />
      </div>
      <div class="fold fold2" :class="{ folded: !fold2Unfolded }">
        <LetterFold2 :title="title" :surname="surname" />
      </div>
      <div class="sharp-fold fold fold3" :class="{ folded: !fold3Unfolded }" @click="handleFlip">
        <LetterFold3 />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const unfolded = ref(false);
const fold2Unfolded = ref(false);
const fold3Unfolded = ref(false);
const flipped = ref(false);
const animationDirection = ref("forward");



const handleUnfold = () => {
  console.log('flipped', flipped);
  console.log('unfolded', unfolded);
  console.log('fold2 unfolded', fold2Unfolded);
  console.log('fold3 unfolded', fold3Unfolded);
  if (unfolded.value === false) {
    unfolded.value = true;
    fold2Unfolded.value = true;
    setTimeout(() => {
      fold3Unfolded.value = true
    }, 500);
  } else if (flipped.value === false) {
    fold3Unfolded.value = false;
    setTimeout(() => {
      fold2Unfolded.value = false;
      unfolded.value = false;
    }, 500);
  }
}

const handleFlip = () => {
  if (fold3Unfolded.value === true) {
    setTimeout(() => {
      flipped.value = !flipped.value;
      animationDirection.value = animationDirection.value === "forward" ? "reverse" : "forward";
      setTimeout(() => {
        fold3Unfolded.value = true;
      }, 500)
    });
  }
}

const title = ref("Srta");
const surname = ref("Surname");

</script>


<style src="./post.css" scoped />
