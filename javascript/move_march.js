//配列の宣言

$(function(){
  var position2 = new Array(37 + 1);
  for(let y = 0; y < 37 + 1; y++) {
    position2[y] = new Array(37 + 1).fill(0);
  }

  var x;
  var y;

  $.ajax({url: 'json/data_move_march.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      var positions2 = [];

      if(!(data[i]["first"] == "")){
        positions2.push(parseInt(data[i]["first"]));
      }

      if(!(data[i]["second"] == "")){
        positions2.push(parseInt(data[i]["second"]));
      }

      if(!(data[i]["third"] == null)){
        positions2.push(parseInt(data[i]["third"]));
      }


      if(!(data[i]["fourth"] == null)){
        positions2.push(parseInt(data[i]["fourth"]));
      }


      if(!(data[i]["fifth"] == null)){
        positions2.push(parseInt(data[i]["fifth"]));
      }


      if(!(data[i]["sixth"] == null)){
        positions2.push(parseInt(data[i]["sixth"]));
      }


      if(!(data[i]["seventh"] == null)){
        positions2.push(parseInt(data[i]["seventh"]));
      }

      if(!(data[i]["eighth"] == null)){
        positions2.push(parseInt(data[i]["eighth"]));
      }


      if(!(data[i]["ninth"] == null)){
        positions2.push(parseInt(data[i]["ninth"]));
      }


      if(!(data[i]["tenth"] == null)){
        positions2.push(parseInt(data[i]["tenth"]));
      }


      if(!(data[i]["eleventh"] == null)){
        positions2.push(parseInt(data[i]["eleventh"]));
      }


      if(!(data[i]["twelveth"] == null)){
        positions2.push(parseInt(data[i]["twelfth"]));
      }


      if(!(data[i]["thirteenth"] == null)){
        positions2.push(parseInt(data[i]["thirteenth"]));
      }


      if(!(data[i]["forteenth"] == null)){
        positions2.push(parseInt(data[i]["fourteenth"]));
      }


      if(!(data[i]["fifteenth"] == null)){
        positions2.push(parseInt(data[i]["fourteenth"]));
      }


      if(!(data[i]["sixteenth"] == null)){
        positions2.push(parseInt(data[i]["fourteenth"]));
      }


      if(!(data[i]["seventeenth"] == null)){
        positions2.push(parseInt(data[i]["seventeenth"]));
      }


      if(!(data[i]["eighteenth"] == null)){
        positions2.push(parseInt(data[i]["eighteenth"]));
      }


      if(!(data[i]["nineteeth"] == null)){
        positions2.push(parseInt(data[i]["nineteenth"]));
      }

      for(var from = 0; from < positions2.length; from++){
        for(var to = from + 1; to < positions2.length - 1; to++){

          if(isNaN(positions2[from])) continue;
          if(isNaN(positions2[to])) continue;
          // if(to == from) continue;

          x = positions2[from];
          y = positions2[to];

          position2[x][y] = position2[x][y] + 1;

          // position2[positions2[from]][positions2[to]]++;
        }
      }
    }


  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  // console.log(position2[1][4]);
  //
  // console.log(position2[2][1]);

  for(var i = 1; i < position2.length; i++){
    $('#' + i + "-1").text(position2[i][1] + '人');
    $('#' + i + "-2").text(position2[1][i] + '人');
  }

  // $('#central-position2').text(order_text);

  $('#order-btn').click(function(){
    var order_value = $('#order').val();
    var order_text = $('#order option:selected').text();

    // var from_new_position2 = ["宇奈月温泉","氷見漁港場外市場『ひみ番屋街』","黒部峡谷鉄道","世界遺産 相倉合掌造り集落","立山黒部アルペンルート","国宝 高岡山瑞龍寺","高岡大仏","海王丸パーク","海の駅 蜃気楼","おわら資料館","ほたるいかミュージアム","富岩運河環水公園","富山城","魚津水族館","雨晴海岸","称名滝","ますのすし本舗 源 ますのすしミュージアム","庄川温泉郷","魚津埋没林博物館","いなみ木彫りの里 創遊館","大牧温泉","株式会社 池田屋安兵衛商店","魚の駅「生地」","新湊きっときと市場","瑞泉寺","YKKセンターパーク","富山県 [立山博物館]","チューリップ四季彩館","城端曳山会館","廣貫堂資料館","三井アウトレットパーク北陸小矢部","富山市ガラス美術館","新潟県","岐阜県","石川県","長野県","福井県"];
    // var from_new_number2 = new Array(37);
    //
    // var to_new_position2 = ["宇奈月温泉","氷見漁港場外市場『ひみ番屋街』","黒部峡谷鉄道","世界遺産 相倉合掌造り集落","立山黒部アルペンルート","国宝 高岡山瑞龍寺","高岡大仏","海王丸パーク","海の駅 蜃気楼","おわら資料館","ほたるいかミュージアム","富岩運河環水公園","富山城","魚津水族館","雨晴海岸","称名滝","ますのすし本舗 源 ますのすしミュージアム","庄川温泉郷","魚津埋没林博物館","いなみ木彫りの里 創遊館","大牧温泉","株式会社 池田屋安兵衛商店","魚の駅「生地」","新湊きっときと市場","瑞泉寺","YKKセンターパーク","富山県 [立山博物館]","チューリップ四季彩館","城端曳山会館","廣貫堂資料館","三井アウトレットパーク北陸小矢部","富山市ガラス美術館","新潟県","岐阜県","石川県","長野県","福井県"];
    // var to_new_number2 = new Array(37);
    //
    // for(var i = 0; i < 37; i++){
    //   from_new_number2[i] = 0;
    //   to_new_number2[i] = 0;
    // }
    //
    // var x;
    //
    // for(var i = 1; i < position2.length; i++){
    //   from_new_number2[i - 1] = position2[i][order_value];
    //
    //   console.log(from_new_position2[i - 1]);
    //   console.log(from_new_number2[i - 1]);
    // }
    //
    // console.log("---------------------");
    //
    // for(var i = 1; i < position2.length; i++){
    //   to_new_number2[i - 1] = position2[order_value][i];
    //
    //   console.log(to_new_position2[i - 1]);
    //   console.log(to_new_number2[i - 1]);
    // }
    //
    //
    // for(var i = 0; i < position2.length - 1; i++){
    //   for(var j = position2.length - 1; i < j; j--){
    //     if(from_new_number2[j] > from_new_number2[j - 1]){
    //       var temp;
    //
    //       temp = from_new_number2[j - 1];
    //       from_new_number2[j - 1] = from_new_number2[j];
    //       from_new_number2[j] = temp;
    //
    //       temp = from_new_position2[j - 1];
    //       from_new_position2[j - 1] = from_new_position2[j];
    //       from_new_position2[j] = temp;
    //     }
    //   }
    // }
    //
    // for(var i = 0; i < position2.length - 1; i++){
    //   for(var j = position2.length - 1; i < j; j--){
    //     if(to_new_number2[j] > to_new_number2[j - 1]){
    //       var temp;
    //
    //       temp = to_new_number2[j - 1];
    //       to_new_number2[j - 1] = to_new_number2[j];
    //       to_new_number2[j] = temp;
    //
    //       temp = to_new_position2[j - 1];
    //       to_new_position2[j - 1] = to_new_position2[j];
    //       to_new_position2[j] = temp;
    //     }
    //   }
    // }

    // for(var i = 0; i < position2.length - 1; i++){
    //   console.log(to_new_position2[i]);
    //   console.log(to_new_number2[i]);
    // }



    // for(var i = 1; i < position2.length; i++){
    //   $('#' + i + "-1").prev('td').text(from_new_position2[i -  1]);
    //   $('#' + i + "-1").text(from_new_number2[i - 1] + '人');
    //   $('#' + i + "-2").prev('td').text(to_new_position2[i-1]);
    //   $('#' + i + "-2").text(to_new_number2[i - 1] + '人');
    // }


      for(var i = 1; i < position2.length; i++){
        $('#' + i + "-1").text(position2[i][order_value] + '人');
        $('#' + i + "-2").text(position2[order_value][i] + '人');
      }

      $('#central-position2').text(order_text);

      // console.log(position2[2][3]);
  });

});
