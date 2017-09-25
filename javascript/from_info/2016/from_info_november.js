var from_info_2016_november = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、富山県のホームページ(富山観光ナビなど)、富山県のパンフレット(観光季刊誌「ねまるちゃ」など)、旅行会社のパンフレット、旅行ガイドブック、旅行会社のウェブサイト、ネット専門の旅行予約サイト、宿泊施設のウェブサイト、SNS（Facebook、Twitter 等）、知人の口コミ、テレビ・ラジオ（映画、ドラマ等も含む）、その他

var max_string = 11;
var from_info_string_2016_november = "";
var from_info_array_2016_november = [];


$(function(){
  $.ajax({url: 'json/2016/data_november.json', dataType: 'json', async: false}).done(function(data){
    for(var i = 0; i < data.length; i++){
      //初期化
      from_info_string_2016_november = data[i]["where from info"];
      from_info_array_2016_november = [];
      // console.log(from_info_string_2016_november);

      //文字に分割
      for (var j = 0; j < from_info_string_2016_november.length; j++) {
        from_info_array_2016_november[j] = parseInt(from_info_string_2016_november.charAt(j));
      }

      //配列の長さを調整する
      var array_length = from_info_array_2016_november.length;
      if(from_info_string_2016_november.length != max_string){
        for (var k = 0; k < max_string - array_length; k++) {
          from_info_array_2016_november.unshift(0);
        }
      }

      //集計
      for (var k = 0; k < from_info_array_2016_november.length; k++) {
        if(from_info_array_2016_november[k] == 1){
          from_info_2016_november[k]++;
        }

      }

      // console.log(from_info_array_2016_november);
      // console.log(from_info_2016_november);
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  });

  // console.log("----2月----");
  // for(var i = 0; i < from_info_2016_november.length; i++){
  //   console.log(from_info_2016_november[i]);
  // }

});
