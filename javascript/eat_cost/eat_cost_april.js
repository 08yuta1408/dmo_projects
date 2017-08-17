var eat_cost_april = [0, 0, 0, 0, 0, 0];      //index番号順に、無し、1000円以下、1001円〜2000円以下、2001円〜3000円以下、3001円〜5000円以下、5001円以上


$(function(){
  $.ajax({url: 'json/data_april.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["eat costs"] == "0"){
        eat_cost_april[0]++;
      }
      if (data[i]["eat costs"] == "1") {
        eat_cost_april[1]++;
      }
      if (data[i]["eat costs"] == "2") {
        eat_cost_april[2]++;
      }
      if (data[i]["eat costs"] == "3") {
        eat_cost_april[3]++;
      }
      if (data[i]["eat costs"] == "4") {
        eat_cost_april[4]++;
      }
      if (data[i]["eat costs"] == "5") {
        eat_cost_april[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----4月----");
  for(var i = 0; i < eat_cost_april.length; i++){
    console.log(eat_cost_april[i]);
  }


});
