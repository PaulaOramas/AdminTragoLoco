<script>
  import { onMount } from 'svelte';

  let productos = [];
  let categorias = [];
  let filtroCategoria = '';
  let busquedaNombre = '';

  // Redirección si no es admin
  onMount(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      window.location.href = "/";
    }
    cargarCategorias();
    cargarProductos();
  });

  async function cargarCategorias() {
    try {
      const res = await fetch('https://eltragolocorest.runasp.net/api/Categoria');
      if (!res.ok) throw new Error("Error al cargar categorías");
      categorias = await res.json();
    } catch (err) {
      categorias = [];
    }
  }

  async function cargarProductos() {
    try {
      const res = await fetch('https://eltragolocorest.runasp.net/api/Producto');
      if (!res.ok) throw new Error("Error al cargar productos");
      productos = await res.json();
    } catch (err) {
      productos = [];
    }
  }

  $: productosFiltrados = productos.filter(p => {
    const coincideCategoria = !filtroCategoria || p.CAT_ID == filtroCategoria;
    const coincideBusqueda = p.PROD_NOMBRE?.toLowerCase().includes(busquedaNombre.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  function editarProducto(productId) {
    // Redirigir a la página de edición de producto
    window.location.href = `/editar-producto?id=${productId}`;
  }

  async function eliminarProducto(productId) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        const res = await fetch(`https://eltragolocorest.runasp.net/api/Producto/${productId}`, {
          method: 'DELETE'
        });
        if (!res.ok) throw new Error("Error al eliminar producto");
        // Recargar la lista de productos
        cargarProductos();
      } catch (err) {
        alert(err.message);
      }
    }
  }
</script>

<svelte:head>
  <title>Lista de Productos</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
</svelte:head>

<div class="container mt-5">
  <h1>Lista de Productos</h1>

  <div class="mb-3">
    <label for="filtroCategoria" class="form-label">Filtrar por categoría</label>
    <select bind:value={filtroCategoria} class="form-select" id="filtroCategoria">
      <option value="">Todas las categorías</option>
      {#each categorias as categoria}
        <option value={categoria.CAT_ID}>{categoria.CAT_NOMBRE}</option>
      {/each}
    </select>
  </div>

  <div class="mb-3">
    <label for="busquedaNombre" class="form-label">Buscar por nombre</label>
    <input type="text" bind:value={busquedaNombre} class="form-control" id="busquedaNombre" placeholder="Nombre del producto">
  </div>

  <div class="mb-3">
    <button class="btn btn-primary" on:click={cargarProductos}>Actualizar lista</button>
  </div>

  {#if productosFiltrados.length > 0}
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {#each productosFiltrados as producto}
          <tr>
            <td>{producto.PROD_ID}</td>
            <td>{producto.PROD_NOMBRE}</td>
            <td>{producto.PROD_DESCRIPCION}</td>
            <td>{producto.PROD_PRECIO}</td>
            <td>{producto.CAT_NOMBRE}</td>
            <td>
              <button class="btn btn-warning btn-sm" on:click={() => editarProducto(producto.PROD_ID)}>Editar</button>
              <button class="btn btn-danger btn-sm" on:click={() => eliminarProducto(producto.PROD_ID)}>Eliminar</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <div class="alert alert-info" role="alert">
      No se encontraron productos que coincidan con los criterios de búsqueda.
    </div>
  {/if}
</div>