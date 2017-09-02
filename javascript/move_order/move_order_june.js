//配列の初期化

var position_june = new Array(37 + 1);
for(let y = 0; y < 37 + 1; y++) {
  position_june[y] = new Array(37 + 1).fill(0);
}

$(function(){
  $.ajax({url: 'json/data_move_june.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      var positions_june = [];

      if(!(data[i]["1"] == "")){
        positions_june.push(parseInt(data[i]["1"]));
      }

      if(!(data[i]["2"] == "")){
          positions_june.push(parseInt(data[i]["2"]));
      }

      if(!(data[i]["3"] == "")){
          positions_june.push(parseInt(data[i]["3"]));
      }

      if(!(data[i]["4"] == "")){
          positions_june.push(parseInt(data[i]["4"]));
      }

      if(!(data[i]["5"] == "")){
          positions_june.push(parseInt(data[i]["5"]));
      }

      if(!(data[i]["6"] == "")){
          positions_june.push(parseInt(data[i]["6"]));
      }

      if(!(data[i]["7"] == "")){
          positions_june.push(parseInt(data[i]["7"]));
      }

      if(!(data[i]["8"] == "")){
          positions_june.push(parseInt(data[i]["8"]));
      }

      if(!(data[i]["9"] == "")){
          positions_june.push(parseInt(data[i]["9"]));
      }

      if(!(data[i]["10"] == "")){
          positions_june.push(parseInt(data[i]["10"]));
      }

      if(!(data[i]["11"] == "")){
        positions_june.push(parseInt(data[i]["11"]));
      }

      if(!(data[i]["12"] == "")){
          positions_june.push(parseInt(data[i]["12"]));
      }

      if(!(data[i]["13"] == "")){
          positions_june.push(parseInt(data[i]["13"]));
      }

      if(!(data[i]["14"] == "")){
          positions_june.push(parseInt(data[i]["14"]));
      }

      if(!(data[i]["15"] == "")){
          positions_june.push(parseInt(data[i]["15"]));
      }

      if(!(data[i]["16"] == "")){
          positions_june.push(parseInt(data[i]["16"]));
      }

      if(!(data[i]["17"] == "")){
          positions_june.push(parseInt(data[i]["17"]));
      }

      if(!(data[i]["18"] == "")){
          positions_june.push(parseInt(data[i]["18"]));
      }

      if(!(data[i]["19"] == "")){
          positions_june.push(parseInt(data[i]["19"]));
      }

      if(!(data[i]["20"] == "")){
          positions_june.push(parseInt(data[i]["20"]));
      }

      if(!(data[i]["21"] == "")){
        positions_june.push(parseInt(data[i]["21"]));
      }

      if(!(data[i]["22"] == "")){
          positions_june.push(parseInt(data[i]["22"]));
      }

      if(!(data[i]["23"] == "")){
          positions_june.push(parseInt(data[i]["23"]));
      }

      if(!(data[i]["24"] == "")){
          positions_june.push(parseInt(data[i]["24"]));
      }

      if(!(data[i]["25"] == "")){
          positions_june.push(parseInt(data[i]["25"]));
      }

      if(!(data[i]["26"] == "")){
          positions_june.push(parseInt(data[i]["26"]));
      }

      if(!(data[i]["27"] == "")){
          positions_june.push(parseInt(data[i]["27"]));
      }

      if(!(data[i]["28"] == "")){
          positions_june.push(parseInt(data[i]["28"]));
      }

      if(!(data[i]["29"] == "")){
          positions_june.push(parseInt(data[i]["29"]));
      }

      if(!(data[i]["30"] == "")){
          positions_june.push(parseInt(data[i]["30"]));
      }

      if(!(data[i]["31"] == "")){
        positions_june.push(parseInt(data[i]["31"]));
      }

      if(!(data[i]["32"] == "")){
          positions_june.push(parseInt(data[i]["32"]));
      }

      if(!(data[i]["33"] == "")){
          positions_june.push(parseInt(data[i]["33"]));
      }

      if(!(data[i]["34"] == "")){
          positions_june.push(parseInt(data[i]["34"]));
      }

      if(!(data[i]["35"] == "")){
          positions_june.push(parseInt(data[i]["35"]));
      }

      if(!(data[i]["36"] == "")){
          positions_june.push(parseInt(data[i]["36"]));
      }

      if(!(data[i]["37"] == "")){
          positions_june.push(parseInt(data[i]["37"]));
      }

      if(!(data[i]["38"] == "")){
          positions_june.push(parseInt(data[i]["38"]));
      }




      for(var from = 0; from < positions_june.length; from++){
        for(var to = from + 1; to < positions_june.length - 1; to++){

          if(isNaN(positions_june[from])) continue;
          if(isNaN(positions_june[to])) continue;
          if(to == from) continue;

          x = positions_june[from];
          y = positions_june[to];

          position_june[x][y] = position_june[x][y] + 1;

          // position[positions_june[from]][positions_june[to]]++;
        }
      }

      // console.log(positions_june);
    }


  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  //データ検証
  // for (var i = 0; i < position_june.length; i++) {
  //   for (var j = 0; j < position_june[i].length; j++) {
  //     console.log(position_june[i][j]);
  //   }
  // }

});
