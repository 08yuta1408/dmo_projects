var other_cost_april = [0, 0, 0, 0, 0, 0];      //index番号順に、無し、1000円以下、1001円〜2000円以下、2001円〜3000円以下、3001円〜5000円以下、5001円以上


$(function(){
  $.ajax({url: 'json/data_april.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["other tourism costs"] == "0"){
        other_cost_april[0]++;
      }
      if (data[i]["other tourism costs"] == "1") {
        other_cost_april[1]++;
      }
      if (data[i]["other tourism costs"] == "2") {
        other_cost_april[2]++;
      }
      if (data[i]["other tourism costs"] == "3") {
        other_cost_april[3]++;
      }
      if (data[i]["other tourism costs"] == "4") {
        other_cost_april[4]++;
      }
      if (data[i]["other tourism costs"] == "5") {
        other_cost_april[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----4月----");
  for(var i = 0; i < other_cost_april.length; i++){
    console.log(other_cost_april[i]);
  }


});
