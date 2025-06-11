<script>
  import { onMount } from 'svelte';
  import { Chart } from 'chart.js';

  let chart;

  onMount(async () => {
    const ctx = document.getElementById('usersChart').getContext('2d');

    try {
      const response = await fetch('https://eltragolocorest.runasp.net/api/Login/RolesCantidadUsuarios');
      if (!response.ok) throw new Error('Error al obtener datos');

      const data = await response.json();
      const labels = data.map(item => item.LOG_ROL);
      const cantidades = data.map(item => item.CANTIDAD_USUARIOS);

      const backgroundColor = ['#f0db7d', '#d4af37', '#c1b24a', '#e2d77a'];

      chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: cantidades,
            backgroundColor: backgroundColor.slice(0, labels.length),
            borderColor: '#2c2f36',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: { color: '#f0db7d' }
            }
          }
        }
      });

    } catch (error) {
      console.error('Error cargando datos para gráfico:', error);
    }
  });
</script>

<canvas id="usersChart" width="400" height="400"></canvas>

<style>
  canvas {
    display: block;
    max-width: 100%;
    height: auto;
  }
</style>