    var mortgageChartData = {
        
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        
        datasets: [{
        
            label: 'Own-Sourced Upfront',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
            },
                   
            {           
            label: 'Own-Sourced Trail',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
            },
                   
            {           
            label: 'Referred Upfront',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
            },
                   
            {           
            label: 'Referred Trail',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
            }

        ]
        };
        
        var referralChartData = {
        
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        
        datasets: [{
        
            label: 'Financial Planning',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
            },
                   
            {           
            label: 'Settlements/Legal',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
            },
                   
            {           
            label: 'Insurance',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
            },
                   
            {           
            label: 'Home & Contents',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
            },
                   
           {
           label: 'Builder',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(250, 191, 143, 0.2)',
                'rgba(250, 191, 143, 0.2)',
                'rgba(250, 191, 143, 0.2)',
                'rgba(250, 191, 143, 0.2)',
                'rgba(250, 191, 143, 0.2)'
            ],
           borderColor: [
                'rgba(250, 191, 143, 1)',
                'rgba(250, 191, 143, 1)',
                'rgba(250, 191, 143, 1)',
                'rgba(250, 191, 143, 1)',
                'rgba(250, 191, 143, 1)'
            ],
           borderWidth: 1
            }       
                   
        ]
        };
        
        var totalChartData = {
        
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
        
        datasets: [{
        
            label: 'Mortgages',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
            },
                   
            {           
            label: 'Referrals',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
            }

        ]
        };
       
        var ctx = document.getElementById("mortgageChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: mortgageChartData,
            options: {
                scales: {
                    yAxes: [{

                        ticks: {
                            beginAtZero:true,
                            callback: function(label, index, labels) {
                                var newlabel = parseFloat(label).toFixed(2);
                                if (newlabel >= 1000 && newlabel < 1000000) {
                                    return '$'+newlabel/1000+'k';
                                } else if (newlabel >= 1000000) {
                                    return '$'+newlabel/1000000+'M';
                                } else {
                                    return '$'+newlabel;
                                }
                                
                            }
                        },
                        
                        scalelabel: {
                            display: true,
                            labelstring: '1k = 1000, 1M = 1000000'
                        },
                        
                        stacked: true
                    }],

                    xAxes: [{

                    stacked: true

                    }]

                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            if(tooltipItem.yLabel >= 1000 && tooltipItem.yLabel < 1000000) {
                                return '$'+parseFloat(tooltipItem.yLabel/1000).toFixed(2)+'k';
                            } else if (tooltipItem.yLabel >= 1000000) {
                                return '$'+parseFloat(tooltipItem.yLabel/1000000).toFixed(2)+'M';
                            } else {
                                return '$'+parseFloat(tooltipItem.yLabel).toFixed(2);
                            }
                            
                        }
                        
                    }
                    
                }

            }
        });
        
        var ctx2 = document.getElementById("referralChart");
        var myChart2 = new Chart(ctx2, {
            type: 'bar',
            data: referralChartData,
            options: {
                scales: {
                    yAxes: [{

                        ticks: {
                            beginAtZero:true,
                            callback: function(label, index, labels) {
                                var newlabel = parseFloat(label).toFixed(2);
                                if (newlabel >= 1000 && newlabel < 1000000) {
                                    return '$'+newlabel/1000+'k';
                                } else if (newlabel >= 1000000) {
                                    return '$'+newlabel/1000000+'M';
                                } else {
                                    return '$'+newlabel;
                                }
                                
                            }
                        },
                        
                        scalelabel: {
                            display: true,
                            labelstring: '1k = 1000, 1M = 1000000'
                        },
                        
                        stacked: true
                    }],

                    xAxes: [{

                    stacked: true

                    }]

                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            if(tooltipItem.yLabel >= 1000 && tooltipItem.yLabel < 1000000) {
                                return '$'+parseFloat(tooltipItem.yLabel/1000).toFixed(2)+'k';
                            } else if (tooltipItem.yLabel >= 1000000) {
                                return '$'+parseFloat(tooltipItem.yLabel/1000000).toFixed(2)+'M';
                            } else {
                                return '$'+parseFloat(tooltipItem.yLabel).toFixed(2);
                            }
                            
                        }
                        
                    }
                    
                }

            }
        });
        
        var ctx3 = document.getElementById("totalChart");
        var myChart3 = new Chart(ctx3, {
            type: 'bar',
            data: totalChartData,
            options: {
                scales: {
                    yAxes: [{

                        ticks: {
                            beginAtZero:true,
                            callback: function(label, index, labels) {
                                var newlabel = parseFloat(label).toFixed(2);
                                if (newlabel >= 1000 && newlabel < 1000000) {
                                    return '$'+newlabel/1000+'k';
                                } else if (newlabel >= 1000000) {
                                    return '$'+newlabel/1000000+'M';
                                } else {
                                    return '$'+newlabel;
                                }
                                
                            }
                        },
                        
                        scalelabel: {
                            display: true,
                            labelstring: '1k = 1000, 1M = 1000000'
                        },
                        
                        stacked: true
                    }],

                    xAxes: [{

                    stacked: true

                    }]

                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            if(tooltipItem.yLabel >= 1000 && tooltipItem.yLabel < 1000000) {
                                return '$'+parseFloat(tooltipItem.yLabel/1000).toFixed(2)+'k';
                            } else if (tooltipItem.yLabel >= 1000000) {
                                return '$'+parseFloat(tooltipItem.yLabel/1000000).toFixed(2)+'M';
                            } else {
                                return '$'+parseFloat(tooltipItem.yLabel).toFixed(2);
                            }
                            
                        }
                        
                    }
                    
                }

            }
        });
