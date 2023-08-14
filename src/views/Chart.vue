<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

let dataset = [100, 200, 300];

let chart = null;
const config = {
    type: "pie",
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                label: "# of Votes",
                data: dataset,
                backgroundColor: ["rgba(255, 99, 132)", "rgba(54, 162, 235)", "rgba(255, 206, 86)"],
            },
        ],
    },
};

onMounted(() => {
    let ctx = document.getElementById("pieChart").getContext("2d");
    chart = new Chart(ctx, config);
});

onBeforeUnmount(() => {
    chart.destroy();
});
</script>

<template>
    <div style="height: 480px; widows: 640px">
        <canvas id="pieChart"></canvas>
    </div>
</template>
