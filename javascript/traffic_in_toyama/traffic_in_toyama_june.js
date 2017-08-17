var traffic_in_toyama_june = [0, 0, 0, 0, 0, 0, 0];      //index番号順に、自家用車、鉄道、高速・路線バス、レンタカー、貸切バス、タクシー、その他
var max_string = 7;
var traffic_string_june = "";
var traffic_array_june = [];


$(function(){
  $.ajax({url: 'json/data_june.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      traffic_string_june = data[i]["trans in toyama"];
      traffic_array_june = [];
      // console.log(traffic_string_june);

      //文字に分割
      for (var j = 0; j < traffic_string_june.length; j++) {
        traffic_array_june[j] = parseInt(traffic_string_june.charAt(j));
      }

      //配列の長さを調整する
      var array_length = traffic_array_june.length;
      if(traffic_string_june.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          traffic_array_june.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < traffic_array_june.length; k++) {
        if(traffic_array_june[k] == 1){
          traffic_in_toyama_june[k]++;
        }

      }

      // console.log(traffic_array_june);
      // console.log(traffic_in_toyama_june);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  console.log("----6月----");
  for(var i = 0; i < traffic_in_toyama_june.length; i++){
    console.log(traffic_in_toyama_june[i]);
  }

});
