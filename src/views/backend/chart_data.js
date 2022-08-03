const lineChartData = {
    type: "line",
        data: {
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        datasets: [
            {
            label: "Number of Moons",
            data: [12, 14, 13, 22, 79, 82, 27, 14],
            backgroundColor: "rgba(54,73,93,.5)",
            borderColor: "#36495d",
            borderWidth: 3
            },
        ]
        },
        options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                padding: 25
                }
            }
            ]
        }
    }
}

const barChartData = {
    type: "bar",
        data: {
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        datasets: [
            {
            label: "Planetary Mass",
            data: [105.166, 56.081, 43.003, 68.323, 954.792, 285.886, 43.662, 51.514],
            backgroundColor: "rgba(71, 183,132,.5)",
            borderColor: "#47b784",
            borderWidth: 3
            }
        ]
        },
        options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                padding: 25
                }
            }
            ]
        }
    }
}

export default {lineChartData, barChartData}