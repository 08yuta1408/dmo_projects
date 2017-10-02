var other_cost_may = [0, 0, 0, 0, 0, 0];      //index番号順に、無し、1000円以下、1001円〜2000円以下、2001円〜3000円以下、3001円〜5000円以下、5001円以上


$(function(){
  $.ajax({url: 'json/2017/data_may.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["other tourism costs"] == "0"){
        other_cost_may[0]++;
      }
      if (data[i]["other tourism costs"] == "1") {
        other_cost_may[1]++;
      }
      if (data[i]["other tourism costs"] == "2") {
        other_cost_may[2]++;
      }
      if (data[i]["other tourism costs"] == "3") {
        other_cost_may[3]++;
      }
      if (data[i]["other tourism costs"] == "4") {
        other_cost_may[4]++;
      }
      if (data[i]["other tourism costs"] == "5") {
        other_cost_may[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----5月----");
  for(var i = 0; i < other_cost_may.length; i++){
    console.log(other_cost_may[i]);
  }


});
