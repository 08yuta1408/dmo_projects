var stay_again_2017_august = [0, 0, 0, 0, 0, 0];      //index番号順に、県内在住、ぜひまた来たい、機会があればまた来たい、あまり来たいと思わない、もう来ないと思う、わからない


$(function(){
  $.ajax({url: 'json/2017/data_august.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["wanna stay again"] == "0"){
        stay_again_2017_august[0]++;
      }
      if (data[i]["wanna stay again"] == "1") {
        stay_again_2017_august[1]++;
      }
      if (data[i]["wanna stay again"] == "2") {
        stay_again_2017_august[2]++;
      }
      if (data[i]["wanna stay again"] == "3") {
        stay_again_2017_august[3]++;
      }
      if (data[i]["wanna stay again"] == "4") {
        stay_again_2017_august[4]++;
      }
      if (data[i]["wanna stay again"] == "5") {
        stay_again_2017_august[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

});
