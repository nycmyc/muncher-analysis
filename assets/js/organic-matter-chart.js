document.addEventListener('DOMContentLoaded', function() {
  // Get the canvas element
  const ctx = document.getElementById('organic-matter-chart').getContext('2d');
  
  // Define the chart data
  const data = {
    labels: ['Tote #1 (10/1)', 'Tote #2 (10/1)', 'Tote #3 (10/2)', 'Tote #1 (10/3)', 'Tote #1 (11/21)', 'Tote #2 (11/21)'],
    datasets: [
      {
        label: 'EC Reading',
        data: [3.8, 5.4, 4.6, 3.4, 4.2, 4.8],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        yAxisID: 'y',
        tension: 0.1
      },
      {
        label: 'PPM (Dissolved Solids)',
        data: [1900, 2700, 2300, 1700, 2100, 2400],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        yAxisID: 'y1',
        tension: 0.1
      },
      {
        label: 'Est. Organic Matter %',
        data: [2.8, 4.2, 3.5, 2.5, 3.2, 3.7],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
        tension: 0.1
      }
    ]
  };
  
  // Create the chart
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'EC Readings and Estimated Organic Matter',
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
          title: {
            display: true,
            text: 'Collection Period'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'EC Reading / Organic Matter %'
          },
          min: 0,
          max: 6
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'PPM (Dissolved Solids)'
          },
          min: 0,
          max: 3000,
          grid: {
            drawOnChartArea: false
          }
        }
      }
    }
  });
  
  // Create second chart for organic matter concentration
  const concentrationData = {
    labels: ['Raw Feedstock', 'Homogenizer Mix', 'Digester Content', 'Final MJ Product'],
    datasets: [
      {
        label: 'Water Content %',
        data: [60, 90, 94, 96.5],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.1
      },
      {
        label: 'Organic Matter %',
        data: [40, 10, 6, 3.5],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1
      }
    ]
  };
  
  // Add this chart after the main one by creating a new element
  const chartContainer = document.querySelector('#organic-matter-chart').parentNode;
  const newCanvas = document.createElement('canvas');
  newCanvas.id = 'organic-matter-concentration-chart';
  newCanvas.style.marginTop = '20px';
  newCanvas.height = 150; // Make it smaller
  chartContainer.appendChild(newCanvas);
  
  // Create the second chart
  new Chart(newCanvas, {
    type: 'line',
    data: concentrationData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Organic Matter Concentration Through Process',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Percentage (%)'
          }
        }
      }
    }
  });
});
