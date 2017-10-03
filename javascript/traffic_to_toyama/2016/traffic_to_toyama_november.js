var traffic_to_toyama_2016_november = [0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、飛行機、新幹線、自家用車、JR在来線、高速・路線バス、レンタカー、貸切バス、その他
var max_string = 8;
var traffic_string_2016_november = "";
var traffic_array_2016_november = [];


$(function(){
  $.ajax({url: 'json/2016/data_november.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      traffic_string_2016_november = data[i]["trans home to toyama"];
      traffic_array_2016_november = [];
      // console.log(traffic_string_2016_november);

      //文字に分割
      for (var j = 0; j < traffic_string_2016_november.length; j++) {
        traffic_array_2016_november[j] = parseInt(traffic_string_2016_november.charAt(j));
      }

      //配列の長さを調整する
      var array_length = traffic_array_2016_november.length;
      if(traffic_string_2016_november.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          traffic_array_2016_november.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < traffic_array_2016_november.length; k++) {
        if(traffic_array_2016_november[k] == 1){
          traffic_to_toyama_2016_november[k]++;
        }

      }

      // console.log(traffic_array_2016_november);
      // console.log(traffic_to_toyama_2016_november);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

});
