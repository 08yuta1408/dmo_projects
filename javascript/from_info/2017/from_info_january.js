var from_info_2017_january = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、富山県のホームページ(富山観光ナビなど)、富山県のパンフレット(観光季刊誌「ねまるちゃ」など)、旅行会社のパンフレット、旅行ガイドブック、旅行会社のウェブサイト、ネット専門の旅行予約サイト、宿泊施設のウェブサイト、SNS（Facebook、Twitter 等）、知人の口コミ、テレビ・ラジオ（映画、ドラマ等も含む）、その他

var max_string = 11;
var from_info_string_2017_january = "";
var from_info_array_2017_january = [];


$(function(){
  $.ajax({url: 'json/2017/data_january.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      from_info_string_2017_january = data[i]["where from info"];
      from_info_array_2017_january = [];
      // console.log(from_info_string_2017_january);

      //文字に分割
      for (var j = 0; j < from_info_string_2017_january.length; j++) {
        from_info_array_2017_january[j] = parseInt(from_info_string_2017_january.charAt(j));
      }

      //配列の長さを調整する
      var array_length = from_info_array_2017_january.length;
      if(from_info_string_2017_january.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          from_info_array_2017_january.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < from_info_array_2017_january.length; k++) {
        if(from_info_array_2017_january[k] == 1){
          from_info_2017_january[k]++;
        }

      }

      // console.log(from_info_array_2017_january);
      // console.log(from_info_2017_january);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  // console.log("----2月----");
  // for(var i = 0; i < from_info_2017_january.length; i++){
  //   console.log(from_info_2017_january[i]);
  // }

});
