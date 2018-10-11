// chart sample data
var arrChartData = new Array();

var canvas;
var context;
// chart properties
var cWidth, cHeight, cMargin, cSpace;
var cMarginSpace, cMarginHeight;
// bar properties
var bWidth, bMargin, totalBars, maxDataValue;
var bWidthMargin;
// bar animation
var ctr, numctr, speed;
// axis property
var totLabelsOnYAxis;


// barchart constructor

Year.prototype.barChart = function(year) {

    canvas = document.getElementById('bchart');
    if (canvas && canvas.getContext) {
        context = canvas.getContext('2d');
    }

    this.loadChart(year);

    var arrData = arrChartData;

    chartSettings(arrData);
    drawAxisLabelMarkers(arrData);
    drawChartWithAnimation(arrData);
    //drawBlueLine(arrData);
    //drawRedLine(arrData);

}

// initialize the chart and bar values
function chartSettings(arrData) {

    //canvas.height = canvas.height;
    //canvas.width = canvas.width;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // chart properties
    cMargin = 25;
    cSpace = 60;
    cHeight = canvas.height - 2 * cMargin - cSpace;
    cWidth = canvas.width - 2 * cMargin - cSpace;
    cMarginSpace = cMargin + cSpace;
    cMarginHeight = cMargin + cHeight;
    // bar properties
    bMargin = 15;
    totalBars = arrData.length;
    bWidth = (cWidth / totalBars) - bMargin;


    // find maximum value to plot on chart
    maxDataValue = 0;
    for (var i = 0; i < totalBars; i++) {
        var arrVal = arrData[i].split(",");
        var barVal = parseInt(arrVal[2]) - parseInt(arrVal[1]); //parseInt(arrVal[1]);
        if (parseInt(barVal) > parseInt(maxDataValue))
            maxDataValue = barVal;
    }

    // for (var i = 0; i < totalBars; i++) {
    //     var arrVal = arrData[i].split(",");
    //     var barVal = parseInt(arrVal[2]);
    //     if (parseInt(barVal) > parseInt(maxDataValue))
    //         maxDataValue = barVal;
    // }

    totLabelsOnYAxis = 10;
    context.font = "10pt Garamond";

    // initialize Animation variables
    ctr = 0;
    numctr = 100;
    speed = 10;
}

// draw chart axis, labels and markers
function drawAxisLabelMarkers(arrData) {
    context.lineWidth = "2.0";
    // draw y axis
    drawAxis(cMarginSpace, cMarginHeight, cMarginSpace, cMargin);
    // draw x axis
    drawAxis(cMarginSpace, cMarginHeight, cMarginSpace + cWidth, cMarginHeight);
    context.lineWidth = "1.0";
    drawMarkers(arrData);
}

// draw X and Y axis
function drawAxis(x, y, X, Y) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(X, Y);
    context.closePath();
    context.stroke();
}

// draw chart markers on X and Y Axis
function drawMarkers(arrData) {
    var numMarkers = parseInt(maxDataValue / totLabelsOnYAxis);
    context.textAlign = "right";
    context.fillStyle = "#000"; ;

    // Y Axis
    for (var i = 0; i <= totLabelsOnYAxis; i++) {
        markerVal = i * numMarkers;
        markerValHt = i * numMarkers * cHeight;
        var xMarkers = cMarginSpace - 5;
        var yMarkers = cMarginHeight - (markerValHt / maxDataValue);
        context.fillText(markerVal, xMarkers, yMarkers, cSpace);
    }

    // X Axis
    context.textAlign = 'center';
    for (var i = 0; i < totalBars; i++) {
        arrval = arrData[i].split(",");
        name = arrval[0];

        markerXPos = cMarginSpace + bMargin + (i * (bWidth + bMargin)) + (bWidth / 2);
        markerYPos = cMarginHeight + 10;

        context.fillText(name, markerXPos, markerYPos, bWidth);

    }

    context.save();

    // Add Y Axis title
    context.translate(cMargin + 10, cHeight / 2);
    context.rotate(Math.PI * -90 / 180);
    context.fillText('Amount in USD', 0, 0);

    context.restore();

    // Add X Axis Title
    context.fillText('Cash FLow (YTD)', cMarginSpace + (cWidth / 2), cMarginHeight + 30);
}

