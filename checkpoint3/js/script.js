var data = {
  totalRevs: -10,
  totalCurrent: 1000,
  totalRPS: 0
};

setInterval(goGo, 1);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent -= data.totalRPS;
  $("#wheel").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS=-0.01).toFixed(2));
}


$("#wheel").click(function (){
  data.totalRevs -1;
  data.totalCurrent -1;
  updateReport();
})


//Purchase things
$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalRPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html(parseInt($( this ).children("span").html()*1.15));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
  }
  updateReport();
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
