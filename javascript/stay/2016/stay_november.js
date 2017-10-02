var stay_2016_november = [0, 0, 0, 0];      //index番号順に、日帰り、１泊、２泊、３泊以上


$(function(){
  $.ajax({url: 'json/2016/data_november.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["stay"] == "1"){
        stay_2016_november[0]++;
      }
      if (data[i]["stay"] == "2") {
        stay_2016_november[1]++;
      }
      if (data[i]["stay"] == "3") {
        stay_2016_november[2]++;
      }
      if (data[i]["stay"] == "4") {
        stay_2016_november[3]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

});
