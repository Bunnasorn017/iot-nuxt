<!-- pages/register.vue -->
<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Username" required>
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
const username = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

async function register() {
  try {
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, email: email.value, password: password.value })
    });
    const data = await response.json();
    if (response.ok) {
      alert('Registration successful. Please login.');
      router.push('/login');
    } else {
      alert(data.error);
    }
  } catch (error) {
    console.error('Registration error:', error);
  }
}
</script>