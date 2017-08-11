var stay_april = [0, 0, 0, 0];      //index番号順に、日帰り、１泊、２泊、３泊以上


$(function(){
  $.ajax({url: 'json/data_april.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["stay"] == "1"){
        stay_april[0]++;
      }
      if (data[i]["stay"] == "2") {
        stay_april[1]++;
      }
      if (data[i]["stay"] == "3") {
        stay_april[2]++;
      }
      if (data[i]["stay"] == "4") {
        stay_april[3]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----4月----");
  for(var i = 0; i < stay_april.length; i++){
    console.log(stay_april[i]);
  }


});
