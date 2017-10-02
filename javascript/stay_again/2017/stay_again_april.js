var stay_again_april = [0, 0, 0, 0, 0, 0];      //index番号順に、県内在住、ぜひまた来たい、機会があればまた来たい、あまり来たいと思わない、もう来ないと思う、わからない


$(function(){
  $.ajax({url: 'json/2017/data_april.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["wanna stay again"] == "0"){
        stay_again_april[0]++;
      }
      if (data[i]["wanna stay again"] == "1") {
        stay_again_april[1]++;
      }
      if (data[i]["wanna stay again"] == "2") {
        stay_again_april[2]++;
      }
      if (data[i]["wanna stay again"] == "3") {
        stay_again_april[3]++;
      }
      if (data[i]["wanna stay again"] == "4") {
        stay_again_april[4]++;
      }
      if (data[i]["wanna stay again"] == "5") {
        stay_again_april[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----4月(再来訪)----");
  for(var i = 0; i < stay_again_april.length; i++){
    console.log(stay_again_april[i]);
  }


});