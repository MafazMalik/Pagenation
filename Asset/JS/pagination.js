(function () {
    let links = document.querySelectorAll('.but');
    let imageContainer = document.querySelector('.data-tab-container');
    let imagesCollection = document.querySelectorAll('.data');

    function displayImage(imgs, tab) {
        imgs.forEach((image) => {
            if (image.dataset.tab == tab) {
                image.classList.remove('hide');
            } else {
                image.classList.add('hide');
            }
        });
    }


    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            switch (link.textContent) {
                case "A":

                    displayImage(imagesCollection, 'A');
                    break;
                case "B":

                    displayImage(imagesCollection, 'B');

                    break;
                case "C":

                    displayImage(imagesCollection, 'C');
                    break;
                case "D":

                    displayImage(imagesCollection, 'D');
                    break;

                case "":

                    imagesCollection.forEach((image) => {
                        image.classList.remove('hide');
                    });

                    break;
            }

        });
    });

})();



var doughnutChart = document.getElementById('batch').getContext('2d');

var myDoughnutChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [260, 125, 54, 146, 160],
            backgroundColor: ['#f3545d', '#fdaf4b', '#1d7af3',window.theme.success,window.theme.secondary]
        }],

        labels: ["Computer Science", "Information Technology", "BCA", "BBA", "B.Com"]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom'
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        }
    }
});

var doughnutChart = document.getElementById('placed').getContext('2d');

var myDoughnutChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [98, 105, 154, 196],
            backgroundColor: ['#f3545d', '#fdaf4b', '#1d7af3',window.theme.success]
        }],

        labels: ["Industry's Placed", "Industry Internship", "Placed Function", "Internship Function"]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom'
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        }
    }
});

new Chart(document.getElementById("rate"), {
    type: "line",
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: "Placement",
            fill: true,
            backgroundColor: "transparent",
            borderColor: window.theme.success,
            data: [76, 83, 84.5, 89.2, 92]
        }, {
            label: "Internship",
            fill: true,
            backgroundColor: "transparent",
            borderColor: window.theme.danger,
            borderDash: [4, 4],
            data: [54.7, 65.4, 69, 72.3, 75]
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "black",
            }
        },
        scales: {
            xAxes: [{
                reverse: true,
                gridLines: {
                    color: "rgba(0,0,0,0.05)"
                }
            }],
            yAxes: [{
                borderDash: [5, 5],
                gridLines: {
                    color: "rgba(0,0,0,0)",
                    fontColor: "#fff"
                }
            }]
        }
    }
});


// Placement Graph

new Chart(document.getElementById("placement"), {
    type: "line",
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: "Campus Placement",
            fill: true,
            backgroundColor: "transparent",
            borderColor: window.theme.success,
            data: [90, 94, 96, 97, 99]
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "black",
            }
        },
        scales: {
            xAxes: [{
                reverse: true,
                gridLines: {
                    color: "rgba(0,0,0,0.05)"
                }
            }],
            yAxes: [{
                borderDash: [5, 5],
                gridLines: {
                    color: "rgba(0,0,0,0)",
                    fontColor: "#fff"
                }
            }]
        }
    }
});

// CTC Graph

new Chart(document.getElementById("CTC"), {
    type: "line",
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: "Highest",
            fill: true,
            backgroundColor: "transparent",
            borderColor: window.theme.success,
            data: [10.5, 11.5, 11.5, 11.0, 12]
        }, {
            label: "Average",
            fill: true,
            backgroundColor: "transparent",
            borderColor: window.theme.danger,
            borderDash: [4, 4],
            data: [6.05, 6.29, 6.67, 6.7, 8.07]
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "black",
            }
        },
        scales: {
            xAxes: [{
                reverse: true,
                gridLines: {
                    color: "rgba(0,0,0,0.05)"
                }
            }],
            yAxes: [{
                borderDash: [5, 5],
                gridLines: {
                    color: "rgba(0,0,0,0)",
                    fontColor: "#fff"
                }
            }]
        }
    }
});

// Internship Graph

new Chart(document.getElementById("stipend"), {
    type: "line",
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: "Highest",
            fill: true,
            backgroundColor: "transparent",
            borderColor: window.theme.success,
            data: [12.5, 15.5, 16.3, 18.0, 21]
        }, {
            label: "Average",
            fill: true,
            backgroundColor: "transparent",
            borderColor: window.theme.danger,
            borderDash: [4, 4],
            data: [10, 12.5, 14.2, 16.3, 19]
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "black",
            }
        },
        scales: {
            xAxes: [{
                reverse: true,
                gridLines: {
                    color: "rgba(0,0,0,0.05)"
                }
            }],
            yAxes: [{
                borderDash: [5, 5],
                gridLines: {
                    color: "rgba(0,0,0,0)",
                    fontColor: "#fff"
                }
            }]
        }
    }
});