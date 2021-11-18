function createALchart(){
  var dom = document.getElementById("container1"); 
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
      ['Time Deposit', 30],
      ['Demand Deposit', 20],
      ['Investment', 10]
    ]
  };
  const datasetL = {
    dimensions: ['product', 'value'],
    source: [
      ['Loan', 10],
      ['Insurance', 20]
    ]
  };
  const datasetO = {
    dimensions: ['product', 'value'],
    source: [
      ['Assets', 60],
      ['Liabilities', 30]
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
      left: 50,
      top: 20,
      style: {
        text: 'Back',
        fontSize: 40,
        fill: "#f1f1f1",
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
      left: 50,
      top: 20,
      style: {
        text: 'Back',
        fontSize: 40,
        fill: "#f0f0f0",
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
  var dom = document.getElementById("container2"); 
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
      ['A', 10],
      ['B', 30],
      ['C', 10]
    ]
  };
  const datasetL = {
    dimensions: ['product', 'value'],
    source: [
      ['A', 13],
      ['B', 21]
    ]
  };
  const datasetO = {
    dimensions: ['product', 'value'],
    source: [
      ['Income', 88],
      ['Outgoing', 12]
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
      left: 50,
      top: 20,
      style: {
        text: 'Back',
        fontSize: 40
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
      left: 50,
      top: 20,
      style: {
        text: 'Back',
        fontSize: 40
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
function openbar(){
  document.getElementById("sidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
}
function closebar(){
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function hidemenu(){//加个showmenu减少重复吧
  var btn = document.getElementById("mask")
  while (btn.hasChildNodes()) {
    btn.removeChild(btn.lastChild);
  }
  btn.style.height = "0";
}
