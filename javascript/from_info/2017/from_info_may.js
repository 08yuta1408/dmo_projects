var from_info_may = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、富山県のホームページ(富山観光ナビなど)、富山県のパンフレット(観光季刊誌「ねまるちゃ」など)、旅行会社のパンフレット、旅行ガイドブック、旅行会社のウェブサイト、ネット専門の旅行予約サイト、宿泊施設のウェブサイト、SNS（Facebook、Twitter 等）、知人の口コミ、テレビ・ラジオ（映画、ドラマ等も含む）、その他
var max_string = 11;
var from_info_string_may = "";
var from_info_array_may = [];


$(function(){
  $.ajax({url: 'json/2017/data_may.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      from_info_string_may = data[i]["where from info"];
      from_info_array_may = [];
      // console.log(from_info_string_may);

      //文字に分割
      for (var j = 0; j < from_info_string_may.length; j++) {
        from_info_array_may[j] = parseInt(from_info_string_may.charAt(j));
      }

      //配列の長さを調整する
      var array_length = from_info_array_may.length;
      if(from_info_string_may.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          from_info_array_may.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < from_info_array_may.length; k++) {
        if(from_info_array_may[k] == 1){
          from_info_may[k]++;
        }

      }

      // console.log(from_info_array_may);
      // console.log(from_info_may);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  // console.log("----5月----");
  // for(var i = 0; i < from_info_may.length; i++){
  //   console.log(from_info_may[i]);
  // }

});
