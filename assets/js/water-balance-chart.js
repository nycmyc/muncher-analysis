document.addEventListener('DOMContentLoaded', function() {
  // Get the canvas element
  const ctx = document.getElementById('water-balance-chart').getContext('2d');
  
  // Define the chart data
  const data = {
    labels: ['Nov 19-21 Trial', 'Dec 2-3 Trial'],
    datasets: [
      {
        label: 'Total Input Volume (gal)',
        data: [1900, 1550],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1
      },
      {
        label: 'Fresh Water Added (gal)',
        data: [150, 150],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1
      },
      {
        label: 'Moisture from Feedstock (gal)',
        data: [25, 22],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1
      },
      {
        label: 'Product Output (gal)',
        data: [250, 250],
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 1
      },
      {
        label: 'Evaporation Loss (gal)',
        data: [1450, 1180],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      },
      {
        label: 'System Retention (gal)',
        data: [175, 142],
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1
      }
    ]
  };
  
  // Create the chart
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Water Balance by Trial Period (Gallons)',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false
        },
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Volume (gallons)'
          }
        }
      }
    }
  });
});