function drawChartWithAnimation(arrData) {
    // Loop through the total bars and draw
    for (var i = 0; i < totalBars; i++) {
        var arrVal = arrData[i].split(",");
        bVal = parseInt(arrVal[2]) - parseInt(arrVal[1]);

        // If Profit draw Green Bar else draws Orange Bar
        if (bVal >= 0) {
          bHt = (bVal * cHeight / maxDataValue);
          bX = cMarginSpace + (i * (bWidth + bMargin)) + bMargin;
          bY = cMarginHeight - bHt - 2;
          drawGreenRectangle(bX, bY, bWidth, bHt, true);
        } else {
          bVal = bVal * -1;
          bHt = (bVal * cHeight / maxDataValue);
          bX = cMarginSpace + (i * (bWidth + bMargin)) + bMargin;
          bY = cMarginHeight - bHt - 2;
          drawOrangeRectangle(bX, bY, bWidth, bHt, true);
        }
    }
}

function drawBlueLine(arrData) {
    var prevX, prevY = 0;

    prevX = cMarginSpace;
    prevY = cMarginHeight;

    // Loop through the total bars and draw
    for (var i = 0; i < totalBars; i++) {

        var arrVal = arrData[i].split(",");
        bVal = parseInt(arrVal[2]);
        bHt = (bVal * cHeight / maxDataValue);
        bX = cMarginSpace + (i * (bWidth + bMargin)) + bMargin;
        bY = cMarginHeight - bHt - 2;

        //Draw connecting lines
        drawLine(prevX, prevY, bX + (bWidth / 2), bY, 'blue', 3);

        prevX = bX + (bWidth / 2);
        prevY = bY;

    }

}

function drawRedLine(arrData) {
    var prevX, prevY = 0;

    prevX = cMarginSpace;
    prevY = cMarginHeight;

    // Loop through the total bars and draw
    for (var i = 0; i < totalBars; i++) {

        var arrVal = arrData[i].split(",");
        bVal = parseInt(arrVal[1]);
        bHt = (bVal * cHeight / maxDataValue);
        bX = cMarginSpace + (i * (bWidth + bMargin)) + bMargin;
        bY = cMarginHeight - bHt - 2;

        //Draw connecting lines
        drawLine(prevX, prevY, bX + (bWidth / 2), bY, 'red', 3);

        prevX = bX + (bWidth / 2);
        prevY = bY;

    }

}

// Draws the Lines on the Chart
function drawLine(startX, startY, endX, endY, strokeStyle, lineWidth) {
    if (strokeStyle != null) context.strokeStyle = strokeStyle;
    if (lineWidth != null) context.lineWidth = lineWidth;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
    context.closePath();
}

function drawGreenRectangle(x, y, w, h, fill) {
    // Draws Green Bars
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();

    if (fill) {
        var gradient = context.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(1, 'green');
        context.fillStyle = gradient;
        context.strokeStyle = gradient;
        context.fill();
    }

    context.stroke();
}

function drawOrangeRectangle(x, y, w, h, fill) {
    //Draws Orange Bars
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();
    //context.stroke();

    if (fill) {
        var gradient = context.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, 'yellow');
        gradient.addColorStop(1, 'red');
        context.fillStyle = gradient;
        context.strokeStyle = gradient;
        context.fillRect(x, y, w, h);
        //context.fill();
    }

    context.stroke();

}

//=====================================================
// Data Engine for Chart using JQuery and LocalStorage
//=====================================================


