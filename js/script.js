
/*-------------------------------------------------------- 1st dataset --------------------------------------------------------*/

var ctx = document.getElementById("lineChart").getContext('2d');
var distance = [1.047, 2.431, 1.274, 3.347, 2.627, 4.014, 1.611];
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["+ 00:23:54", "+ 01:23:49", "+ 02:23:57", "+ 03:23:50", "+ 04:23:59", "+ 05:23:52", "+ 06:23:46"],
        datasets: [{
            label: 'Distance per timeframe', 
            data: distance,
            backgroundColor: 
                'rgba(14, 77, 146, 0.2)'
            ,
            borderColor: 
                'rgba(29, 41, 81, 0.5)'
            ,
            borderWidth: 2
            ,
            pointBackgroundColor: 'rgba(29, 41, 81, 1)'
        }]
    },
    options: {
        scales: {
            yAxes: [{
            	scaleLabel: {
            		display: true,
            		labelString: 'Distance in Gigametres'
            	},
                ticks: {
                    beginAtZero:true

                }
            }],
            xAxes: [{
            	scaleLabel: {
            		display: true,
            		labelString: 'Days/Hours/Minutes (Mission Elapsed Time)'
            	}
            }]
        },
        maintainAspectRatio: false,
        title: {
            display: true,
            position: 'top',
            text: 'Distance over time'
        }
    }
});

/*-------------------------------------------------------- 2nd dataset --------------------------------------------------------*/

var ctx = document.getElementById("barChart").getContext('2d');
var fuel = [26, 24, 14, 19, 15, 20, 12];
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["08/14/30", "08/15/30", "08/16/30", "08/17/30", "08/18/30", "08/19/30", "08/20/30"],
        datasets: [{
            label: 'Fuel consumption per day *1000L',
            data: fuel,
            backgroundColor: [
                'rgba(29, 41, 81, .5)',
                'rgba(14, 77, 146, .5)',
                'rgba(0, 128, 255, .5)',
                'rgba(101, 147, 245, .5)',
                'rgba(87, 160, 211, .5)',
                'rgba(79, 151, 163, .5)',
                'rgba(176, 223, 229, .5)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
            display: true,
            position: 'top',
            text: 'Fuel consumption'
        },
        maintainAspectRatio: false
    }
});

/*-------------------------------------------------------- 3rd dataset --------------------------------------------------------*/

var ctx = document.getElementById("doughnutChart").getContext('2d');
var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Water", "Meat", "Grain", "Dairy", "Fish", "Fruit", "Vegetables", "Empty"],
        datasets: [{
            label: 'Stock in %',
            data: [32, 11, 9, 8, 10, 6, 11, 13],
            backgroundColor: [
                'rgba(29, 41, 81, .5)',
                'rgba(14, 77, 146, .5)',
                'rgba(0, 128, 255, .5)',
                'rgba(101, 147, 245, .5)',
                'rgba(87, 160, 211, .5)',
                'rgba(79, 151, 163, .5)',
                'rgba(176, 223, 229, .5)',
                'rgba(255, 255, 255, 1)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
            	display: false,
            }]
        },
        guideLines: {
            display: false
        },
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            position: 'top',
            text: 'Stock values in %'
        },
        maintainAspectRatio: false
    }
});