<script>
  import { onMount } from 'svelte';
  let isAdmin = false;

  onMount(() => {
    isAdmin = localStorage.getItem("isAdmin") === "true";
    if (!isAdmin) {
      window.location.href = "/Index.html";
    }
  });
</script>

<header class="header-placeholder">
  <div class="header-placeholder">
    <a href="/Dashboard.svelte" class="logo-link" aria-label="Ir a la página principal">
      <div class="logo" style="cursor:pointer; display:flex; align-items:center; gap: 0.5rem;">
        <img src="/imagenes/logo.png" alt="Logo Trago Loco" />
        <span>Panel Admin</span>
      </div>
    </a>
  </div>
  <div class="text-end">
    <button class="menu-toggle" aria-label="Mostrar menú" on:click={toggleMenu}>☰</button>
    <button class="logout-btn" on:click={cerrarSesion}>🔒 Cerrar Sesión</button>
  </div>
  <div id="mobileMenu" class="mobile-menu" style="display:none;">
    <button class="logout-btn" on:click={cerrarSesion}>🔒 Cerrar Sesión</button>
  </div>
</header>

<style>
  .header-placeholder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #222;
    color: #f0db7d;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logout-btn {
    background: none;
    border: none;
    color: #f0db7d;
    cursor: pointer;
    font-size: 1.2rem;
  }

  .menu-toggle {
    background: none;
    border: none;
    color: #f0db7d;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .mobile-menu {
    display: none;
  }
</style>