Year.prototype.loadChart = function(year) {

  this.restoreCalendar(year);

  var totIncome = 0;
  var totExpenses = 0;
  var totProfit = 0;
  arrChartData = [];

  if (!this.myYear) {
    alert("There is no Data available");
    context.clearRect(0, 0, canvas.width, canvas.height);
    return false;
  }

  for (var i = 0;i < this.myYear.length;i++) {


    arrChartData[i] = this.myYear[i].month + ", " + this.myYear[i].totExpenses + ", " + this.myYear[i].totIncome;
    totIncome = totIncome + this.myYear[i].totIncome;
    totExpenses = totExpenses + this.myYear[i].totExpenses;

  }

  totProfit = totIncome - totExpenses;

  $( "#totIncome" ).html( totIncome );
  $( "#totExpenses" ).html( totExpenses );
  $( "#totProfit" ).html( totProfit );

  return arrChartData; //Authors array from bookShelf
};

document.addEventListener("DOMContentLoaded", function(e){

  window.gYear = new Year();

  window.jan2017_One = new propMonth("Property One","Jan", 750, 1600);
  window.feb2017_One = new propMonth("Property One","Feb", 650, 1600);
  window.mar2017_One = new propMonth("Property One","Mar", 820, 1600);
  window.apr2017_One = new propMonth("Property One","Apr", 950, 1600);
  window.may2017_One = new propMonth("Property One","May", 833, 1600);
  window.jun2017_One = new propMonth("Property One","Jun", 250, 1600);
  window.jul2017_One = new propMonth("Property One","Jul", 920, 1650);
  window.aug2017_One = new propMonth("Property One","Aug", 670, 1650);
  window.sep2017_One = new propMonth("Property One","Sep", 880, 1650);
  window.oct2017_One = new propMonth("Property One","Oct", 750, 1650);
  window.nov2017_One = new propMonth("Property One","Nov", 987, 1650);
  window.dec2017_One = new propMonth("Property One","Dec", 670, 1650);

  window.jan2018_One = new propMonth("Property One","Jan", 850, 1650);
  window.feb2018_One = new propMonth("Property One","Feb", 943, 1650);
  window.mar2018_One = new propMonth("Property One","Mar", 580, 1650);
  window.apr2018_One = new propMonth("Property One","Apr", 570, 1650);
  window.may2018_One = new propMonth("Property One","May", 890, 1650);
  window.jun2018_One = new propMonth("Property One","Jun", 750, 1650);
  window.jul2018_One = new propMonth("Property One","Jul", 790, 1700);
  window.aug2018_One = new propMonth("Property One","Aug", 650, 1700);
  window.sep2018_One = new propMonth("Property One","Sep", 990, 1700);
  window.oct2018_One = new propMonth("Property One","Oct", 850, 1700);

  window.jan2017_Two = new propMonth("Property Two","Jan", 450, 950);
  window.feb2017_Two = new propMonth("Property Two","Feb", 560, 950);
  window.mar2017_Two = new propMonth("Property Two","Mar", 550, 950);
  window.apr2017_Two = new propMonth("Property Two","Apr", 750, 975);
  window.may2017_Two = new propMonth("Property Two","May", 540, 975);
  window.jun2017_Two = new propMonth("Property Two","Jun", 650, 975);
  window.jul2017_Two = new propMonth("Property Two","Jul", 430, 975);
  window.aug2017_Two = new propMonth("Property Two","Aug", 450, 975);
  window.sep2017_Two = new propMonth("Property Two","Sep", 630, 975);
  window.oct2017_Two = new propMonth("Property Two","Oct", 750, 975);
  window.nov2017_Two = new propMonth("Property Two","Nov", 550, 975);
  window.dec2017_Two = new propMonth("Property Two","Dec", 740, 975);

  window.jan2018_Two = new propMonth("Property Two","Jan", 540, 975);
  window.feb2018_Two = new propMonth("Property Two","Feb", 620, 975);
  window.mar2018_Two = new propMonth("Property Two","Mar", 590, 975);
  window.apr2018_Two = new propMonth("Property Two","Apr", 750, 1050);
  window.may2018_Two = new propMonth("Property Two","May", 670, 1050);
  window.jun2018_Two = new propMonth("Property Two","Jun", 720, 1050);
  window.jul2018_Two = new propMonth("Property Two","Jul", 450, 1050);
  window.aug2018_Two = new propMonth("Property Two","Aug", 680, 1050);
  window.sep2018_Two = new propMonth("Property Two","Sep", 750, 1050);
  window.oct2018_Two = new propMonth("Property Two","Oct", 500, 1050);

  gYear.cProp1Y17();
  gYear.cProp1Y18();

  var selYear = $('#my-year').val();
  gYear.barChart(selYear);

});

