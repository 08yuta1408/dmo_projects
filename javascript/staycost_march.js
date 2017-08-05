var stayCost_man2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];     //男：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_woman2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];   //女：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上

var stayCost_10_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //10代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_20_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //20代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_30_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //30代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_40_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //40代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_50_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //50代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_60_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //60代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_70_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //70代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_80_2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //80代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上

$(function(){
  $.ajax({url: 'json/data_march.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      //男性の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["sex"] == '1'){
        stayCost_man2[0] = stayCost_man2[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["sex"] == '1'){
        stayCost_man2[1] = stayCost_man2[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["sex"] == '1'){
        stayCost_man2[2] = stayCost_man2[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["sex"] == '1'){
        stayCost_man2[3] = stayCost_man2[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["sex"] == '1'){
        stayCost_man2[4] = stayCost_man2[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["sex"] == '1'){
        stayCost_man2[5] = stayCost_man2[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["sex"] == '1'){
        stayCost_man2[6] = stayCost_man2[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["sex"] == '1'){
        stayCost_man2[7] = stayCost_man2[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["sex"] == '1'){
        stayCost_man2[8] = stayCost_man2[8] + 1;
      }

      //女性の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["sex"] == '2'){
        stayCost_woman2[0] = stayCost_woman2[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["sex"] == '2'){
        stayCost_woman2[1] = stayCost_woman2[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["sex"] == '2'){
        stayCost_woman2[2] = stayCost_woman2[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["sex"] == '2'){
        stayCost_woman2[3] = stayCost_woman2[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["sex"] == '2'){
        stayCost_woman2[4] = stayCost_woman2[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["sex"] == '2'){
        stayCost_woman2[5] = stayCost_woman2[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["sex"] == '2'){
        stayCost_woman2[6] = stayCost_woman2[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["sex"] == '2'){
        stayCost_woman2[7] = stayCost_woman2[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["sex"] == '2'){
        stayCost_woman2[8] = stayCost_woman2[8] + 1;
      }



      //10代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '1'){
        stayCost_10_2[0] = stayCost_10_2[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '1'){
        stayCost_10_2[1] = stayCost_10_2[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '1'){
        stayCost_10_2[2] = stayCost_10_2[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '1'){
        stayCost_10_2[3] = stayCost_10_2[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '1'){
        stayCost_10_2[4] = stayCost_10_2[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '1'){
        stayCost_10_2[5] = stayCost_10_2[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '1'){
        stayCost_10_2[6] = stayCost_10_2[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '1'){
        stayCost_10_2[7] = stayCost_10_2[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '1'){
        stayCost_10_2[8] = stayCost_10_2[8] + 1;
      }


      //20代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '2'){
        stayCost_20_2[0] = stayCost_20_2[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '2'){
        stayCost_20_2[1] = stayCost_20_2[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '2'){
        stayCost_20_2[2] = stayCost_20_2[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '2'){
        stayCost_20_2[3] = stayCost_20_2[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '2'){
        stayCost_20_2[4] = stayCost_20_2[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '2'){
        stayCost_20_2[5] = stayCost_20_2[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '2'){
        stayCost_20_2[6] = stayCost_20_2[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '2'){
        stayCost_20_2[7] = stayCost_20_2[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '2'){
        stayCost_20_2[8] = stayCost_20_2[8] + 1;
      }

      //30代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '3'){
        stayCost_30_2[0] = stayCost_30_2[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '3'){
        stayCost_30_2[1] = stayCost_30_2[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '3'){
        stayCost_30_2[2] = stayCost_30_2[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '3'){
        stayCost_30_2[3] = stayCost_30_2[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '3'){
        stayCost_30_2[4] = stayCost_30_2[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '3'){
        stayCost_30_2[5] = stayCost_30_2[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '3'){
        stayCost_30_2[6] = stayCost_30_2[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '3'){
        stayCost_30_2[7] = stayCost_30_2[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '3'){
        stayCost_30_2[8] = stayCost_30_2[8] + 1;
      }

      //40代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '4'){
        stayCost_40_2[0] = stayCost_40_2[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '4'){
        stayCost_40_2[1] = stayCost_40_2[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '4'){
        stayCost_40_2[2] = stayCost_40_2[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '4'){
        stayCost_40_2[3] = stayCost_40_2[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '4'){
        stayCost_40_2[4] = stayCost_40_2[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '4'){
        stayCost_40_2[5] = stayCost_40_2[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '4'){
        stayCost_40_2[6] = stayCost_40_2[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '4'){
        stayCost_40_2[7] = stayCost_40_2[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '4'){
        stayCost_40_2[8] = stayCost_40_2[8] + 1;
      }

      //50代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '5'){
        stayCost_50_2[0] = stayCost_50_2[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '5'){
        stayCost_50_2[1] = stayCost_50_2[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '5'){
        stayCost_50_2[2] = stayCost_50_2[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '5'){
        stayCost_50_2[3] = stayCost_50_2[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '5'){
        stayCost_50_2[4] = stayCost_50_2[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '5'){
        stayCost_50_2[5] = stayCost_50_2[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '5'){
        stayCost_50_2[6] = stayCost_50_2[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '5'){
        stayCost_50_2[7] = stayCost_50_2[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '5'){
        stayCost_50_2[8] = stayCost_50_2[8] + 1;
      }

      //60代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '6'){
        stayCost_60_2[0] = stayCost_60_2[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '6'){
        stayCost_60_2[1] = stayCost_60_2[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '6'){
        stayCost_60_2[2] = stayCost_60_2[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '6'){
        stayCost_60_2[3] = stayCost_60_2[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '6'){
        stayCost_60_2[4] = stayCost_60_2[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '6'){
        stayCost_60_2[5] = stayCost_60_2[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '6'){
        stayCost_60_2[6] = stayCost_60_2[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '6'){
        stayCost_60_2[7] = stayCost_60_2[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '6'){
        stayCost_60_2[8] = stayCost_60_2[8] + 1;
      }

      //70代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '7'){
        stayCost_70_2[0] = stayCost_70_2[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '7'){
        stayCost_70_2[1] = stayCost_70_2[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '7'){
        stayCost_70_2[2] = stayCost_70_2[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '7'){
        stayCost_70_2[3] = stayCost_70_2[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '7'){
        stayCost_70_2[4] = stayCost_70_2[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '7'){
        stayCost_70_2[5] = stayCost_70_2[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '7'){
        stayCost_70_2[6] = stayCost_70_2[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '7'){
        stayCost_70_2[7] = stayCost_70_2[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '7'){
        stayCost_70_2[8] = stayCost_70_2[8] + 1;
      }

      //80代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '8'){
        stayCost_80_2[0] = stayCost_80_2[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '8'){
        stayCost_80_2[1] = stayCost_80_2[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '8'){
        stayCost_80_2[2] = stayCost_80_2[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '8'){
        stayCost_80_2[3] = stayCost_80_2[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '8'){
        stayCost_80_2[4] = stayCost_80_2[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '8'){
        stayCost_80_2[5] = stayCost_80_2[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '8'){
        stayCost_80_2[6] = stayCost_80_2[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '8'){
        stayCost_80_2[7] = stayCost_80_2[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '8'){
        stayCost_80_2[8] = stayCost_80_2[8] + 1;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  stayCost_man2[1] = stayCost_man2[0] + stayCost_man2[1];
  stayCost_woman2[1] = stayCost_woman2[0] + stayCost_woman2[1];

  stayCost_10_2[1] = stayCost_10_2[0] + stayCost_10_2[1];
  stayCost_20_2[1] = stayCost_20_2[0] + stayCost_20_2[1];
  stayCost_30_2[1] = stayCost_30_2[0] + stayCost_30_2[1];
  stayCost_40_2[1] = stayCost_40_2[0] + stayCost_40_2[1];
  stayCost_50_2[1] = stayCost_50_2[0] + stayCost_50_2[1];
  stayCost_60_2[1] = stayCost_60_2[0] + stayCost_60_2[1];
  stayCost_70_2[1] = stayCost_70_2[0] + stayCost_70_2[1];
  stayCost_80_2[1] = stayCost_80_2[0] + stayCost_80_2[1];

  stayCost_man2s = [[ '~10000円', stayCost_man2[1] ], [ '~15000円', stayCost_man2[2] ], [ '~20000円', stayCost_man2[3] ], [ '~25000円', stayCost_man2[4] ], [ '~30000円', stayCost_man2[5] ], [ '~35000円', stayCost_man2[6] ], [ '~40000円', stayCost_man2[7] ], [ '40000円~', stayCost_man2[8] ]];
  stayCost_woman2s = [[ '~10000円', stayCost_woman2[1] ], [ '~15000円', stayCost_woman2[2] ], [ '~20000円', stayCost_woman2[3] ], [ '~25000円', stayCost_woman2[4] ], [ '~30000円', stayCost_woman2[5] ], [ '~35000円', stayCost_woman2[6] ], [ '~40000円', stayCost_woman2[7] ], [ '40000円~', stayCost_woman2[8] ]];

  stayCost_10_2year = [[ '~10000円', stayCost_10_2[1] ], [ '~15000円', stayCost_10_2[2] ], [ '~20000円', stayCost_10_2[3] ], [ '~25000円', stayCost_10_2[4] ], [ '~30000円', stayCost_10_2[5] ], [ '~35000円', stayCost_10_2[6] ], [ '~40000円', stayCost_10_2[7] ], [ '40000円~', stayCost_10_2[8] ]];
  stayCost_20_2year = [[ '~10000円', stayCost_20_2[1] ], [ '~15000円', stayCost_20_2[2] ], [ '~20000円', stayCost_20_2[3] ], [ '~25000円', stayCost_20_2[4] ], [ '~30000円', stayCost_20_2[5] ], [ '~35000円', stayCost_20_2[6] ], [ '~40000円', stayCost_20_2[7] ], [ '40000円~', stayCost_20_2[8] ]];
  stayCost_30_2year = [[ '~10000円', stayCost_30_2[1] ], [ '~15000円', stayCost_30_2[2] ], [ '~20000円', stayCost_30_2[3] ], [ '~25000円', stayCost_30_2[4] ], [ '~30000円', stayCost_30_2[5] ], [ '~35000円', stayCost_30_2[6] ], [ '~40000円', stayCost_30_2[7] ], [ '40000円~', stayCost_30_2[8] ]];
  stayCost_40_2year = [[ '~10000円', stayCost_40_2[1] ], [ '~15000円', stayCost_40_2[2] ], [ '~20000円', stayCost_40_2[3] ], [ '~25000円', stayCost_40_2[4] ], [ '~30000円', stayCost_40_2[5] ], [ '~35000円', stayCost_40_2[6] ], [ '~40000円', stayCost_40_2[7] ], [ '40000円~', stayCost_40_2[8] ]];
  stayCost_50_2year = [[ '~10000円', stayCost_50_2[1] ], [ '~15000円', stayCost_50_2[2] ], [ '~20000円', stayCost_50_2[3] ], [ '~25000円', stayCost_50_2[4] ], [ '~30000円', stayCost_50_2[5] ], [ '~35000円', stayCost_50_2[6] ], [ '~40000円', stayCost_50_2[7] ], [ '40000円~', stayCost_50_2[8] ]];
  stayCost_60_2year = [[ '~10000円', stayCost_60_2[1] ], [ '~15000円', stayCost_60_2[2] ], [ '~20000円', stayCost_60_2[3] ], [ '~25000円', stayCost_60_2[4] ], [ '~30000円', stayCost_60_2[5] ], [ '~35000円', stayCost_60_2[6] ], [ '~40000円', stayCost_60_2[7] ], [ '40000円~', stayCost_60_2[8] ]];
  stayCost_70_2year = [[ '~10000円', stayCost_70_2[1] ], [ '~15000円', stayCost_70_2[2] ], [ '~20000円', stayCost_70_2[3] ], [ '~25000円', stayCost_70_2[4] ], [ '~30000円', stayCost_70_2[5] ], [ '~35000円', stayCost_70_2[6] ], [ '~40000円', stayCost_70_2[7] ], [ '40000円~', stayCost_70_2[8] ]];
  stayCost_80_2year = [[ '~10000円', stayCost_80_2[1] ], [ '~15000円', stayCost_80_2[2] ], [ '~20000円', stayCost_80_2[3] ], [ '~25000円', stayCost_80_2[4] ], [ '~30000円', stayCost_80_2[5] ], [ '~35000円', stayCost_80_2[6] ], [ '~40000円', stayCost_80_2[7] ], [ '40000円~', stayCost_80_2[8] ]];

  jQuery.jqplot(
      'march_stayCost',
      [
          stayCost_man2s, stayCost_woman2s
      ],
      {
          animate: true,

          seriesDefaults: {
              renderer: jQuery . jqplot . BarRenderer,

              pointLabels: {
                   show: true,
                   location: 'n',
                   ypadding: -3,
                   escapeHTML: false,
                   formatString: '<b style="color: blue;">%d</b>'
               }
          },
          series: [
             { label: '男' },
             { label: '女' },

          ],
          legend: {
                show: true,
                placement: 'outsideGrid',
                location: 'e',
                renderer: jQuery . jqplot . EnhancedLegendRenderer,
                rendererOptions: {
                    numberColumns: 3
                }
            },


          seriesColors:[ '#00BFFF', '#FFB6C1' ],

          axes: {
              xaxis: {
                  renderer: jQuery . jqplot . CategoryAxisRenderer,

              },
              // 縦軸(y軸)
              yaxis:{
                  label: '人数(人)',
                  min: 0,
                  max: 60,
                  tickInterval: 10,
              }
          },
          title: {
                text: '3月の男女別宿泊費の比較',
                show: true,
                fontFamily: 'ＭＳ ゴシック',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
                location: 's',
            }
      }
  );

  jQuery.jqplot(
      'march_stayCost_10and20',
      [
          stayCost_10_2year, stayCost_20_2year
      ],
      {
          animate: true,

          seriesDefaults: {
              renderer: jQuery . jqplot . BarRenderer,

              pointLabels: {
                   show: true,
                   location: 'n',
                   ypadding: -3,
                   escapeHTML: false,
                   formatString: '<b style="color: blue;">%d</b>'
               }
          },
          series: [
             { label: '10代' },
             { label: '20代' },
            //  { label: '30代'},
            //  { label: '40代'},

          ],
          legend: {
                show: true,
                placement: 'outsideGrid',
                location: 'e',
                renderer: jQuery . jqplot . EnhancedLegendRenderer,
                rendererOptions: {
                    numberColumns: 3
                }
            },


          seriesColors:[ '#FF0000', '#FFA500'],

          axes: {
              xaxis: {
                  renderer: jQuery . jqplot . CategoryAxisRenderer,

              },
              // 縦軸(y軸)
              yaxis:{
                  label: '人数(人)',
                  min: 0,
                  max: 30,
                  tickInterval: 10,
              }
          },
          title: {
                text: '3月の宿泊費の比較(20代未満と20代)',
                show: true,
                fontFamily: 'ＭＳ ゴシック',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
                location: 's',
            }
      }
  );

  jQuery.jqplot(
      'march_stayCost_30and40',
      [
          stayCost_30_2year, stayCost_40_2year
      ],
      {
          animate: true,

          seriesDefaults: {
              renderer: jQuery . jqplot . BarRenderer,

              pointLabels: {
                   show: true,
                   location: 'n',
                   ypadding: -3,
                   escapeHTML: false,
                   formatString: '<b style="color: blue;">%d</b>'
               }
          },
          series: [
            //  { label: '10代' },
            //  { label: '20代' },
             { label: '30代'},
             { label: '40代'},

          ],
          legend: {
                show: true,
                placement: 'outsideGrid',
                location: 'e',
                renderer: jQuery . jqplot . EnhancedLegendRenderer,
                rendererOptions: {
                    numberColumns: 3
                }
            },


          seriesColors:[ '#FF0000', '#FFA500'],

          axes: {
              xaxis: {
                  renderer: jQuery . jqplot . CategoryAxisRenderer,

              },
              // 縦軸(y軸)
              yaxis:{
                  label: '人数(人)',
                  min: 0,
                  max: 30,
                  tickInterval: 10,
              }
          },
          title: {
                text: '3月の宿泊費の比較(30代と40代)',
                show: true,
                fontFamily: 'ＭＳ ゴシック',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
                location: 's',
            }
      }
  );

  jQuery.jqplot(
      'march_stayCost_50and60',
      [
          stayCost_50_2year, stayCost_60_2year
      ],
      {
          animate: true,

          seriesDefaults: {
              renderer: jQuery . jqplot . BarRenderer,

              pointLabels: {
                   show: true,
                   location: 'n',
                   ypadding: -3,
                   escapeHTML: false,
                   formatString: '<b style="color: blue;">%d</b>'
               }
          },
          series: [
            //  { label: '10代' },
            //  { label: '20代' },
             { label: '50代'},
             { label: '60代'},

          ],
          legend: {
                show: true,
                placement: 'outsideGrid',
                location: 'e',
                renderer: jQuery . jqplot . EnhancedLegendRenderer,
                rendererOptions: {
                    numberColumns: 3
                }
            },


          seriesColors:[ '#FF0000', '#FFA500'],

          axes: {
              xaxis: {
                  renderer: jQuery . jqplot . CategoryAxisRenderer,

              },
              // 縦軸(y軸)
              yaxis:{
                  label: '人数(人)',
                  min: 0,
                  max: 30,
                  tickInterval: 10,
              }
          },
          title: {
                text: '3月の宿泊費の比較(50代と60代)',
                show: true,
                fontFamily: 'ＭＳ ゴシック',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
                location: 's',
            }
      }
  );

  jQuery.jqplot(
      'march_stayCost_70and80',
      [
          stayCost_70_2year, stayCost_80_2year
      ],
      {
          animate: true,

          seriesDefaults: {
              renderer: jQuery . jqplot . BarRenderer,

              pointLabels: {
                   show: true,
                   location: 'n',
                   ypadding: -3,
                   escapeHTML: false,
                   formatString: '<b style="color: blue;">%d</b>'
               }
          },
          series: [
            //  { label: '10代' },
            //  { label: '20代' },
             { label: '70代'},
             { label: '80代以上'},

          ],
          legend: {
                show: true,
                placement: 'outsideGrid',
                location: 'e',
                renderer: jQuery . jqplot . EnhancedLegendRenderer,
                rendererOptions: {
                    numberColumns: 3
                }
            },


          seriesColors:[ '#FF0000', '#FFA500'],

          axes: {
              xaxis: {
                  renderer: jQuery . jqplot . CategoryAxisRenderer,

              },
              // 縦軸(y軸)
              yaxis:{
                  label: '人数(人)',
                  min: 0,
                  max: 30,
                  tickInterval: 10,
              }
          },
          title: {
                text: '3月の宿泊費の比較(70代と80代以上)',
                show: true,
                fontFamily: 'ＭＳ ゴシック',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
                location: 's',
            }
      }
  );
});
