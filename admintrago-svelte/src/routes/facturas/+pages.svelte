<!-- filepath: /admintrago-svelte/admintrago-svelte/src/pages/Facturas.svelte -->
<script>
  import { onMount } from 'svelte';

  let invoices = [];

  async function fetchInvoices() {
    try {
      const response = await fetch('https://eltragolocorest.runasp.net/api/Facturas');
      if (!response.ok) throw new Error('Error al obtener facturas');
      invoices = await response.json();
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  }

  onMount(() => {
    fetchInvoices();
  });
</script>

<style>
  .invoices {
    background-color: #2c2f36;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px #d4af37cc;
    color: #f0db7d;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #d4af37;
  }

  th {
    background-color: #3b3f46;
  }
</style>

<div class="invoices">
  <h2>📋 Gestión de Facturas</h2>
  {#if invoices.length > 0}
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th>Fecha</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {#each invoices as invoice}
          <tr>
            <td>{invoice.id}</td>
            <td>{invoice.cliente}</td>
            <td>{invoice.fecha}</td>
            <td>{invoice.total}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>No hay facturas disponibles.</p>
  {/if}
</div>