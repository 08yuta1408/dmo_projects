var traffic_to_toyama_2017_july = [0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、飛行機、新幹線、自家用車、JR在来線、高速・路線バス、レンタカー、貸切バス、その他
var max_string = 8;
var traffic_string_2017_july = "";
var traffic_array_2017_july = [];


$(function(){
  $.ajax({url: 'json/2017/data_july.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      traffic_string_2017_july = data[i]["trans home to toyama"];
      traffic_array_2017_july = [];
      // console.log(traffic_string_2017_july);

      //文字に分割
      for (var j = 0; j < traffic_string_2017_july.length; j++) {
        traffic_array_2017_july[j] = parseInt(traffic_string_2017_july.charAt(j));
      }

      //配列の長さを調整する
      var array_length = traffic_array_2017_july.length;
      if(traffic_string_2017_july.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          traffic_array_2017_july.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < traffic_array_2017_july.length; k++) {
        if(traffic_array_2017_july[k] == 1){
          traffic_to_toyama_2017_july[k]++;
        }

      }

      // console.log(traffic_array_2017_july);
      // console.log(traffic_to_toyama_2017_july);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

});
