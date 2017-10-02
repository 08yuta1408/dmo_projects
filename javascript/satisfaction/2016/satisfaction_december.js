var satisfaction_gift_2016_december = [0, 0, 0, 0, 0];      //お土産：index番号順に、大いに満足、満足、ふつう、不満、大いに不満
var satisfaction_eat_2016_december = [0, 0, 0, 0, 0];      //食べ物：index番号順に、大いに満足、満足、ふつう、不満、大いに不満
var satisfaction_trip_2016_december = [0, 0, 0, 0, 0];      //旅行全体：index番号順に、大いに満足、満足、ふつう、不満、大いに不満


$(function(){
  $.ajax({url: 'json/2016/data_december.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["souvenirs satis"] == "1"){
        satisfaction_gift_2016_december[0]++;
      }
      if (data[i]["souvenirs satis"] == "2") {
        satisfaction_gift_2016_december[1]++;
      }
      if (data[i]["souvenirs satis"] == "3") {
        satisfaction_gift_2016_december[2]++;
      }
      if (data[i]["souvenirs satis"] == "4") {
        satisfaction_gift_2016_december[3]++;
      }
      if (data[i]["souvenirs satis"] == "5") {
        satisfaction_gift_2016_december[4]++;
      }

      if(data[i]["food satis"] == "1"){
        satisfaction_eat_2016_december[0]++;
      }
      if (data[i]["food satis"] == "2") {
        satisfaction_eat_2016_december[1]++;
      }
      if (data[i]["food satis"] == "3") {
        satisfaction_eat_2016_december[2]++;
      }
      if (data[i]["food satis"] == "4") {
        satisfaction_eat_2016_december[3]++;
      }
      if (data[i]["food satis"] == "5") {
        satisfaction_eat_2016_december[4]++;
      }

      if(data[i]["trip satis"] == "1"){
        satisfaction_trip_2016_december[0]++;
      }
      if (data[i]["trip satis"] == "2") {
        satisfaction_trip_2016_december[1]++;
      }
      if (data[i]["trip satis"] == "3") {
        satisfaction_trip_2016_december[2]++;
      }
      if (data[i]["trip satis"] == "4") {
        satisfaction_trip_2016_december[3]++;
      }
      if (data[i]["trip satis"] == "5") {
        satisfaction_trip_2016_december[4]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });


});
