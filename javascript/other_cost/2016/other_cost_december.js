var other_cost_2016_december = [0, 0, 0, 0, 0, 0];      //index番号順に、無し、1000円以下、1001円〜2000円以下、2001円〜3000円以下、3001円〜5000円以下、5001円以上


$(function(){
  $.ajax({url: 'json/2016/data_december.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["other tourism costs"] == "0"){
        other_cost_2016_december[0]++;
      }
      if (data[i]["other tourism costs"] == "1") {
        other_cost_2016_december[1]++;
      }
      if (data[i]["other tourism costs"] == "2") {
        other_cost_2016_december[2]++;
      }
      if (data[i]["other tourism costs"] == "3") {
        other_cost_2016_december[3]++;
      }
      if (data[i]["other tourism costs"] == "4") {
        other_cost_2016_december[4]++;
      }
      if (data[i]["other tourism costs"] == "5") {
        other_cost_2016_december[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });


});
