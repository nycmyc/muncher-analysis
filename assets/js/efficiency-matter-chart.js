document.addEventListener('DOMContentLoaded', function() {
  // Get the canvas element
  const ctx = document.getElementById('efficiency-matter-chart').getContext('2d');
  
  // Define the chart data
  const data = {
    datasets: [{
      label: 'Trial Results',
      data: [
        { x: 1.17, y: 2.2, r: 10, trial: 'Sep-Oct', ec: 3.6 },
        { x: 0.86, y: 3.1, r: 12, trial: 'Oct', ec: 4.6 },
        { x: 0.61, y: 3.7, r: 14, trial: 'Nov', ec: 4.8 },
        { x: 0.48, y: 4.2, r: 16, trial: 'Dec', ec: 5.2 }
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ],
      borderWidth: 1
    }]
  };
  
  // Create the chart
  const bubbleChart = new Chart(ctx, {
    type: 'bubble',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Water Efficiency vs. Organic Matter Content',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const point = context.raw;
              return [
                `Trial Period: ${point.trial}`,
                `Water Use Ratio: ${point.x} gal/gal`,
                `Organic Matter: ${point.y}%`,
                `EC Reading: ${point.ec}`
              ];
            }
          }
        },
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Water Use Ratio (gal/gal)'
          },
          min: 0.4,
          max: 1.2,
          reverse: true  // Lower is better, so reverse the axis
        },
        y: {
          title: {
            display: true,
            text: 'Organic Matter (%)'
          },
          min: 2,
          max: 4.5
        }
      }
    }
  });
  
  // Add recommendations table
  const chartContainer = document.querySelector('#efficiency-matter-chart').parentNode;
  const tableContainer = document.createElement('div');
  tableContainer.style.marginTop = '20px';
  tableContainer.style.fontSize = '14px';
  tableContainer.style.height = '200px';
  tableContainer.style.overflowY = 'auto';
  
  // Create table HTML
  tableContainer.innerHTML = `
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Parameter</th>
          <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Optimal Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Water Addition Frequency</td>
          <td style="padding: 8px; border: 1px solid #ddd;">Every 3-4 sends to digester</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
          <td style="padding: 8px; border: 1px solid #ddd;">Water Addition Volume</td>
          <td style="padding: 8px; border: 1px solid #ddd;">25 gallons (smaller, more frequent)</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Send Interval</td>
          <td style="padding: 8px; border: 1px solid #ddd;">15 minutes between sends</td>
        </tr>
        <tr style="background-color: #f2f2f2;">
          <td style="padding: 8px; border: 1px solid #ddd;">Optimal Feedstock Blend</td>
          <td style="padding: 8px; border: 1px solid #ddd;">40-45% GOM, 40-45% Manure, 10-15% High-moisture, 5% Inoculant</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">Temperature Range</td>
          <td style="padding: 8px; border: 1px solid #ddd;">30-32°C</td>
        </tr>
      </tbody>
    </table>
  `;
  
  chartContainer.appendChild(tableContainer);
});
