const { createApp, ref } = Vue

createApp({
  setup() {
    const pagePerfil=()=>{
        window.location.href="pagePerfil.html"
    }
    return {
      pagePerfil
    }
  }
}).mount('#app')