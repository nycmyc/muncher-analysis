document.addEventListener('DOMContentLoaded', function() {
  try {
    // Get the canvas element
    const ctx = document.getElementById('performance-chart').getContext('2d');
    
    // Define the temperature and pH data
    const temperaturePHData = {
      labels: [
        '9/29', '10/1', '10/2', '10/3', '10/9', '10/10', '10/14', 
        '10/15', '10/16', '10/17', '11/19', '11/21', '11/22', '12/2', '12/4'
      ],
      datasets: [
        {
          label: 'Digester Temp (°C)',
          data: [29, 30, 30, 22, 27, 31, 31, 30, 31, 32, 31, 36, 30, 38, 32],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          yAxisID: 'yTemperature',
          tension: 0.1
        },
        {
          label: 'Digester pH',
          data: [6.3, 6.2, 6.2, 5.8, 6.1, 6.3, 6.3, 6.3, 6.2, 6.2, 6.5, 6.5, 6.5, 6.5, 6.5],
          borderColor: 'rgb(255, 205, 86)',
          backgroundColor: 'rgba(255, 205, 86, 0.5)',
          yAxisID: 'yPH',
          tension: 0.1
        }
      ]
    };
    
    // Create the chart
    const tempPHChart = new Chart(ctx, {
      type: 'line',
      data: temperaturePHData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Temperature and pH Over Trial Period',
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
              text: 'Date'
            }
          },
          yTemperature: {
            type: 'linear',
            display: true,
            position: 'left',
            title: {
              display: true,
              text: 'Temperature (°C)'
            },
            min: 20,
            max: 40
          },
          yPH: {
            type: 'linear',
            display: true,
            position: 'right',
            title: {
              display: true,
              text: 'pH'
            },
            min: 5.5,
            max: 7.0,
            grid: {
              drawOnChartArea: false
            }
          }
        }
      }
    });
    
    // Create a proper container for the efficiency chart
    const chartContainer = document.querySelector('#performance-chart').parentNode;
    const efficiencyDiv = document.createElement('div');
    efficiencyDiv.className = 'chart-container';
    efficiencyDiv.id = 'efficiency-chart-container';
    efficiencyDiv.style.marginTop = '60px';
    efficiencyDiv.style.position = 'relative';
    
    const efficiencyCanvas = document.createElement('canvas');
    efficiencyCanvas.id = 'efficiency-chart';
    efficiencyDiv.appendChild(efficiencyCanvas);
    chartContainer.appendChild(efficiencyDiv);
    
    // Add a title for the efficiency chart
    const title = document.createElement('h3');
    title.textContent = 'System Efficiency Improvement Over Time';
    title.style.textAlign = 'center';
    title.style.marginBottom = '15px';
    title.style.color = '#2c3e50';
    efficiencyDiv.insertBefore(title, efficiencyCanvas);
    
    // Efficiency data
    const efficiencyData = {
      labels: ['Sep 28-Oct 3', 'Oct 8-17', 'Nov 19-22', 'Dec 2-4'],
      datasets: [
        {
          label: 'Water Use (gal/ton)',
          data: [1400, 1200, 950, 850],
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          tension: 0.1
        },
        {
          label: 'Output (gal/ton)',
          data: [1200, 1400, 1560, 1780],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          tension: 0.1
        },
        {
          label: 'Water:Output Ratio',
          data: [1.17, 0.86, 0.61, 0.48],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          tension: 0.1
        }
      ]
    };
    
    // Create efficiency chart with proper positioning
    const efficiencyCtx = document.getElementById('efficiency-chart').getContext('2d');
    const efficiencyChart = new Chart(efficiencyCtx, {
      type: 'line',
      data: efficiencyData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: false  // Title is now an HTML element
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
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating performance charts:', error);
  }
});
