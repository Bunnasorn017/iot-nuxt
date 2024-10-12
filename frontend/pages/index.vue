<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const message = ref('');

onMounted(async () => {
  const response = await fetch('http://localhost:5000/api/data');
  const data = await response.json();
  message.value = data.message;
});
</script>
