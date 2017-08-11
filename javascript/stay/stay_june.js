var stay_june = [0, 0, 0, 0];      //index番号順に、日帰り、１泊、２泊、３泊以上


$(function(){
  $.ajax({url: 'json/data_june.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["stay"] == "1"){
        stay_june[0]++;
      }
      if (data[i]["stay"] == "2") {
        stay_june[1]++;
      }
      if (data[i]["stay"] == "3") {
        stay_june[2]++;
      }
      if (data[i]["stay"] == "4") {
        stay_june[3]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----6月----");
  for(var i = 0; i < stay_june.length; i++){
    console.log(stay_june[i]);
  }


});
