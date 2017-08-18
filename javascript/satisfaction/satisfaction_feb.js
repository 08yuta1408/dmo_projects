var satisfaction_gift_feb = [0, 0, 0, 0, 0];      //お土産：index番号順に、大いに満足、満足、ふつう、不満、大いに不満
var satisfaction_eat_feb = [0, 0, 0, 0, 0];      //食べ物：index番号順に、大いに満足、満足、ふつう、不満、大いに不満
var satisfaction_trip_feb = [0, 0, 0, 0, 0];      //旅行全体：index番号順に、大いに満足、満足、ふつう、不満、大いに不満


$(function(){
  $.ajax({url: 'json/data_february.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["souvenirs satis"] == "1"){
        satisfaction_gift_feb[0]++;
      }
      if (data[i]["souvenirs satis"] == "2") {
        satisfaction_gift_feb[1]++;
      }
      if (data[i]["souvenirs satis"] == "3") {
        satisfaction_gift_feb[2]++;
      }
      if (data[i]["souvenirs satis"] == "4") {
        satisfaction_gift_feb[3]++;
      }
      if (data[i]["souvenirs satis"] == "5") {
        satisfaction_gift_feb[4]++;
      }

      if(data[i]["food satis"] == "1"){
        satisfaction_eat_feb[0]++;
      }
      if (data[i]["food satis"] == "2") {
        satisfaction_eat_feb[1]++;
      }
      if (data[i]["food satis"] == "3") {
        satisfaction_eat_feb[2]++;
      }
      if (data[i]["food satis"] == "4") {
        satisfaction_eat_feb[3]++;
      }
      if (data[i]["food satis"] == "5") {
        satisfaction_eat_feb[4]++;
      }

      if(data[i]["trip satis"] == "1"){
        satisfaction_trip_feb[0]++;
      }
      if (data[i]["trip satis"] == "2") {
        satisfaction_trip_feb[1]++;
      }
      if (data[i]["trip satis"] == "3") {
        satisfaction_trip_feb[2]++;
      }
      if (data[i]["trip satis"] == "4") {
        satisfaction_trip_feb[3]++;
      }
      if (data[i]["trip satis"] == "5") {
        satisfaction_trip_feb[4]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----2月(お土産)----");
  for(var i = 0; i < satisfaction_gift_feb.length; i++){
    console.log(satisfaction_gift_feb[i]);
  }
  console.log("----2月(飲食)----");
  for(var i = 0; i < satisfaction_eat_feb.length; i++){
    console.log(satisfaction_eat_feb[i]);
  }
  console.log("----2月(旅行全体)----");
  for(var i = 0; i < satisfaction_trip_feb.length; i++){
    console.log(satisfaction_trip_feb[i]);
  }


});
