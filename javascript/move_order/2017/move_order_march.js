//配列の宣言
var position_march = new Array(37 + 1);
for(let y = 0; y < 37 + 1; y++) {
  position_march[y] = new Array(37 + 1).fill(0);
}

$(function(){

  var x;
  var y;

  $.ajax({url: 'json/move_2017/data_move_march.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      var positions_march = [];

      if(!(data[i]["first"] == "")){
        positions_march.push(parseInt(data[i]["first"]));
      }

      if(!(data[i]["second"] == "")){
        positions_march.push(parseInt(data[i]["second"]));
      }

      if(!(data[i]["third"] == null)){
        positions_march.push(parseInt(data[i]["third"]));
      }


      if(!(data[i]["fourth"] == null)){
        positions_march.push(parseInt(data[i]["fourth"]));
      }


      if(!(data[i]["fifth"] == null)){
        positions_march.push(parseInt(data[i]["fifth"]));
      }


      if(!(data[i]["sixth"] == null)){
        positions_march.push(parseInt(data[i]["sixth"]));
      }


      if(!(data[i]["seventh"] == null)){
        positions_march.push(parseInt(data[i]["seventh"]));
      }

      if(!(data[i]["eighth"] == null)){
        positions_march.push(parseInt(data[i]["eighth"]));
      }


      if(!(data[i]["ninth"] == null)){
        positions_march.push(parseInt(data[i]["ninth"]));
      }


      if(!(data[i]["tenth"] == null)){
        positions_march.push(parseInt(data[i]["tenth"]));
      }


      if(!(data[i]["eleventh"] == null)){
        positions_march.push(parseInt(data[i]["eleventh"]));
      }


      if(!(data[i]["twelveth"] == null)){
        positions_march.push(parseInt(data[i]["twelfth"]));
      }


      if(!(data[i]["thirteenth"] == null)){
        positions_march.push(parseInt(data[i]["thirteenth"]));
      }


      if(!(data[i]["forteenth"] == null)){
        positions_march.push(parseInt(data[i]["fourteenth"]));
      }


      if(!(data[i]["fifteenth"] == null)){
        positions_march.push(parseInt(data[i]["fourteenth"]));
      }


      if(!(data[i]["sixteenth"] == null)){
        positions_march.push(parseInt(data[i]["fourteenth"]));
      }


      if(!(data[i]["seventeenth"] == null)){
        positions_march.push(parseInt(data[i]["seventeenth"]));
      }


      if(!(data[i]["eighteenth"] == null)){
        positions_march.push(parseInt(data[i]["eighteenth"]));
      }


      if(!(data[i]["nineteeth"] == null)){
        positions_march.push(parseInt(data[i]["nineteenth"]));
      }

      for(var from = 0; from < position_march.length; from++){
        for(var to = from + 1; to < position_march.length - 1; to++){

          if(isNaN(positions_march[from])) continue;
          if(isNaN(positions_march[to])) continue;
          if(to == from) continue;

          x = positions_march[from];
          y = positions_march[to];

          position_march[x][y] = position_march[x][y] + 1;

          // position[position_march[from]][position_march[to]]++;
        }
      }
    }


  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  //データ検証
  // for (var i = 0; i < position_march.length; i++) {
  //   for (var j = 0; j < position_march[i].length; j++) {
  //     console.log(position_march[i][j]);
  //   }
  // }


});
