//配列の宣言
var position_feb = new Array(37 + 1);
for(let y = 0; y < 37 + 1; y++) {
  position_feb[y] = new Array(37 + 1).fill(0);
}

$(function(){


  $.ajax({url: 'json/data_move_feb.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      var positions_feb = [];

      if(!(data[i]["first"] == "")){
        positions_feb.push(parseInt(data[i]["first"]));
      }

      if(!(data[i]["second"] == "")){
        positions_feb.push(parseInt(data[i]["second"]));
      }

      if(!(data[i]["third"] == null)){
        positions_feb.push(parseInt(data[i]["third"]));
      }


      if(!(data[i]["fourth"] == null)){
        positions_feb.push(parseInt(data[i]["fourth"]));
      }


      if(!(data[i]["fifth"] == null)){
        positions_feb.push(parseInt(data[i]["fifth"]));
      }


      if(!(data[i]["sixth"] == null)){
        positions_feb.push(parseInt(data[i]["sixth"]));
      }


      if(!(data[i]["seventh"] == null)){
        positions_feb.push(parseInt(data[i]["seventh"]));
      }

      if(!(data[i]["eighth"] == null)){
        positions_feb.push(parseInt(data[i]["eighth"]));
      }


      if(!(data[i]["ninth"] == null)){
        positions_feb.push(parseInt(data[i]["ninth"]));
      }


      if(!(data[i]["tenth"] == null)){
        positions_feb.push(parseInt(data[i]["tenth"]));
      }


      if(!(data[i]["eleventh"] == null)){
        positions_feb.push(parseInt(data[i]["eleventh"]));
      }


      if(!(data[i]["twelveth"] == null)){
        positions_feb.push(parseInt(data[i]["twelfth"]));
      }


      if(!(data[i]["thirteenth"] == null)){
        positions_feb.push(parseInt(data[i]["thirteenth"]));
      }


      if(!(data[i]["forteenth"] == null)){
        positions_feb.push(parseInt(data[i]["fourteenth"]));
      }


      if(!(data[i]["fifteenth"] == null)){
        positions_feb.push(parseInt(data[i]["fourteenth"]));
      }


      if(!(data[i]["sixteenth"] == null)){
        positions_feb.push(parseInt(data[i]["fourteenth"]));
      }


      if(!(data[i]["seventeenth"] == null)){
        positions_feb.push(parseInt(data[i]["seventeenth"]));
      }


      if(!(data[i]["eighteenth"] == null)){
        positions_feb.push(parseInt(data[i]["eighteenth"]));
      }


      if(!(data[i]["nineteeth"] == null)){
        positions_feb.push(parseInt(data[i]["nineteenth"]));
      }

      for(var from = 0; from < positions_feb.length; from++){
        for(var to = from + 1; to < positions_feb.length - 1; to++){

          if(isNaN(positions_feb[from])) continue;
          if(isNaN(positions_feb[to])) continue;
          if(to == from) continue;

          x = positions_feb[from];
          y = positions_feb[to];

          position_feb[x][y] = position_feb[x][y] + 1;

          // position[positions_feb[from]][positions_feb[to]]++;
        }
      }
    }


  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  //データ検証
  // for (var i = 0; i < position_feb.length; i++) {
  //   for (var j = 0; j < position_feb[i].length; j++) {
  //     console.log(position_feb[i][j]);
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

  for(var i = 1; i < position_feb.length; i++){
    from_new_number[i - 1] = position_feb[i][order_position_value];
  }

  for(var i = 1; i < position_feb.length; i++){
    to_new_number[i - 1] = position_feb[order_position_value][i];
  }

  for(var i = 0; i < position_feb.length - 1; i++){
    for(var j = position_feb.length - 1; i < j; j--){
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

  for(var i = 0; i < position_feb.length - 1; i++){
    for(var j = position_feb.length - 1; i < j; j--){
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

  for(var i = 1; i < position_feb.length; i++){
    $('#' + i + "-1").prev('td').text(from_new_position[i -  1]);
    $('#' + i + "-1").text(from_new_number[i - 1] + '人');
    $('#' + i + "-2").prev('td').text(to_new_position[i-1]);
    $('#' + i + "-2").text(to_new_number[i - 1] + '人');
  }

  $('#central-position').text(order_text);
  $('#month').text(order_month_value);

  console.log(order_month_value);
  console.log(order_position_value);


});
