<script>
  import { onMount } from 'svelte';
  let users = [];

  onMount(async () => {
    try {
      const response = await fetch('https://eltragolocorest.runasp.net/api/Login/RolesCantidadUsuarios');
      if (!response.ok) throw new Error('Error al obtener datos');
      users = await response.json();
    } catch (error) {
      console.error('Error cargando datos de usuarios:', error);
    }
  });
</script>

<style>
  .usuarios-section {
    background-color: #2c2f36;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 0 15px #d4af37cc;
    color: #f0db7d;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 1.8rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #d4af37;
  }

  th {
    background-color: #3b3f46;
  }
</style>

<div class="usuarios-section">
  <h2>🧑‍🤝‍🧑 Gestión de Usuarios</h2>
  <table>
    <thead>
      <tr>
        <th>Rol</th>
        <th>Cantidad de Usuarios</th>
      </tr>
    </thead>
    <tbody>
      {#each users as user}
        <tr>
          <td>{user.LOG_ROL}</td>
          <td>{user.CANTIDAD_USUARIOS}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>