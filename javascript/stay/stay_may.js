var stay_may = [0, 0, 0, 0];      //index番号順に、日帰り、１泊、２泊、３泊以上


$(function(){
  $.ajax({url: 'json/data_may.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["stay"] == "1"){
        stay_may[0]++;
      }
      if (data[i]["stay"] == "2") {
        stay_may[1]++;
      }
      if (data[i]["stay"] == "3") {
        stay_may[2]++;
      }
      if (data[i]["stay"] == "4") {
        stay_may[3]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----5月----");
  for(var i = 0; i < stay_may.length; i++){
    console.log(stay_may[i]);
  }


});
