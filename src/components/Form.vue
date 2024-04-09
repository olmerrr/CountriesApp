<template>
  <div class="form__title">Contact Form</div>
  <form class="form" @submit.prevent="handleSubmit">
    <input
        type="text"
        placeholder="First Name*"
        class="form__input"
        v-model="firstName"
    />
    <input
        type="text"
        placeholder="Second Name*"
        class="form__input"
        v-model="secondName"
    />
    <input
        type="email"
        placeholder="E-mail*"
        class="form__input"
        v-model="email"
    />
    <input
        type="text"
        placeholder="Phone Number"
        class="form__input"
    />
    <button class="form__btn" type="submit">Submit</button>
  </form>
</template>
<script setup lang="ts">
import {ref} from "vue";

const firstName = ref("");
const secondName = ref("");
const email = ref("");

const handleSubmit = () => {
  if (firstName.value && secondName.value && email.value) {
    alert("Submit");
  }
}
</script>
<style lang="scss" scoped>
.form {
  width: 320px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 4px;
  background: rgba(169, 89, 169, 0.82);

  &__title {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 18px;
  }

  &__input {
    padding: 10px 8px;
    border: none;
    box-shadow: 1px 1px 1px 2px rgba(0, 0, 49, 0.1);
    border-radius: 4px;
    margin-bottom: 18px;
    background: #f2f2f2;
  }

  &__btn {
    border-radius: 4px;
    padding: 8px 32px;
    border: none;
    display: flex;
    align-items: center;
    margin: 0 auto;
    box-shadow: 1px 1px 1px 2px rgba(0, 0, 49, 0.1);
    background: #f2f2f2;
  }
}
</style>
