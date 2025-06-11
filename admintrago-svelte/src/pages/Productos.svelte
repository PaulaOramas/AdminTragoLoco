<script>
  import { onMount } from 'svelte';
  import ProductsChart from '../components/ProductsChart.svelte';

  let products = [];

  onMount(async () => {
    try {
      const response = await fetch('https://eltragolocorest.runasp.net/api/Categoria/CantidadProductosPorCategoria');
      if (!response.ok) throw new Error('Error al obtener datos');

      products = await response.json();
    } catch (error) {
      console.error('Error cargando productos:', error);
    }
  });
</script>

<style>
  .productos-section {
    padding: 20px;
    background-color: #2c2f36;
    border-radius: 10px;
    box-shadow: 0 0 15px #d4af37cc;
    color: #f0db7d;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .product-list {
    margin-top: 20px;
  }

  .product-item {
    background-color: #3b3f46;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
</style>

<div class="productos-section">
  <h2>🍹 Gestión de Productos</h2>
  <ProductsChart {products} />
  <div class="product-list">
    {#each products as product}
      <div class="product-item">
        <h3>{product.CAT_NOMBRE}</h3>
        <p>Cantidad: {product.CANTIDAD_PRODUCTOS}</p>
      </div>
    {/each}
  </div>
</div>