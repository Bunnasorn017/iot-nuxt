<!-- pages/dashboard.vue -->
<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>

definePageMeta({
  middleware: ['auth']
})

const router = useRouter();

async function logout() {
  try {
    // Call to backend logout endpoint (optional)
    await fetch('http://localhost:5000/api/auth/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    // Remove token from localStorage
    localStorage.removeItem('token');

    // Redirect to login page
    router.push('/login');
  } catch (error) {
    console.error('Logout error:', error);
  }
}
</script>