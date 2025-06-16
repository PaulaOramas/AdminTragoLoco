<script>
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
  }

  function cerrarSesion() {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminCiRuc");
    window.location.href = "/";
  }
</script>

<header class="header-placeholder">
  <div class="logo">
    <a href="/dashboard" class="logo-link" aria-label="Ir a la página principal" style="display:flex; align-items:center; gap:0.5rem;">
      <img src="/imagenes/logo.png" alt="Logo Trago Loco" style="height:40px;" />
      <span>Panel Admin</span>
    </a>
  </div>
  <div class="text-end" style="display:flex; align-items:center; gap:1rem;">
    <button class="menu-toggle" aria-label="Mostrar menú" on:click={toggleMenu}>☰</button>
    <button class="logout-btn" on:click={cerrarSesion}>🔒 Cerrar Sesión</button>
  </div>
  <div id="mobileMenu" class="mobile-menu">
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
    position: relative;
    z-index: 10;
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
    transition: color 0.2s;
  }
  .logout-btn:hover {
    color: #d4af37;
  }

  .menu-toggle {
    background: none;
    border: none;
    color: #f0db7d;
    cursor: pointer;
    font-size: 1.5rem;
    display: none;
  }

  .mobile-menu {
    display: none;
    position: absolute;
    top: 60px;
    right: 20px;
    background: #222;
    border-radius: 8px;
    box-shadow: 0 2px 8px #d4af37bb;
    padding: 10px 20px;
    z-index: 20;
  }

  @media (max-width: 600px) {
    .menu-toggle {
      display: inline-block;
    }
    .logout-btn {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
  }
</style>