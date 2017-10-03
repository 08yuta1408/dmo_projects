var traffic_in_toyama_feb = [0, 0, 0, 0, 0, 0, 0];      //index番号順に、自家用車、鉄道、高速・路線バス、レンタカー、貸切バス、タクシー、その他
var max_string = 7;
var traffic_string_feb = "";
var traffic_array_feb = [];


$(function(){
  $.ajax({url: 'json/2017/data_february.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      traffic_string_feb = data[i]["trans in toyama"];
      traffic_array_feb = [];
      // console.log(traffic_string_feb);

      //文字に分割
      for (var j = 0; j < traffic_string_feb.length; j++) {
        traffic_array_feb[j] = parseInt(traffic_string_feb.charAt(j));
      }

      //配列の長さを調整する
      var array_length = traffic_array_feb.length;
      if(traffic_string_feb.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          traffic_array_feb.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < traffic_array_feb.length; k++) {
        if(traffic_array_feb[k] == 1){
          traffic_in_toyama_feb[k]++;
        }

      }

      // console.log(traffic_array_feb);
      // console.log(traffic_in_toyama_feb);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----4月----");
  for(var i = 0; i < traffic_in_toyama_feb.length; i++){
    console.log(traffic_in_toyama_feb[i]);
  }

});
