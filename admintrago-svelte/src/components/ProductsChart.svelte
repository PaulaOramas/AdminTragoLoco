<script>
  import { onMount } from 'svelte';
  import { Chart } from 'chart.js';

  let productsChart;

  onMount(async () => {
    const ctx = productsChart.getContext('2d');
    const response = await fetch('https://eltragolocorest.runasp.net/api/Categoria/CantidadProductosPorCategoria');
    const data = await response.json();

    const labels = data.map(item => item.CAT_NOMBRE);
    const cantidades = data.map(item => item.CANTIDAD_PRODUCTOS);
    const backgroundColors = generarColoresPastel(labels.length);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Cantidad de Productos',
          data: cantidades,
          backgroundColor: backgroundColors,
          borderColor: '#d4af37',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#f0db7d' } }
        },
        scales: {
          x: { ticks: { color: '#f0db7d' }, grid: { color: 'rgba(255,255,255,0.1)' } },
          y: { beginAtZero: true, ticks: { color: '#f0db7d' }, grid: { color: 'rgba(255,255,255,0.1)' } }
        }
      }
    });
  });

  function generarColoresPastel(num) {
    const colores = [];
    for (let i = 0; i < num; i++) {
      const r = Math.floor(150 + Math.random() * 100);
      const g = Math.floor(150 + Math.random() * 100);
      const b = Math.floor(150 + Math.random() * 100);
      colores.push(`rgb(${r},${g},${b})`);
    }
    return colores;
  }
</script>

<canvas bind:this={productsChart} width="400" height="400"></canvas>

<style>
  canvas {
    display: block;
    max-width: 100%;
    height: 320px !important;
    margin: 0 auto;
  }
</style>