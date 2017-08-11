var stay_feb = [0, 0, 0, 0];      //index番号順に、日帰り、１泊、２泊、３泊以上


$(function(){
  $.ajax({url: 'json/data_february.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["stay"] == "1"){
        stay_feb[0]++;
      }
      if (data[i]["stay"] == "2") {
        stay_feb[1]++;
      }
      if (data[i]["stay"] == "3") {
        stay_feb[2]++;
      }
      if (data[i]["stay"] == "4") {
        stay_feb[3]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----2月----");
  for(var i = 0; i < stay_feb.length; i++){
    console.log(stay_feb[i]);
  }


});
