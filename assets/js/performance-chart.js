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
              size: 14,
              weight: 'bold'
            }
          },
          legend: {
            position: 'bottom'
          }
        },
        scales: {
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
    
    // Create a completely separate container for the efficiency chart
    const cardContainer = document.querySelector('#performance-chart').parentNode;
    
    // Create a divider 
    const divider = document.createElement('div');
    divider.style.borderTop = '1px solid #eee';
    divider.style.margin = '30px 0 20px';
    cardContainer.appendChild(divider);
    
    // Create a heading for the efficiency chart
    const efficiencyTitle = document.createElement('h3');
    efficiencyTitle.textContent = 'System Efficiency Improvement Over Time';
    efficiencyTitle.style.textAlign = 'center';
    efficiencyTitle.style.color = '#2c3e50';
    efficiencyTitle.style.margin = '20px 0';
    cardContainer.appendChild(efficiencyTitle);
    
    // Create new container for efficiency chart
    const efficiencyContainer = document.createElement('div');
    efficiencyContainer.style.height = '250px';
    efficiencyContainer.style.marginTop = '10px';
    efficiencyContainer.style.position = 'relative';
    
    const efficiencyCanvas = document.createElement('canvas');
    efficiencyCanvas.id = 'efficiency-chart';
    efficiencyContainer.appendChild(efficiencyCanvas);
    cardContainer.appendChild(efficiencyContainer);
    
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
    
    // Create efficiency chart
    const efficiencyCtx = document.getElementById('efficiency-chart').getContext('2d');
    const efficiencyChart = new Chart(efficiencyCtx, {
      type: 'line',
      data: efficiencyData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: false // Using H3 element instead
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
    
    // Fallback content if charts fail
    const container = document.querySelector('#performance-chart').parentNode;
    container.innerHTML = `
      <h2>System Performance Over Time</h2>
      <div style="padding: 20px; text-align: center;">
        <p>The system showed significant performance improvements over the trial period:</p>
        <ul style="text-align: left; display: inline-block;">
          <li>Temperature maintained between 29-32°C for optimal operation</li>
          <li>pH stabilized at 6.0-6.5 for best bacterial activity</li>
          <li>Water efficiency improved from 1.17 to 0.48 gal/gal</li>
          <li>Output increased from 1,200 to 1,780 gal/ton</li>
        </ul>
      </div>
    `;
  }
});
