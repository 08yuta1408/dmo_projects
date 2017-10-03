var traffic_to_toyama_may = [0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、飛行機、新幹線、自家用車、JR在来線、高速・路線バス、レンタカー、貸切バス、その他
var max_string = 8;
var traffic_string_may = "";
var traffic_array_may = [];


$(function(){
  $.ajax({url: 'json/2017/data_may.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      traffic_string_may = data[i]["trans home to toyama"];
      traffic_array_may = [];
      // console.log(traffic_string_may);

      //文字に分割
      for (var j = 0; j < traffic_string_may.length; j++) {
        traffic_array_may[j] = parseInt(traffic_string_may.charAt(j));
      }

      //配列の長さを調整する
      var array_length = traffic_array_may.length;
      if(traffic_string_may.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          traffic_array_may.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < traffic_array_may.length; k++) {
        if(traffic_array_may[k] == 1){
          traffic_to_toyama_may[k]++;
        }

      }

      // console.log(traffic_array_may);
      // console.log(traffic_to_toyama_may);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----5月----");
  for(var i = 0; i < traffic_to_toyama_may.length; i++){
    console.log(traffic_to_toyama_may[i]);
  }

});
