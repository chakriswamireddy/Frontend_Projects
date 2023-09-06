
// Get the drawing context on the canvas
var myContext = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(myContext, {
    type: 'bar',
    data: {
        labels: [20, "", 25, "", 30, "",35,"",40,"",60,"",65],
        datasets: [{
            label: 'Employer: k 73,500',
            backgroundColor: "rgb(3, 35, 163)",
            data: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91],
            stack: 'stack1',
        }, {
            label: 'Employee: k 52,500',
            backgroundColor: "rgb(71, 80, 239)",
            data: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91],
            stack: 'stack1',
        }, {
            label: 'Total Interest: K 244,313',
            backgroundColor: "rgb(158, 163, 239)",
            data: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91],
            stack: 'stack1',
        }],
    },
    options: {
        plugins: {
            legend: {
                display:true,
                label: {
                    padding:15,
                    
                },
                
            },
            title: {
                display: true,
                text: 'Stacked Bar chart for pollution status'
            },
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                    }
                }],

            yAxes:[{
                gridLines: {
                    display:true
                },
                border : {
                    dash: [4,4]
                }
            }],
            x: {
                stacked: true,
                grid: {
                    display:false
                },
            },
            y: {
                stacked: true,
                ticks: {
                    min:0,
                    max:400,
                    stepSize:100,
                    
                },
               

            }
        }
    }
});
