var traffic_to_toyama_2016_october = [0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、飛行機、新幹線、自家用車、JR在来線、高速・路線バス、レンタカー、貸切バス、その他
var max_string = 8;
var traffic_string_2016_october = "";
var traffic_array_2016_october = [];


$(function(){
  $.ajax({url: 'json/2016/data_october.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      traffic_string_2016_october = data[i]["trans home to toyama"];
      traffic_array_2016_october = [];
      // console.log(traffic_string_2016_october);

      //文字に分割
      for (var j = 0; j < traffic_string_2016_october.length; j++) {
        traffic_array_2016_october[j] = parseInt(traffic_string_2016_october.charAt(j));
      }

      //配列の長さを調整する
      var array_length = traffic_array_2016_october.length;
      if(traffic_string_2016_october.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          traffic_array_2016_october.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < traffic_array_2016_october.length; k++) {
        if(traffic_array_2016_october[k] == 1){
          traffic_to_toyama_2016_october[k]++;
        }

      }

      // console.log(traffic_array_2016_october);
      // console.log(traffic_to_toyama_2016_october);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

});