Year.prototype.cProp1Y18 = function()
{
  // Add a book to bookShelf
  var storeYear = [];

  storeYear.push(jan2018_One);
  storeYear.push(feb2018_One);
  storeYear.push(mar2018_One);
  storeYear.push(apr2018_One);
  storeYear.push(may2018_One);
  storeYear.push(jun2018_One);
  storeYear.push(jul2018_One);
  storeYear.push(aug2018_One);
  storeYear.push(sep2018_One);
  storeYear.push(oct2018_One);

  //convert JSON bookShelf into a string
  var dehydratedYear = JSON.stringify(storeYear);

  //save it with local storage
  window.localStorage.setItem('2018', dehydratedYear);

  return true; //True if not already added - false if it already added
};

Year.prototype.cProp1Y17 = function()
{
  // Add a book to bookShelf
  var storeYear = [];

  storeYear.push(jan2017_One);
  storeYear.push(feb2017_One);
  storeYear.push(mar2017_One);
  storeYear.push(apr2017_One);
  storeYear.push(may2017_One);
  storeYear.push(jun2017_One);
  storeYear.push(jul2017_One);
  storeYear.push(aug2017_One);
  storeYear.push(sep2017_One);
  storeYear.push(oct2017_One);
  storeYear.push(nov2017_One);
  storeYear.push(dec2017_One);

  //convert JSON bookShelf into a string
  var dehydratedYear = JSON.stringify(storeYear);

  //save it with local storage
  window.localStorage.setItem('2017', dehydratedYear);

  return true; //True if not already added - false if it already added
};

Year.prototype.cProp2Y18 = function()
{
  // Add a book to bookShelf
  var storeYear = [];

  storeYear.push(jan2018_Two);
  storeYear.push(feb2018_Two);
  storeYear.push(mar2018_Two);
  storeYear.push(apr2018_Two);
  storeYear.push(may2018_Two);
  storeYear.push(jun2018_Two);
  storeYear.push(jul2018_Two);
  storeYear.push(aug2018_Two);
  storeYear.push(sep2018_Two);
  storeYear.push(oct2018_Two);

  //convert JSON bookShelf into a string
  var dehydratedYear = JSON.stringify(storeYear);

  //save it with local storage
  window.localStorage.setItem('p2y2018', dehydratedYear);

  return true; //True if not already added - false if it already added
};

Year.prototype.cProp2Y17 = function()
{
  // Add a book to bookShelf
  var storeYear = [];

  storeYear.push(jan2017_Two);
  storeYear.push(feb2017_Two);
  storeYear.push(mar2017_Two);
  storeYear.push(apr2017_Two);
  storeYear.push(may2017_Two);
  storeYear.push(jun2017_Two);
  storeYear.push(jul2017_Two);
  storeYear.push(aug2017_Two);
  storeYear.push(sep2017_Two);
  storeYear.push(oct2017_Two);
  storeYear.push(nov2017_Two);
  storeYear.push(dec2017_Two);

  //convert JSON bookShelf into a string
  var dehydratedYear = JSON.stringify(storeYear);

  //save it with local storage
  window.localStorage.setItem('p2y2017', dehydratedYear);

  return true; //True if not already added - false if it already added
};

Year.prototype.restoreCalendar = function(year)
{
  // Restore bookShelf from Local Storage

  this.myYear = [];

  //get 'bookShelf' and rehydrate it  (convert it back JSON)
  var rehydratedYear = JSON.parse(window.localStorage.getItem(year));

  this.myYear = rehydratedYear;

  return this.myYear;
}

function Year()
{
  this.myYear = new Array();
};

function propMonth(property, month, totExpenses, totIncome)
{
  this.property = property;
  this.month = month;
  this.totExpenses = totExpenses;
  this.totIncome = totIncome;

};
