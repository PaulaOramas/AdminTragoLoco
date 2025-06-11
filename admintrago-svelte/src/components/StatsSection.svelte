<script>
  import ProductsChart from './ProductsChart.svelte';
  import UsersChart from './UsersChart.svelte';

  let productsData = [];
  let usersData = [];

  async function fetchProductsData() {
    try {
      const response = await fetch('https://eltragolocorest.runasp.net/api/Categoria/CantidadProductosPorCategoria');
      if (!response.ok) throw new Error('Error al obtener datos de productos');
      productsData = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchUsersData() {
    try {
      const response = await fetch('https://eltragolocorest.runasp.net/api/Login/RolesCantidadUsuarios');
      if (!response.ok) throw new Error('Error al obtener datos de usuarios');
      usersData = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  // Fetch data when the component is mounted
  onMount(() => {
    fetchProductsData();
    fetchUsersData();
  });
</script>

<section class="stats-section">
  <h2>📈 Estadísticas de Gestión</h2>
  <div class="charts">
    <div class="chart-card">
      <h3>🍹 Productos Registrados</h3>
      <ProductsChart {productsData} />
    </div>
    <div class="chart-card">
      <h3>🧑‍🤝‍🧑 Distribución de Usuarios</h3>
      <UsersChart {usersData} />
    </div>
  </div>
</section>

<style>
  .stats-section {
    background-color: #2c2f36;
    padding: 25px 30px 35px 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px #d4af37cc;
  }

  .stats-section h2 {
    text-align: center;
    margin-bottom: 35px;
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  .charts {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .chart-card {
    background-color: #3b3f46;
    padding: 25px 20px 30px 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px #d4af37bb;
  }

  .chart-card h3 {
    text-align: center;
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 1.4rem;
  }
</style>