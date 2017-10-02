var stay_cost_2017_august = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、無し、10000円以下、10001円〜15000円以下、15001円〜20000円以下、20001円〜25000円以下、25001円〜30000円以下、30001円〜35000円以下、35001円〜40000円以下、40000円以上


$(function(){
  $.ajax({url: 'json/2017/data_august.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["stay costs"] == "0"){
        stay_cost_2017_august[0]++;
      }
      if (data[i]["stay costs"] == "1") {
        stay_cost_2017_august[1]++;
      }
      if (data[i]["stay costs"] == "6") {
        stay_cost_2017_august[2]++;
      }
      if (data[i]["stay costs"] == "7") {
        stay_cost_2017_august[3]++;
      }
      if (data[i]["stay costs"] == "8") {
        stay_cost_2017_august[4]++;
      }
      if (data[i]["stay costs"] == "9") {
        stay_cost_2017_august[5]++;
      }
      if (data[i]["stay costs"] == "10") {
        stay_cost_2017_august[6]++;
      }
      if (data[i]["stay costs"] == "11") {
        stay_cost_2017_august[7]++;
      }
      if (data[i]["stay costs"] == "5") {
        stay_cost_2017_august[8]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

});
