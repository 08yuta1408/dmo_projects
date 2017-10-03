//配列の宣言
var position_feb = new Array(37 + 1);
for(let y = 0; y < 37 + 1; y++) {
  position_feb[y] = new Array(37 + 1).fill(0);
}

$(function(){


  $.ajax({url: 'json/move_2017/data_move_feb.json', dataType: 'json', async: false}).done(function(data){

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

});
