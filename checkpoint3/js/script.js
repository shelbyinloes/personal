'use strict';

$(document).ready(function(){


var data = {
  totalWater:0,
  totalCurrent:0,
  totalOxygen: 0
};


setInterval(grow,500);

function grow() {
  // data.totalWater += data.totalOxygen;
  data.totalCurrent += data.totalOxygen;
  updateReport();
};

// function goGo() {
//   data.totalRevs += data.totalRPS;
//   data.totalCurrent += data.totalRPS;
//   $("#wheel").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
//   updateReport();
// }

//click totals
function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#oxygen").text((data.totalOxygen).toFixed(1));
};

// function updateReport() {
//   $("#currentTotal").text(Math.floor(data.totalCurrent));
//   $("#rps").text((data.totalRPS/70.4).toFixed(3));
// }

//save clicks
$("#flower").click(function (){
  data.totalWater ++;
  data.totalCurrent ++;
  updateReport();
});

// $("#wheel").click(function (){
//   data.totalRevs ++;
//   data.totalCurrent ++;
//   updateReport();
// })
//


// "Cash-out" Buttons
  $(".button").click(function (){
    var addVal = $(this).data("cost");
    if ($(this).data("cost") <= data.totalCurrent) {
      data.totalCurrent -=  parseFloat($(this).data("cost").toPrecision(1));
      data.totalOxygen += parseFloat($(this).data("val"));
      $(this).children("span").html(parseInt($(this).children("span").html()*1.15));
      $(this).data("cost", parseInt($(this).data("cost") * 1.15));
    };

    // $(".button").click(function (){
    //   var addVal = $(this).data( "cost" );
    //   if ($(this).data( "cost" ) < data.totalCurrent ) {
    //     data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    //     data.totalRPS += parseFloat($(this).data( "val" ));
    //     $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    //     $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
    //   }
    //   updateReport();
    // })

// Changes Picture Based on Total Fans Counter
    if ((data.totalOxygen) >= 2){
      $('#flower').attr('src', './images/2flower.png')
    };
    if ((data.totalOxygen) >= 10){
      $('#flower').attr('src', './images/3flower.png')
    };
    if ((data.totalOxygen) >= 30){
      $('#flower').attr('src', './images/4flower.png')
    };
    if ((data.totalOxygen) >= 700){
      $('#flower').attr('src', './images/5flower.png')
    };
    if ((data.totalOxygen) >= 150){
      $('#flower').attr('src', './images/6flower.png')
    };
    updateReport();
  // });
  });
  })


//ORIGINAL COPY DO NOT TOUCH
// var data = {
//   totalRevs:360,
//   totalCurrent:360,
//   totalRPS: 0
// };
//
// setInterval(goGo,1000);
//
// function goGo() {
//   data.totalRevs += data.totalRPS;
//   data.totalCurrent += data.totalRPS;
//   $("#wheel").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
//   updateReport();
// }
//
// function updateReport() {
//   $("#currentTotal").text(Math.floor(data.totalCurrent));
//   $("#rps").text((data.totalRPS/70.4).toFixed(3));
// }
//
//
// $("#wheel").click(function (){
//   data.totalRevs ++;
//   data.totalCurrent ++;
//   updateReport();
// })
//
// $(".button").click(function (){
//   var addVal = $(this).data( "cost" );
//   if ($(this).data( "cost" ) < data.totalCurrent ) {
//     data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
//     data.totalRPS += parseFloat($(this).data( "val" ));
//     $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
//     $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
//   }
//   updateReport();
// })
