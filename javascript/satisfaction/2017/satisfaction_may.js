var satisfaction_gift_may = [0, 0, 0, 0, 0];      //お土産：index番号順に、大いに満足、満足、ふつう、不満、大いに不満
var satisfaction_eat_may = [0, 0, 0, 0, 0];      //食べ物：index番号順に、大いに満足、満足、ふつう、不満、大いに不満
var satisfaction_trip_may = [0, 0, 0, 0, 0];      //旅行全体：index番号順に、大いに満足、満足、ふつう、不満、大いに不満


$(function(){
  $.ajax({url: 'json/2017/data_may.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["souvenirs satis"] == "1"){
        satisfaction_gift_may[0]++;
      }
      if (data[i]["souvenirs satis"] == "2") {
        satisfaction_gift_may[1]++;
      }
      if (data[i]["souvenirs satis"] == "3") {
        satisfaction_gift_may[2]++;
      }
      if (data[i]["souvenirs satis"] == "4") {
        satisfaction_gift_may[3]++;
      }
      if (data[i]["souvenirs satis"] == "5") {
        satisfaction_gift_may[4]++;
      }

      if(data[i]["food satis"] == "1"){
        satisfaction_eat_may[0]++;
      }
      if (data[i]["food satis"] == "2") {
        satisfaction_eat_may[1]++;
      }
      if (data[i]["food satis"] == "3") {
        satisfaction_eat_may[2]++;
      }
      if (data[i]["food satis"] == "4") {
        satisfaction_eat_may[3]++;
      }
      if (data[i]["food satis"] == "5") {
        satisfaction_eat_may[4]++;
      }

      if(data[i]["trip satis"] == "1"){
        satisfaction_trip_may[0]++;
      }
      if (data[i]["trip satis"] == "2") {
        satisfaction_trip_may[1]++;
      }
      if (data[i]["trip satis"] == "3") {
        satisfaction_trip_may[2]++;
      }
      if (data[i]["trip satis"] == "4") {
        satisfaction_trip_may[3]++;
      }
      if (data[i]["trip satis"] == "5") {
        satisfaction_trip_may[4]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  // console.log("----5月(お土産)----");
  // for(var i = 0; i < satisfaction_gift_may.length; i++){
  //   console.log(satisfaction_gift_may[i]);
  // }
  // console.log("----5月(飲食)----");
  // for(var i = 0; i < satisfaction_eat_may.length; i++){
  //   console.log(satisfaction_eat_may[i]);
  // }
  // console.log("----5月(旅行全体)----");
  // for(var i = 0; i < satisfaction_trip_may.length; i++){
  //   console.log(satisfaction_trip_may[i]);
  // }


});
