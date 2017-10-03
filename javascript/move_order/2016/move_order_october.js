//配列の初期化

var position_2016_october = new Array(37 + 1);
for(let y = 0; y < 37 + 1; y++) {
  position_2016_october[y] = new Array(37 + 1).fill(0);
}

$(function(){
  $.ajax({url: 'json/move_2016/data_move_october.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      var positions_2016_october = [];

      if(!(data[i]["1"] == "")){
        positions_2016_october.push(parseInt(data[i]["1"]));
      }

      if(!(data[i]["2"] == "")){
          positions_2016_october.push(parseInt(data[i]["2"]));
      }

      if(!(data[i]["3"] == "")){
          positions_2016_october.push(parseInt(data[i]["3"]));
      }

      if(!(data[i]["4"] == "")){
          positions_2016_october.push(parseInt(data[i]["4"]));
      }

      if(!(data[i]["5"] == "")){
          positions_2016_october.push(parseInt(data[i]["5"]));
      }

      if(!(data[i]["6"] == "")){
          positions_2016_october.push(parseInt(data[i]["6"]));
      }

      if(!(data[i]["7"] == "")){
          positions_2016_october.push(parseInt(data[i]["7"]));
      }

      if(!(data[i]["8"] == "")){
          positions_2016_october.push(parseInt(data[i]["8"]));
      }

      if(!(data[i]["9"] == "")){
          positions_2016_october.push(parseInt(data[i]["9"]));
      }

      if(!(data[i]["10"] == "")){
          positions_2016_october.push(parseInt(data[i]["10"]));
      }

      if(!(data[i]["11"] == "")){
        positions_2016_october.push(parseInt(data[i]["11"]));
      }

      if(!(data[i]["12"] == "")){
          positions_2016_october.push(parseInt(data[i]["12"]));
      }

      if(!(data[i]["13"] == "")){
          positions_2016_october.push(parseInt(data[i]["13"]));
      }

      if(!(data[i]["14"] == "")){
          positions_2016_october.push(parseInt(data[i]["14"]));
      }

      if(!(data[i]["15"] == "")){
          positions_2016_october.push(parseInt(data[i]["15"]));
      }

      if(!(data[i]["16"] == "")){
          positions_2016_october.push(parseInt(data[i]["16"]));
      }

      if(!(data[i]["17"] == "")){
          positions_2016_october.push(parseInt(data[i]["17"]));
      }

      if(!(data[i]["18"] == "")){
          positions_2016_october.push(parseInt(data[i]["18"]));
      }

      if(!(data[i]["19"] == "")){
          positions_2016_october.push(parseInt(data[i]["19"]));
      }

      if(!(data[i]["20"] == "")){
          positions_2016_october.push(parseInt(data[i]["20"]));
      }

      if(!(data[i]["21"] == "")){
        positions_2016_october.push(parseInt(data[i]["21"]));
      }

      if(!(data[i]["22"] == "")){
          positions_2016_october.push(parseInt(data[i]["22"]));
      }

      if(!(data[i]["23"] == "")){
          positions_2016_october.push(parseInt(data[i]["23"]));
      }

      if(!(data[i]["24"] == "")){
          positions_2016_october.push(parseInt(data[i]["24"]));
      }

      if(!(data[i]["25"] == "")){
          positions_2016_october.push(parseInt(data[i]["25"]));
      }

      if(!(data[i]["26"] == "")){
          positions_2016_october.push(parseInt(data[i]["26"]));
      }

      if(!(data[i]["27"] == "")){
          positions_2016_october.push(parseInt(data[i]["27"]));
      }

      if(!(data[i]["28"] == "")){
          positions_2016_october.push(parseInt(data[i]["28"]));
      }

      if(!(data[i]["29"] == "")){
          positions_2016_october.push(parseInt(data[i]["29"]));
      }

      if(!(data[i]["30"] == "")){
          positions_2016_october.push(parseInt(data[i]["30"]));
      }

      if(!(data[i]["31"] == "")){
        positions_2016_october.push(parseInt(data[i]["31"]));
      }

      if(!(data[i]["32"] == "")){
          positions_2016_october.push(parseInt(data[i]["32"]));
      }

      if(!(data[i]["33"] == "")){
          positions_2016_october.push(parseInt(data[i]["33"]));
      }

      if(!(data[i]["34"] == "")){
          positions_2016_october.push(parseInt(data[i]["34"]));
      }

      if(!(data[i]["35"] == "")){
          positions_2016_october.push(parseInt(data[i]["35"]));
      }

      if(!(data[i]["36"] == "")){
          positions_2016_october.push(parseInt(data[i]["36"]));
      }

      if(!(data[i]["37"] == "")){
          positions_2016_october.push(parseInt(data[i]["37"]));
      }

      if(!(data[i]["38"] == "")){
          positions_2016_october.push(parseInt(data[i]["38"]));
      }




      for(var from = 0; from < positions_2016_october.length; from++){
        for(var to = from + 1; to < positions_2016_october.length - 1; to++){

          if(isNaN(positions_2016_october[from])) continue;
          if(isNaN(positions_2016_october[to])) continue;
          if(to == from) continue;

          x = positions_2016_october[from];
          y = positions_2016_october[to];

          position_2016_october[x][y] = position_2016_october[x][y] + 1;

          // position[positions_2016_october[from]][positions_2016_october[to]]++;
        }
      }

      // console.log(positions_2016_october);
    }


  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  //データ検証
  // for (var i = 0; i < position_2016_october.length; i++) {
  //   for (var j = 0; j < position_2016_october[i].length; j++) {
  //     console.log(position_2016_october[i][j]);
  //   }
  // }

  var order_month_value = parseInt($('#order_month').val());
  var order_position_value = parseInt($('#order_position').val());
  var order_text = $('#order_position option:selected').text();

  var from_new_position = ["宇奈月温泉","氷見漁港場外市場『ひみ番屋街』","黒部峡谷鉄道","世界遺産 相倉合掌造り集落","立山黒部アルペンルート","国宝 高岡山瑞龍寺","高岡大仏","海王丸パーク","海の駅 蜃気楼","おわら資料館","ほたるいかミュージアム","富岩運河環水公園","富山城","魚津水族館","雨晴海岸","称名滝","ますのすし本舗 源 ますのすしミュージアム","庄川温泉郷","魚津埋没林博物館","いなみ木彫りの里 創遊館","大牧温泉","株式会社 池田屋安兵衛商店","魚の駅「生地」","新湊きっときと市場","瑞泉寺","YKKセンターパーク","富山県 [立山博物館]","チューリップ四季彩館","城端曳山会館","廣貫堂資料館","三井アウトレットパーク北陸小矢部","富山市ガラス美術館","新潟県","岐阜県","石川県","長野県","福井県"];
  var from_new_number = new Array(38);

  var to_new_position = ["宇奈月温泉","氷見漁港場外市場『ひみ番屋街』","黒部峡谷鉄道","世界遺産 相倉合掌造り集落","立山黒部アルペンルート","国宝 高岡山瑞龍寺","高岡大仏","海王丸パーク","海の駅 蜃気楼","おわら資料館","ほたるいかミュージアム","富岩運河環水公園","富山城","魚津水族館","雨晴海岸","称名滝","ますのすし本舗 源 ますのすしミュージアム","庄川温泉郷","魚津埋没林博物館","いなみ木彫りの里 創遊館","大牧温泉","株式会社 池田屋安兵衛商店","魚の駅「生地」","新湊きっときと市場","瑞泉寺","YKKセンターパーク","富山県 [立山博物館]","チューリップ四季彩館","城端曳山会館","廣貫堂資料館","三井アウトレットパーク北陸小矢部","富山市ガラス美術館","新潟県","岐阜県","石川県","長野県","福井県"];
  var to_new_number = new Array(38);

  for(var i = 0; i < 38; i++){
    from_new_number[i] = 0;
    to_new_number[i] = 0;
  }

  for(var i = 1; i < position_2016_october.length; i++){
    from_new_number[i - 1] = position_2016_october[i][order_position_value];
  }

  for(var i = 1; i < position_2016_october.length; i++){
    to_new_number[i - 1] = position_2016_october[order_position_value][i];
  }

  for(var i = 0; i < position_2016_october.length - 1; i++){
    for(var j = position_2016_october.length - 1; i < j; j--){
      if(from_new_number[j] > from_new_number[j - 1]){
        var temp;

        temp = from_new_number[j - 1];
        from_new_number[j - 1] = from_new_number[j];
        from_new_number[j] = temp;

        temp = from_new_position[j - 1];
        from_new_position[j - 1] = from_new_position[j];
        from_new_position[j] = temp;
      }
    }
  }

  for(var i = 0; i < position_2016_october.length - 1; i++){
    for(var j = position_2016_october.length - 1; i < j; j--){
      if(to_new_number[j] > to_new_number[j - 1]){
        var temp;

        temp = to_new_number[j - 1];
        to_new_number[j - 1] = to_new_number[j];
        to_new_number[j] = temp;

        temp = to_new_position[j - 1];
        to_new_position[j - 1] = to_new_position[j];
        to_new_position[j] = temp;
      }
    }
  }

  for(var i = 1; i < position_2016_october.length; i++){
    $('#' + i + "-1").prev('td').text(from_new_position[i -  1]);
    $('#' + i + "-1").text(from_new_number[i - 1] + '人');
    $('#' + i + "-2").prev('td').text(to_new_position[i-1]);
    $('#' + i + "-2").text(to_new_number[i - 1] + '人');
  }

  $('#central-position').text(order_text);
  $('.caption').text("2016/10月の観光者の移動動態");

});
