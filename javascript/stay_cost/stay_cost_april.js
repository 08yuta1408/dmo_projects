var stay_cost_april = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、無し、10000円以下、10001円〜15000円以下、15001円〜20000円以下、20001円〜25000円以下、25001円〜30000円以下、30001円〜35000円以下、35001円〜40000円以下、40000円以上


$(function(){
  $.ajax({url: 'json/data_april.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["stay costs"] == "0"){
        stay_cost_april[0]++;
      }
      if (data[i]["stay costs"] == "1") {
        stay_cost_april[1]++;
      }
      if (data[i]["stay costs"] == "6") {
        stay_cost_april[2]++;
      }
      if (data[i]["stay costs"] == "7") {
        stay_cost_april[3]++;
      }
      if (data[i]["stay costs"] == "8") {
        stay_cost_april[4]++;
      }
      if (data[i]["stay costs"] == "9") {
        stay_cost_april[5]++;
      }
      if (data[i]["stay costs"] == "10") {
        stay_cost_april[6]++;
      }
      if (data[i]["stay costs"] == "11") {
        stay_cost_april[7]++;
      }
      if (data[i]["stay costs"] == "5") {
        stay_cost_april[8]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----4月----");
  for(var i = 0; i < stay_cost_april.length; i++){
    console.log(stay_cost_april[i]);
  }


});
