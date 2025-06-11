<script>
  import StatsSection from '../components/StatsSection.svelte';

  // Function to check if the user is an admin
  const isAdmin = () => {
    return localStorage.getItem("isAdmin") === "true";
  };

  // Redirect if not admin
  if (!isAdmin()) {
    window.location.href = "/index.html";
  }
</script>

<main>
  <div class="titulo">
    <h1>⚙️ Panel de Administración</h1>
    <p>Accede a la Gestión de Productos, Usuarios y Facturas</p>
  </div>

  <div class="panel">
    <nav class="nav">
      <a href="/productos" class="nav-link">🥂 Productos</a>
      <a href="/usuarios" class="nav-link">🧑‍🤝‍🧑 Usuarios</a>
      <a href="/facturas" class="nav-link">📋 Facturas</a>
    </nav>

    <StatsSection />
  </div>
</main>

<style>
  .titulo {
    text-align: center;
    margin: 20px 0 40px 0;
  }

  .panel {
    max-width: 960px;
    margin: 0 auto 40px auto;
    padding: 10px 20px 40px 20px;
  }

  .nav {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 40px auto 50px auto;
    max-width: 700px;
    flex-wrap: wrap;
  }

  .nav-link {
    display: inline-block;
    background-color: rgba(212, 175, 55, 0.15);
    color: #f0db7d;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.3rem;
    padding: 14px 30px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
  }

  .nav-link:hover,
  .nav-link:focus {
    background-color: #d4af37;
    color: #222;
    box-shadow: 0 4px 16px rgba(212, 175, 55, 0.8);
    transform: scale(1.05);
    outline: none;
  }
</style>