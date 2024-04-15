window.Apex = {
    chart: {
      foreColor: '#ccc',
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      theme: 'dark'
    },
    grid: {
      borderColor: "#535A6C",
      xaxis: {
        lines: {
          show: true
        }
      }
    }
  };
  
  var spark1 = {
    chart: {
      id: 'spark1',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    series: [{
      data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
    }],
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    },
    colors: ['#fff'],
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  }
  
  var spark2 = {
    chart: {
      id: 'spark2',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    series: [{
      data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
    }],
    stroke: {
      curve: 'smooth'
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    },
    markers: {
      size: 0
    },
    colors: ['#fff'],
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  }
  
  var spark3 = {
    chart: {
      id: 'spark3',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    series: [{
      data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
    }],
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    },
    colors: ['#fff'],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  }
  
  var spark4 = {
    chart: {
      id: 'spark4',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    series: [{
      data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
    }],
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    },
    colors: ['#fff'],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  }
  
  new ApexCharts(document.querySelector("#spark1"), spark1).render();
  new ApexCharts(document.querySelector("#spark2"), spark2).render();
  new ApexCharts(document.querySelector("#spark3"), spark3).render();
  new ApexCharts(document.querySelector("#spark4"), spark4).render();
  
  
  var optionsLine = {
    chart: {
      height: 328,
      type: 'line',
      zoom: {
        enabled: false
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    //colors: ["#3F51B5", '#2196F3'],
    series: [{
        name: "Music",
        data: [1, 15, 26, 20, 33, 27]
      },
      {
        name: "Photos",
        data: [3, 33, 21, 42, 19, 32]
      },
      {
        name: "Files",
        data: [0, 39, 52, 11, 29, 43]
      }
    ],
    title: {
      text: 'Media',
      align: 'left',
      offsetY: 25,
      offsetX: 20
    },
    subtitle: {
      text: 'Statistics',
      offsetY: 55,
      offsetX: 20
    },
    markers: {
      size: 6,
      strokeWidth: 0,
      hover: {
        size: 9
      }
    },
    grid: {
      show: true,
      padding: {
        bottom: 0
      }
    },
    labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
    xaxis: {
      tooltip: {
        enabled: false
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -20
    }
  }
  
  var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
  chartLine.render();
  




  
 // Fetch data from the server
async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/fetch-data');
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  // Function to render the chart with fetched data
  async function renderChart() {
    const data = await fetchData();
    if (data) {
      var optionsCircle4 = {
        chart: {
          type: 'radialBar',
          height: 350,
          width: 380,
        },
        plotOptions: {
          radialBar: {
            size: undefined,
            inverseOrder: true,
            hollow: {
              margin: 5,
              size: '48%',
              background: 'transparent',
            },
            track: {
              show: false,
            },
            startAngle: -180,
            endAngle: 180,
          },
        },
        stroke: {
          lineCap: 'round',
        },
        series: data.series,
        labels: data.labels,
        legend: {
          show: true,
          floating: true,
          position: 'right',
          offsetX: 0,
          offsetY: 240,
        },
      };
  
      var chartCircle4 = new ApexCharts(document.querySelector('#radialBarBottom'), optionsCircle4);
      chartCircle4.render();
    }
  }
  // Call renderChart to render the chart with fetched data
  renderChart();
  
  
  
  var optionsBar = {
    chart: {
      height: 380,
      type: 'bar',
      stacked: true,
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        horizontal: false,
      },
    },
    series: [{
      name: 'PRODUCT A',
      data: [14, 25, 21, 17, 12, 13, 11, 19]
    }, {
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27, 33, 12]
    }, {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14, 15, 13]
    }],
    xaxis: {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
    },
    fill: {
      opacity: 1
    },
  
  }
  
  var chartBar = new ApexCharts(
    document.querySelector("#barchart"),
    optionsBar
  );
  
  chartBar.render();
  
  var optionsArea = {
    chart: {
      height: 380,
      type: 'area',
      stacked: false,
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
        name: "Music",
        data: [11, 15, 26, 20, 33, 27]
      },
      {
        name: "Photos",
        data: [32, 33, 21, 42, 19, 32]
      },
      {
        name: "Files",
        data: [20, 39, 52, 11, 29, 43]
      }
    ],
    xaxis: {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2'],
    },
    tooltip: {
      followCursor: true
    },
    fill: {
      opacity: 1,
    },
  
  }
  
  var chartArea = new ApexCharts(
    document.querySelector("#areachart"),
    optionsArea
  );
  
  chartArea.render();


  window.Apex = {
    chart: {
      foreColor: '#fff',
      toolbar: {
        show: false
      },
    },
    colors: ['#FCCF31', '#17ead9', '#f02fc2'],
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: "#40475D",
    },
    xaxis: {
      axisTicks: {
        color: '#333'
      },
      axisBorder: {
        color: "#333"
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: ['#F55555', '#6078ea', '#6094ea']
      },
    },
    tooltip: {
      theme: 'dark',
      x: {
        formatter: function (val) {
          return moment(new Date(val)).format("HH:mm:ss")
        }
      }
    },
    yaxis: {
      decimalsInFloat: 2,
      opposite: true,
      labels: {
        offsetX: -10
      }
    }
  };
  
  var trigoStrength = 3
  var iteration = 11
  
  function getRandom() {
    var i = iteration;
    return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2)
  }
  
  function getRangeRandom(yrange) {
    return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  }
  
  function generateMinuteWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y = ((Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2))
  
      series.push([x, y]);
      baseval += 300000;
      i++;
    }
    return series;
  }
  
  
  
  function getNewData(baseval, yrange) {
    var newTime = baseval + 300000;
    return {
      x: newTime,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    }
  }
  
  var optionsColumn = {
    chart: {
      height: 350,
      type: 'bar',
      animations: {
        enabled: false
      },
      events: {
        animationEnd: function (chartCtx, opts) {
          const newData = chartCtx.w.config.series[0].data.slice()
          newData.shift()
          window.setTimeout(function () {
            chartCtx.updateOptions({
              series: [{
                data: newData
              }],
              xaxis: {
                min: chartCtx.minX,
                max: chartCtx.maxX
              },
              subtitle: {
                text: parseInt(getRangeRandom({min: 1, max: 20})).toString() + '%',
              }
            }, false, false)
          }, 300)
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0,
    },
    series: [{
      name: 'Load Average',
      data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
        min: 10,
        max: 110
      })
    }],
    title: {
      text: 'Load Average',
      align: 'left',
      style: {
        fontSize: '12px'
      }
    },
    subtitle: {
      text: '20%',
      floating: true,
      align: 'right',
      offsetY: 0,
      style: {
        fontSize: '22px'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.5,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100]
      }
    },
    xaxis: {
      type: 'datetime',
      range: 2700000
    },
    legend: {
      show: true
    },
  }
  
  
  
  var chartColumn = new ApexCharts(
    document.querySelector("#columnchart"),
    optionsColumn
  );
  chartColumn.render()
  
  var optionsLine = {
    chart: {
      height: 350,
      type: 'line',
      stacked: true,
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22
      },
      events: {
        animationEnd: function (chartCtx, opts) {
          const newData1 = chartCtx.w.config.series[0].data.slice()
          newData1.shift()
          const newData2 = chartCtx.w.config.series[1].data.slice()
          newData2.shift()
  
          // check animation end event for just 1 series to avoid multiple updates
          if (opts.el.node.getAttribute('index') === '0') {
            window.setTimeout(function () {
              chartCtx.updateOptions({
                series: [{
                  data: newData1
                }, {
                  data: newData2
                }],
                subtitle: {
                  text: parseInt(getRandom() * Math.random()).toString(),
                }
              }, false, false)
            }, 300)
          }
  
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 5,
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    series: [{
      name: 'Running',
      data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
        min: 30,
        max: 110
      })
    }, {
      name: 'Waiting',
      data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
        min: 30,
        max: 110
      })
    }],
    xaxis: {
      type: 'datetime',
      range: 2700000
    },
    title: {
      text: 'Processes',
      align: 'left',
      style: {
        fontSize: '12px'
      }
    },
    subtitle: {
      text: '20',
      floating: true,
      align: 'right',
      offsetY: 0,
      style: {
        fontSize: '22px'
      }
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: 'left',
      onItemClick: {
        toggleDataSeries: false
      },
      position: 'top',
      offsetY: -28,
      offsetX: 60
    },
  }
  
  var chartLine = new ApexCharts(
    document.querySelector("#linechart"),
    optionsLine
  );
  chartLine.render()
  
  var optionsCircle = {
    chart: {
      type: 'radialBar',
      height: 320,
      offsetY: -30,
      offsetX: 20
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: false,
        hollow: {
          margin: 5,
          size: '48%',
          background: 'transparent',
        },
        track: {
          show: true,
          background: '#40475D',
          strokeWidth: '10%',
          opacity: 1,
          margin: 3, // margin is in pixels
        },
  
  
      },
    },
    series: [71, 63],
    labels: ['Device 1', 'Device 2'],
    legend: {
      show: true,
      position: 'left',
      offsetX: -30,
      offsetY: 10,
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    }
  }
  
  var chartCircle = new ApexCharts(document.querySelector('#circlechart'), optionsCircle);
  chartCircle.render();
  
  var optionsProgress1 = {
    chart: {
      height: 70,
      type: 'bar',
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '20%',
        colors: {
          backgroundBarColors: ['#40475D']
        }
      },
    },
    stroke: {
      width: 0,
    },
    series: [{
      name: 'Process 1',
      data: [44]
    }],
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: 'Process 1'
    },
    subtitle: {
      floating: true,
      align: 'right',
      offsetY: 0,
      text: '44%',
      style: {
        fontSize: '20px'
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ['Process 1'],
    },
    yaxis: {
      max: 100
    },
    fill: {
      opacity: 1
    }
  }
  
  var chartProgress1 = new ApexCharts(document.querySelector('#progress1'), optionsProgress1);
  chartProgress1.render();
  
  
  var optionsProgress2 = {
    chart: {
      height: 70,
      type: 'bar',
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '20%',
        colors: {
          backgroundBarColors: ['#40475D']
        }
      },
    },
    colors: ['#17ead9'],
    stroke: {
      width: 0,
    },
    series: [{
      name: 'Process 2',
      data: [80]
    }],
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: 'Process 2'
    },
    subtitle: {
      floating: true,
      align: 'right',
      offsetY: 0,
      text: '80%',
      style: {
        fontSize: '20px'
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ['Process 2'],
    },
    yaxis: {
      max: 100
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        gradientToColors: ['#6078ea']
      }
    },
  }
  
  var chartProgress2 = new ApexCharts(document.querySelector('#progress2'), optionsProgress2);
  chartProgress2.render();
  
  
  var optionsProgress3 = {
    chart: {
      height: 70,
      type: 'bar',
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '20%',
        colors: {
          backgroundBarColors: ['#40475D']
        }
      },
    },
    colors: ['#f02fc2'],
    stroke: {
      width: 0,
    },
    series: [{
      name: 'Process 3',
      data: [74]
    }],
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: ['#6094ea']
      }
    },
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: 'Process 3'
    },
    subtitle: {
      floating: true,
      align: 'right',
      offsetY: 0,
      text: '74%',
      style: {
        fontSize: '20px'
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ['Process 3'],
    },
    yaxis: {
      max: 100
    },
  }
  
  var chartProgress3 = new ApexCharts(document.querySelector('#progress3'), optionsProgress3);
  chartProgress3.render();
  
  window.setInterval(function () {
  
    iteration++;
  
    chartColumn.updateSeries([{
      data: [...chartColumn.w.config.series[0].data,
        [
          chartColumn.w.globals.maxX + 300000,
          getRandom()
        ]
      ]
    }])
  
    chartLine.updateSeries([{
      data: [...chartLine.w.config.series[0].data,
        [
          chartLine.w.globals.maxX + 300000,
          getRandom()
        ]
      ]
    }, {
      data: [...chartLine.w.config.series[1].data,
        [
          chartLine.w.globals.maxX + 300000,
          getRandom()
        ]
      ]
    }])
  
    chartCircle.updateSeries([getRangeRandom({ min: 10, max: 100 }), getRangeRandom({ min: 10, max: 100 })])
  
    var p1Data = getRangeRandom({ min: 10, max: 100 });
    chartProgress1.updateOptions({
      series: [{
        data: [p1Data]
      }],
      subtitle: {
        text: p1Data + "%"
      }
    })
  
    var p2Data = getRangeRandom({ min: 10, max: 100 });
    chartProgress2.updateOptions({
      series: [{
        data: [p2Data]
      }],
      subtitle: {
        text: p2Data + "%"
      }
    })
  
    var p3Data = getRangeRandom({ min: 10, max: 100 });
    chartProgress3.updateOptions({
      series: [{
        data: [p3Data]
      }],
      subtitle: {
        text: p3Data + "%"
      }
    })
  
  
  
  }, 3000);

  var options = {
    series: [
    {
      name: "",
      data: [200, 330, 548, 740, 880, 990, 1100, 1380],
    },
  ],
    chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  colors: [
    '#F44F5E',
    '#E55A89',
    '#D863B1',
    '#CA6CD8',
    '#B57BED',
    '#8D95EB',
    '#62ACEA',
    '#4BC3E6',
  ],
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] 
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Pyramid Chart',
    align: 'middle',
  },
  xaxis: {
    categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains'],
  },
  legend: {
    show: false,
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  var options = {
    series: [
    {
      name: "Funnel Series",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200],
    },
  ],
    chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Recruitment Funnel',
    align: 'middle',
  },
  xaxis: {
    categories: [
      'Sourced',
      'Screened',
      'Assessed',
      'HR Interview',
      'Technical',
      'Verify',
      'Offered',
      'Hired',
    ],
  },
  legend: {
    show: false,
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();


  var options = {
    series: [{
    name: 'Series 1',
    data: [20, 100, 40, 30, 50, 80, 33],
  }],
    chart: {
    height: 350,
    type: 'radar',
  },
  dataLabels: {
    enabled: true
  },
  plotOptions: {
    radar: {
      size: 140,
      polygons: {
        strokeColors: '#e9e9e9',
        fill: {
          colors: ['#f8f8f8', '#fff']
        }
      }
    }
  },
  title: {
    text: 'Radar with Polygon Fill'
  },
  colors: ['#FF4560'],
  markers: {
    size: 4,
    colors: ['#fff'],
    strokeColor: '#FF4560',
    strokeWidth: 2,
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return val
      }
    }
  },
  xaxis: {
    categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  yaxis: {
    labels: {
      formatter: function(val, i) {
        if (i % 2 === 0) {
          return val
        } else {
          return ''
        }
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chartpoly"), options);
  chart.render();

  var options = {
    series: [
    {
      name: 'Actual',
      data: [
        {
          x: '2011',
          y: 12,
          goals: [
            {
              name: 'Expected',
              value: 14,
              strokeWidth: 2,
              strokeDashArray: 2,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2012',
          y: 44,
          goals: [
            {
              name: 'Expected',
              value: 54,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2013',
          y: 54,
          goals: [
            {
              name: 'Expected',
              value: 52,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2014',
          y: 66,
          goals: [
            {
              name: 'Expected',
              value: 61,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2015',
          y: 81,
          goals: [
            {
              name: 'Expected',
              value: 66,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2016',
          y: 67,
          goals: [
            {
              name: 'Expected',
              value: 70,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#775DD0'
            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chartbar"), options);
  chart.render();