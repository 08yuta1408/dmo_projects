var traffic_in_toyama_2017_august = [0, 0, 0, 0, 0, 0, 0];      //index番号順に、自家用車、鉄道、高速・路線バス、レンタカー、貸切バス、タクシー、その他
var max_string = 7;
var traffic_string_2017_august = "";
var traffic_array_2017_august = [];


$(function(){
  $.ajax({url: 'json/2017/data_august.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      traffic_string_2017_august = data[i]["trans in toyama"];
      traffic_array_2017_august = [];
      // console.log(traffic_string_2017_august);

      //文字に分割
      for (var j = 0; j < traffic_string_2017_august.length; j++) {
        traffic_array_2017_august[j] = parseInt(traffic_string_2017_august.charAt(j));
      }

      //配列の長さを調整する
      var array_length = traffic_array_2017_august.length;
      if(traffic_string_2017_august.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          traffic_array_2017_august.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < traffic_array_2017_august.length; k++) {
        if(traffic_array_2017_august[k] == 1){
          traffic_in_toyama_2017_august[k]++;
        }

      }

      // console.log(traffic_array_2017_august);
      // console.log(traffic_in_toyama_2017_august);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });
});
