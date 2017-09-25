var from_info_april = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、富山県のホームページ(富山観光ナビなど)、富山県のパンフレット(観光季刊誌「ねまるちゃ」など)、旅行会社のパンフレット、旅行ガイドブック、旅行会社のウェブサイト、ネット専門の旅行予約サイト、宿泊施設のウェブサイト、SNS（Facebook、Twitter 等）、知人の口コミ、テレビ・ラジオ（映画、ドラマ等も含む）、その他
var max_string = 11;
var from_info_string_april = "";
var from_info_array_april = [];


$(function(){
  $.ajax({url: 'json/2017/data_april.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      from_info_string_april = data[i]["where from info"];
      from_info_array_april = [];
      // console.log(from_info_string_april);

      //文字に分割
      for (var j = 0; j < from_info_string_april.length; j++) {
        from_info_array_april[j] = parseInt(from_info_string_april.charAt(j));
      }

      //配列の長さを調整する
      var array_length = from_info_array_april.length;
      if(from_info_string_april.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          from_info_array_april.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < from_info_array_april.length; k++) {
        if(from_info_array_april[k] == 1){
          from_info_april[k]++;
        }

      }

      // console.log(from_info_array_april);
      // console.log(from_info_april);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  // console.log("----4月----");
  // for(var i = 0; i < from_info_april.length; i++){
  //   console.log(from_info_april[i]);
  // }

});
