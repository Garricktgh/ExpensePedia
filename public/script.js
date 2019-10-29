let canvas = document.getElementById('myChart');
let ctx = canvas.getContext('2d');

let fillLabels = [];
let fillData = [];

for (let i = 0; i < cData.length; i++) {
  fillLabels.push(cData[i]["category"]);
  fillData.push(cData[i]["percent"]);
};

let myChart = new Chart(ctx, {
  type: 'doughnut',
    data: {
      labels: fillLabels,
        datasets: [{
          label: 'Expense Summary',
          data: fillData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 240, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(65, 68, 246, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 240, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(65, 68, 246, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
      }]
    }
});