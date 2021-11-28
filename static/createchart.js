function createALchart(){
  var dom = document.getElementById("chart1"); 
  var bin = echarts.getInstanceByDom(dom)
  if (typeof bin !== 'undefined'){
    bin.clear()
  }
  var myChart = echarts.init(dom);
  var option;



  setTimeout(function () {
  const datasetA = {
    dimensions: ['product', 'value'],
    source: [
      ['Time Deposit', {{tmp_dict['time_deposit']}}],
      ['Demand Deposit', {{tmp_dict['demand_deposit']}}],
      ['Investment', {{tmp_dict['Investment']}}]
    ]
  };
  const datasetL = {
    dimensions: ['product', 'value'],
    source: [
      ['Loan', {{tmp_dict['Loan']}}],
      ['Insurance', {{tmp_dict['Insurance']}}]
    ]
  };
  const datasetO = {
    dimensions: ['product', 'value'],
    source: [
      ['Assets', {{tmp_dict['Asset']}}],
      ['Liabilities', {{tmp_dict['Liabilities']}}]
    ]
  };
  const OptionA = {
    dataset: [datasetA],
    series: [
      {
        type: 'pie',
        // associate the series to be animated by id
        id: 'product',
        emphasis: {
          scale: true,
          scaleSize: 20,
          focus: 'self'
        },
        radius: [0, '50%'],
        universalTransition: true,
        animationDurationUpdate: 1000,
        label: {
          formatter: ' {c} ({d}%)'
        }
      },
    ],
    graphic: [
    {
      type: 'text',
      left: 250,
      top: 30,
      style: {
        text: 'Back',
        fontSize: 20,
        fill: "#212121",
      },
      onclick: function() {
        myChart.setOption(OptionO, true);
      }
    }
  ]

  };
  const OptionL = {
    dataset: [datasetL],
    series: [
      {
        type: 'pie',
        // associate the series to be animated by id
        id: 'product',
        emphasis: {
          scale: true,
          scaleSize: 20,
          focus: 'self'
        },
        radius: [0, '50%'],
        universalTransition: true,
        animationDurationUpdate: 1000,
        label: {
          formatter: ' {c} ({d}%)'
        }
      }
    ],
    graphic: [
    {
      type: 'text',
      left: 250,
      top: 30,
      style: {
        text: 'Back',
        fontSize: 20,
        fill: "#212121",
      },
      onclick: function() {
        myChart.setOption(OptionO, true);
      }
    }
  ]
  };
  const OptionO = {
    dataset: [datasetO],
    series: [
      {
        type: 'pie',
        // associate the series to be animated by id
        id: 'product',
        emphasis: {
          scale: true,
          scaleSize: 20,
          focus: 'self'
        },
        radius: [0, '50%'],
        universalTransition: true,
        animationDurationUpdate: 1000,
        label: {
          formatter: '{c} ({d}%)'
        }
      }
    ]
  };
  option = OptionO;
/*
  this.myChart.on('click', function(params) {
    if(params.seriesType == 'pie') {
      myChart.setOption({
        series: {
          id: 'pie',
          radius:'40%',
        }
      })
    }
  });
*/

  myChart.on('click', function(params) {
    if(params.name == 'Assets') {
      option=OptionA;
      myChart.setOption(option, true);
    }
    else
    if(params.name == 'Liabilities') {
      option=OptionL;
      myChart.setOption(option, true);
    }
    else
    if(params.name == 'Investment') {
      document.getElementById("mask").style.height="400px";
      document.getElementById("mask").style.border="2px solid rgba(255,255,255,0.1);";
      var mask = document.querySelector(".float-menu");
      var insertbtn = `
        <button class="floatbtn">
          Buy/Sell Securities
        </button>
        <button class="floatbtn">
          About
        </button>
        <button class="floatbtn" onclick="hidemenu()">
          Return
        </button>
      `
      mask.innerHTML = (insertbtn);
    }
    else
    if(params.name == 'Time Deposit') {
      document.getElementById("mask").style.height="400px";
      document.getElementById("mask").style.border="2px solid rgba(255,255,255,0.1);";
      var mask = document.querySelector(".float-menu");
      var insertbtn = `
        <button class="floatbtn">
          Save/Withdraw Money
        </button>
        <button class="floatbtn">
          About
        </button>
        <button class="floatbtn" onclick="hidemenu()">
          Return
        </button>
      `
      mask.innerHTML = (insertbtn);
    }
    else
    if(params.name == 'Demand Deposit') {
      document.getElementById("mask").style.height="400px";
      document.getElementById("mask").style.border="2px solid rgba(255,255,255,0.1);";
      var mask = document.querySelector(".float-menu");
      var insertbtn = `
        <button class="floatbtn">
          Save/Withdraw Money
        </button>
        <button class="floatbtn">
          About
        </button>
        <button class="floatbtn" onclick="hidemenu()">
          Return
        </button>
      `
      mask.innerHTML = (insertbtn);
    }
    
  });
  myChart.on('mouseout', function(params) {
    if(params.seriesType == 'pie') {
      myChart.setOption({
        series: {
          id: 'pie',
          radius:'30%'
        }
      })
    }
  });
  myChart.setOption(option);
  });

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
}
function createOIchart(){
  var dom = document.getElementById("chart2"); 
  bin = echarts.getInstanceByDom(dom);
  if (typeof bin !== 'undefined'){
    bin.clear()
  }
  var myChart = echarts.init(dom);
  var option;



  setTimeout(function () {
  const datasetA = {
    dimensions: ['product', 'value'],
    source: [
      ['Pools Transferred', 10],
      ['External Earnings', 30],
      ['Savings', 20]
    ]
  };
  const datasetL = {
    dimensions: ['product', 'value'],
    source: [
      ['Food', 13],
      ['Transportation', 10],
      ['Entertainment', 11],
      ['Others',9],
      ['Investment',23]
    ]
  };
  const datasetO = {
    dimensions: ['product', 'value'],
    source: [
      ['Income', 88],
      ['Outgoing', 72]
    ]
  };
  const OptionA = {
    dataset: [datasetA],
    series: [
      {
        type: 'pie',
        // associate the series to be animated by id
        id: 'product',
        emphasis: {
          scale: true,
          scaleSize: 20,
          focus: 'self'
        },
        radius: [0, '50%'],
        universalTransition: true,
        animationDurationUpdate: 1000,
        label: {
          formatter: ' {c} ({d}%)'
        }
      },
    ],
    graphic: [
    {
      type: 'text',
      left: 250,
      top: 30,
      style: {
        text: 'Back',
        fontSize: 20,
        fill: "#212121",
      },
      onclick: function() {
        myChart.setOption(OptionO, true);
      }
    }
  ]

  };
  const OptionL = {
    dataset: [datasetL],
    series: [
      {
        type: 'pie',
        // associate the series to be animated by id
        id: 'product',
        emphasis: {
          scale: true,
          scaleSize: 20,
          focus: 'self'
        },
        radius: [0, '50%'],
        universalTransition: true,
        animationDurationUpdate: 1000,
        label: {
          formatter: ' {c} ({d}%)'
        }
      }
    ],
    graphic: [
    {
      type: 'text',
      left: 250,
      top: 30,
      style: {
        text: 'Back',
        fontSize: 20,
        fill: "#212121",
      },
      onclick: function() {
        myChart.setOption(OptionO, true);
      }
    }
  ]
  };
  const OptionO = {
    dataset: [datasetO],
    series: [
      {
        type: 'pie',
        // associate the series to be animated by id
        id: 'product',
        emphasis: {
          scale: true,
          scaleSize: 20,
          focus: 'self'
        },
        radius: [0, '50%'],
        universalTransition: true,
        animationDurationUpdate: 1000,
        label: {
          formatter: '{c} ({d}%)'
        }
      }
    ]
  };
  option = OptionO;
/*
  this.myChart.on('click', function(params) {
    if(params.seriesType == 'pie') {
      myChart.setOption({
        series: {
          id: 'pie',
          radius:'40%',
        }
      })
    }
  });
*/

  myChart.on('click', function(params) {
    if(params.name == 'Income') {
      option=OptionA;
      myChart.setOption(option, true);
    }
    else
    if(params.name == 'Outgoing') {
      option=OptionL;
      myChart.setOption(option, true);
    }
  });
  myChart.on('mouseout', function(params) {
    if(params.seriesType == 'pie') {
      myChart.setOption({
        series: {
          id: 'pie',
          radius:'30%'
        }
      })
    }
  });
  myChart.setOption(option);
  });

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
}