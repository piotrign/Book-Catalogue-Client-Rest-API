$(document).ready(function(){
  $.ajax({
      url: 'https://date.jsontest.com',
      data: '{}',
      type: 'GET',
      dataType: "json",
    success: function(json) {
      console.log(json);
    }
    error: function(xhr, status, errorThrown){
      console.log(status);
    }
    complete:funciton(xhr, status){
      console.log("done");
    }
  });
//zad 3
//scrypt jqueyr
//scrypt nasz
// Porada na przyszlosc:
// serwer serwuje jsony
// i front rysuje UI

});
