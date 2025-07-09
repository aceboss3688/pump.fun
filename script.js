
function connectWallet() {
    alert("Connecting wallet...");
}
const ctx = document.getElementById('pumpChart').getContext('2d');
const pumpChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['T-4', 'T-3', 'T-2', 'T-1', 'Now'],
        datasets: [{
            label: 'Price',
            data: [0.002, 0.004, 0.006, 0.0055, 0.007],
            borderColor: '#fff',
            borderWidth: 2,
            fill: false,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }
});
