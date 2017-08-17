var gift_cost_feb = [0, 0, 0, 0, 0, 0];      //index番号順に、無し、1000円以下、1001円〜2000円以下、2001円〜3000円以下、3001円〜5000円以下、5001円以上


$(function(){
  $.ajax({url: 'json/data_february.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      if(data[i]["gift costs"] == "0"){
        gift_cost_feb[0]++;
      }
      if (data[i]["gift costs"] == "1") {
        gift_cost_feb[1]++;
      }
      if (data[i]["gift costs"] == "2") {
        gift_cost_feb[2]++;
      }
      if (data[i]["gift costs"] == "3") {
        gift_cost_feb[3]++;
      }
      if (data[i]["gift costs"] == "4") {
        gift_cost_feb[4]++;
      }
      if (data[i]["gift costs"] == "5") {
        gift_cost_feb[5]++;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----2月----");
  for(var i = 0; i < gift_cost_feb.length; i++){
    console.log(gift_cost_feb[i]);
  }


});
