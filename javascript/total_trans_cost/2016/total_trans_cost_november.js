var total_trans_cost_2016_november = [0, 0, 0, 0, 0, 0];      //index番号順に、無し、10000円以下、10001円〜20000円以下、20001円〜30000円以下、30001円〜40000円以下、40001円以上


$(function(){
  $.ajax({url: 'json/2016/data_november.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["Pre total trans expenses"] == "0"){
        total_trans_cost_2016_november[0]++;
      }
      if (data[i]["Pre total trans expenses"] == "1") {
        total_trans_cost_2016_november[1]++;
      }
      if (data[i]["Pre total trans expenses"] == "2") {
        total_trans_cost_2016_november[2]++;
      }
      if (data[i]["Pre total trans expenses"] == "3") {
        total_trans_cost_2016_november[3]++;
      }

      if (data[i]["Pre total trans expenses"] == "4") {
        total_trans_cost_2016_november[4]++;
      }
      if (data[i]["Pre total trans expenses"] == "5") {
        total_trans_cost_2016_november[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

});
