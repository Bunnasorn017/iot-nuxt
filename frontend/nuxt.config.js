// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
    server: {
      port: 3001, // Port ที่ Nuxt จะใช้
      host: '0.0.0.0' // สำหรับให้สามารถเข้าถึงจาก IP อื่น
  }
})
