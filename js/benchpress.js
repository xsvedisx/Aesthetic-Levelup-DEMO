const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Benchpress",
        data: [50, 60, 70, 80, 80, 90],
        borderColor: "orange",
        backgroundColor: "rgba(255, 165, 0, 0.5)", // Semi-transparent fill
        fill: true, // Enables filling under the line
        tension: 0.4, // Smooth curves
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById("myChart2").getContext("2d");

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Squats",
        data: [70, 80, 85, 90, 90, 105],
        borderColor: "orange",
        backgroundColor: "rgba(255, 165, 0, 0.5)", // Semi-transparent fill
        fill: true, // Enables filling under the line
        tension: 0.4, // Smooth curves
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx3 = document.getElementById("myChart3").getContext("2d");

new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Deadlift",
        data: [110, 115, 125, 140, 154, 162],
        borderColor: "orange",
        backgroundColor: "rgba(255, 165, 0, 0.5)", // Semi-transparent fill
        fill: true, // Enables filling under the line
        tension: 0.4, // Smooth curves
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
