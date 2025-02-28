document.addEventListener('DOMContentLoaded', function() {
  // Get the canvas element
  const ctx = document.getElementById('feedstock-chart').getContext('2d');
  
  // Define data for early trial composition
  const earlyTrialData = {
    labels: ['Peaches', 'Avocado', 'Watermelon', 'Lemon', 'Horse Manure'],
    datasets: [{
      data: [30, 15, 15, 20, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(153, 102, 255, 0.7)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)'
      ],
      borderWidth: 1
    }]
  };
  
  // Create early trial pie chart
  const earlyTrialChart = new Chart(ctx, {
    type: 'pie',
    data: earlyTrialData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Early Trial Feedstock Composition',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          position: 'right',
          labels: {
            boxWidth: 12
          }
        }
      }
    }
  });
  
  // Add later trial pie chart
  const chartContainer = document.querySelector('#feedstock-chart').parentNode;
  const newCanvas = document.createElement('canvas');
  newCanvas.id = 'later-trial-chart';
  newCanvas.style.marginTop = '20px';
  chartContainer.appendChild(newCanvas);
  
  // Later trial composition data
  const laterTrialData = {
    labels: ['GOM', 'Horse Manure', 'Lemon', 'Compost'],
    datasets: [{
      data: [40, 45, 10, 5],
      backgroundColor: [
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 159, 64, 0.7)'
      ],
      borderColor: [
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(54, 162, 235)',
        'rgb(255, 159, 64)'
      ],
      borderWidth: 1
    }]
  };
  
  // Create later trial pie chart
  const laterTrialChart = new Chart(newCanvas, {
    type: 'pie',
    data: laterTrialData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Later Trial Feedstock Composition',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          position: 'right',
          labels: {
            boxWidth: 12
          }
        }
      }
    }
  });
});
