var eat_cost_march = [0, 0, 0, 0, 0, 0];      //index番号順に、無し、1000円以下、1001円〜2000円以下、2001円〜3000円以下、3001円〜5000円以下、5001円以上


$(function(){
  $.ajax({url: 'json/data_march.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["eat costs"] == "0"){
        eat_cost_march[0]++;
      }
      if (data[i]["eat costs"] == "1") {
        eat_cost_march[1]++;
      }
      if (data[i]["eat costs"] == "2") {
        eat_cost_march[2]++;
      }
      if (data[i]["eat costs"] == "3") {
        eat_cost_march[3]++;
      }
      if (data[i]["eat costs"] == "4") {
        eat_cost_march[4]++;
      }
      if (data[i]["eat costs"] == "5") {
        eat_cost_march[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----3月----");
  for(var i = 0; i < eat_cost_march.length; i++){
    console.log(eat_cost_march[i]);
  }


});
