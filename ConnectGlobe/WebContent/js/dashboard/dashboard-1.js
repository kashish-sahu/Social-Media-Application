(function($) {
    "use strict"

      if($('.date_picker').length) {
        var start = moment().subtract(29, 'days');
        var end = moment();
    
        function cb(start, end) {
            $('.date_picker span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
    
        $('.date_picker').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
    
        cb(start, end);
    }
        
        $('#world-map').vectorMap({ 
            map: 'world_en',
            backgroundColor: '#fff',
            borderColor: '#fff',
            color: '#eee',
            colors: {
                us:'rgba(115, 103, 240,1)',
                in:'rgba(115, 103, 240,1)',
                fr:'rgba(115, 103, 240,1)',
                bd:'rgba(115, 103, 240,1)',
                cn:'rgba(115, 103, 240,1)',
                pl:'rgba(115, 103, 240,1)',
            },
            enableZoom: true,
            showTooltip: true,
            selectedColor: 'rgba(115, 103, 240,1)',
            hoverColor: 'rgba(115, 103, 240,0.8)',
        });

        	  /*======== 17. HORIZONTAL BAR CHART1 ========*/
      var hbar1 = document.getElementById("chart_equity_return");
      
      if (hbar1 !== null) {
        var hbChart1 = new Chart(hbar1, {
          type: "horizontalBar",
          data: {
            labels: ["India", "USA", "France"],
            datasets: [
              {
                label: "signup",
                data: [18, 13, 9.5],
                backgroundColor: "rgba(115, 103, 240,1)"
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    drawBorder: false,
                    display: true,
                    color: "#eee",
                    zeroLineColor: "#eee",
                    tickMarkLength: 3
                  },
                  ticks: {
                    display: true, // false will hide main x-axis line
                    beginAtZero: true,
                    fontFamily: "Roboto, sans-serif",
                    fontColor: "#8a909d",
                    callback: function (value) {
                      return value + " %";
                    }
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    drawBorder: false, // hide main y-axis line
                    display: false
                  },
                  ticks: {
                    display: true,
                    beginAtZero: false,
                    fontFamily: "Roboto, sans-serif",
                    fontColor: "#8a909d",
                    fontSize: 14
                  },
                  barPercentage: 1.6,
                  categoryPercentage: 0.2
                }
              ]
            },
            tooltips: {
              mode: "index",
              titleFontColor: "#888",
              bodyFontColor: "#555",
              titleFontSize: 12,
              bodyFontSize: 15,
              backgroundColor: "rgba(256,256,256,0.95)",
              displayColors: true,
              xPadding: 10,
              yPadding: 7,
              borderColor: "rgba(220, 220, 220, 0.9)",
              borderWidth: 2,
              caretSize: 6,
              caretPadding: 5
            }
          }
        });
      }
      /*======== 18. HORIZONTAL BAR CHART2 ========*/
      var hbar2 = document.getElementById("chart_equity_return2");
      if (hbar2 !== null) {
        var hbChart2 = new Chart(hbar2, {
          type: "horizontalBar",
          data: {
            labels: ["Bangladesh", "Poland", "China"],
            datasets: [
              {
                label: "signup",
                data: [7.5, 4.6, 4],
                backgroundColor: "rgba(115, 103, 240,1)"
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    drawBorder: false,
                    display: true,
                    color: "#eee",
                    zeroLineColor: "#eee",
                    tickMarkLength: 3
                  },
                  ticks: {
                    display: true, // false will hide main x-axis line
                    beginAtZero: true,
                    fontFamily: "Roboto, sans-serif",
                    fontColor: "#8a909d",
                    max: 20,
                    callback: function (value) {
                      return value + "%";
                    }
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    drawBorder: false, // hide main y-axis line
                    display: false
                  },
                  ticks: {
                    display: true,
                    beginAtZero: false,
                    fontFamily: "Roboto, sans-serif",
                    fontColor: "#8a909d",
                    fontSize: 14
                  },
                  barPercentage: 1.6,
                  categoryPercentage: 0.2
                }
              ]
            },
            tooltips: {
              mode: "index",
              titleFontColor: "#888",
              bodyFontColor: "#555",
              titleFontSize: 12,
              bodyFontSize: 15,
              backgroundColor: "rgba(256,256,256,0.95)",
              displayColors: true,
              xPadding: 10,
              yPadding: 7,
              borderColor: "rgba(220, 220, 220, 0.9)",
              borderWidth: 2,
              caretSize: 6,
              caretPadding: 5
            }
          }
        });
      }
    
        
    

    
        //basic bar chart
    
        const active_now = document.getElementById("active_now").getContext('2d');
        
        active_now.height = 100;
    
        new Chart(active_now, {
            type: 'bar',
            data: {
                defaultFontFamily: 'Poppins',
                labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
                datasets: [
                    {
                        label: "Active Now",
                        data: [65, 59, 80, 81, 56, 55, 40],
                        borderColor: 'rgba(115, 103, 240,1)',
                        borderWidth: "0",
                        backgroundColor: 'rgba(115, 103, 240,1)'
                    }
                ]
            },
            options: {
                legend: false, 
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            fontColor: "#8a909d",
                            fontFamily: "Nunito, sans-serif",
                            display: true,
                            color: "#f9f9f9",
                            zeroLineColor: "#f9f9f9"
                        },
                    }],
                    xAxes: [{
                        display: true,
                        barPercentage: 0.5,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                    }]
                }
            }
        });
    
        
        //stalked bar chart
        const user_acq = document.getElementById("user_acq").getContext('2d');
        
        user_acq.height = 100;
    
        let barChartData = {
            defaultFontFamily: 'Nunito, sans-serif',
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Direct',
                backgroundColor: 'rgba(115, 103, 240,1)',
                hoverBackgroundColor: 'rgba(115, 103, 240,1)', 
                data: [
                    '10',
                    '20',
                    '30',
                    '40',
                    '50',
                    '60',
                    '70'
                ]
            }, {
                label: 'Referral',
                backgroundColor: 'rgba(40, 199, 111, 1)',
                hoverBackgroundColor: 'rgba(40, 199, 111, 1)', 
                data: [
                  '10',
                  '20',
                  '30',
                  '40',
                  '50',
                  '60',
                  '70'
              ]
            }, {
                label: 'Social',
                backgroundColor: 'rgba(56, 164, 248, 1)',
                hoverBackgroundColor: 'rgba(56, 164, 248, 1)',
                data: [
                  '10',
                  '20',
                  '30',
                  '40',
                  '50',
                  '60',
                  '70'
              ]
            }]
    
        };

        new Chart(user_acq, {
            type: 'bar',
            data: barChartData,
            options: {
                legend: {
                    display: false
                }, 
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                        gridLines: {
                            display: false,
                            drawBorder: true
                        },
                    },
                ],
                    yAxes: [{
                        stacked: true,
                        gridLines: {
                            fontColor: "#8a909d",
                            fontFamily: "Nunito, sans-serif",
                            display: true,
                            color: "#f9f9f9",
                            zeroLineColor: "#f9f9f9"
                        },
                    }]
                }
            }
        });

    
    
        /*======== 16. ANALYTICS - ACTIVITY CHART ========*/
        var activity = document.getElementById("activity");
        if (activity !== null) {
        var activityData = [
            {
            first: [0, 65, 52, 115, 98, 165, 125],
            second: [40, 105, 92, 155, 138, 205, 165]
            },
            {
            first: [0, 65, 77, 33, 49, 100, 100],
            second: [20, 85, 97, 53, 69, 120, 120]
            },
            {
            first: [0, 40, 77, 55, 33, 116, 50],
            second: [30, 70, 107, 85, 73, 146,80,]
            },
            {
            first: [0, 44, 22, 77, 33, 151, 99],
            second: [60, 32, 120, 55, 19, 134, 88]
            }
        ];

        activity.height = 100;

        var config = {
            type: "line",
            data: {
            labels: [
                "4 Jan",
                "5 Jan",
                "6 Jan",
                "7 Jan",
                "8 Jan",
                "9 Jan",
                "10 Jan"
            ],
            datasets: [
                {
                    label: "Active",
                    backgroundColor: "rgba(115, 103, 240, 0.9)",
                    borderColor: "transparent",
                    data: activityData[0].first,
                    lineTension: 0,
                    pointRadius: 0,
                    borderWidth: 2,
                },
                {
                    label: "Inactive",
                    backgroundColor: 'rgba(40, 199, 111, 0.7)',
                    borderColor: "transparent",
                    data: activityData[0].second,
                    lineTension: 0,
                    // borderDash: [10, 5],
                    borderWidth: 1,
                    pointRadius: 0,
                }
            ]
            },
            options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: true
                    },
                    ticks: {
                    fontColor: "#8a909d", 
                    },
                }
                ],
                yAxes: [
                {
                    gridLines: {
                    fontColor: "#8a909d",
                    fontFamily: "Nunito, sans-serif",
                    display: true,
                    color: "#f9f9f9",
                    zeroLineColor: "#f9f9f9"
                    },
                    ticks: {
                    stepSize: 50,
                    fontColor: "#8a909d",
                    fontFamily: "Nunito, sans-serif"
                    }
                }
                ]
            },
            tooltips: {
                mode: "index",
                intersect: false,
                titleFontColor: "#888",
                bodyFontColor: "#555",
                titleFontSize: 12,
                bodyFontSize: 15,
                backgroundColor: "rgba(256,256,256,0.95)",
                displayColors: true,
                xPadding: 10,
                yPadding: 7,
                borderColor: "rgba(220, 220, 220, 0.9)",
                borderWidth: 2,
                caretSize: 6,
                caretPadding: 5
            }
            }
        };

        var ctx = document.getElementById("activity").getContext("2d");
        var myLine = new Chart(ctx, config);

        var items = document.querySelectorAll("#user-activity .nav-tabs .nav-item");
        items.forEach(function (item, index) {
            item.addEventListener("click", function () {
            config.data.datasets[0].data = activityData[index].first;
            config.data.datasets[1].data = activityData[index].second;
            myLine.update();
            });
        });
        }


    



    //doughut chart
    const session_device = document.getElementById("session_device").getContext('2d');
    // session_device.height = 100;
    new Chart(session_device, {
        type: 'doughnut',
        data: {
            defaultFontFamily: 'Poppins',
            datasets: [{
                data: [45, 25, 20],
                borderWidth: 0, 
                backgroundColor: [
                    'rgba(115, 103, 240, .9)',
                    'rgba(40, 199, 111, 0.7)',
                    'rgba(56, 164, 248, 0.7)',
                ],
                hoverBackgroundColor: [
                  'rgba(115, 103, 240, 1)',
                  'rgba(40, 199, 111, 1)',
                  'rgba(56, 164, 248, 1)',
                ]

            }],
            labels: [
                "Desktop",
                "Mobile",
                "Tablet"
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutoutPercentage: 80,
            legend: {
              display: false,
          },
        }
    });

    //dual line chart


    //Sales chart
    var ctx = document.getElementById("trending_over_time");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01", "02", "03", "04", "05", "06", "07"],
            type: 'line',
            defaultFontFamily: "Nunito, sans-serif",
            datasets: [{
                label: "Monthly",
                data: [30, 10, 20, 30, 10, 15, 50],
                backgroundColor: 'rgba(115, 103, 240,0.7)',
                borderColor: 'transparent',
                borderWidth: 2,
                pointRadius: 0,
                lineTension: 0,

                    }, {
                label: "Weekly",
                data: [50, 40, 50, 60, 40, 45, 80],
                backgroundColor: 'rgba(56, 164, 248, 0.7)',
                borderColor: 'transparent',
                borderWidth: 2,
                pointRadius: 0,
                lineTension: 0,
                    }, {
                label: "Daily",
                data: [70, 70, 80, 90, 70, 75, 110],
                backgroundColor: 'rgba(40, 199, 111, 0.7)',
                borderColor: 'transparent',
                borderWidth: 2,
                pointRadius: 0,
                lineTension: 0,
                    }]
        },
        options: {
            responsive: true,

            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: "Nunito, sans-serif",
                bodyFontFamily: "Nunito, sans-serif",
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                        }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                        }]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    });
    

    
        

})(jQuery);