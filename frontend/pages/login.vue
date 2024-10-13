<!-- pages/login.vue -->
<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
const email = ref('');
const password = ref('');
const router = useRouter();

async function login() {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    });
    const data = await response.json();
    if (response.ok) {
      // Store token in localStorage or better, in a secure httpOnly cookie
      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } else {
      alert(data.error);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
</script>