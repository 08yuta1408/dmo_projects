var eatCost_man = [0, 0, 0, 0, 0, 0];     //男：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_woman = [0, 0, 0, 0, 0, 0];   //女：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上

var eatCost_10 = [0, 0, 0, 0, 0, 0];      //10代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_20 = [0, 0, 0, 0, 0, 0];      //20代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_30 = [0, 0, 0, 0, 0, 0];      //30代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_40 = [0, 0, 0, 0, 0, 0];      //40代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_50 = [0, 0, 0, 0, 0, 0];      //50代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_60 = [0, 0, 0, 0, 0, 0];      //60代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_70 = [0, 0, 0, 0, 0, 0];      //70代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_80 = [0, 0, 0, 0, 0, 0];      //80代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上

$(function(){
  $.ajax({url: 'data_february.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      //男性の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["sex"] == '1'){
        eatCost_man[0] = eatCost_man[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["sex"] == '1'){
        eatCost_man[1] = eatCost_man[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["sex"] == '1'){
        eatCost_man[2] = eatCost_man[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["sex"] == '1'){
        eatCost_man[3] = eatCost_man[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["sex"] == '1'){
        eatCost_man[4] = eatCost_man[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["sex"] == '1'){
        eatCost_man[5] = eatCost_man[5] + 1;
      }

      //女性の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["sex"] == '2'){
        eatCost_woman[0] = eatCost_woman[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["sex"] == '2'){
        eatCost_woman[1] = eatCost_woman[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["sex"] == '2'){
        eatCost_woman[2] = eatCost_woman[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["sex"] == '2'){
        eatCost_woman[3] = eatCost_woman[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["sex"] == '2'){
        eatCost_woman[4] = eatCost_woman[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["sex"] == '2'){
        eatCost_woman[5] = eatCost_woman[5] + 1;
      }



      //20歳未満の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '1'){
        eatCost_10[0] = eatCost_10[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '1'){
        eatCost_10[1] = eatCost_10[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '1'){
        eatCost_10[2] = eatCost_10[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '1'){
        eatCost_10[3] = eatCost_10[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '1'){
        eatCost_10[4] = eatCost_10[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '1'){
        eatCost_10[5] = eatCost_10[5] + 1;
      }

      //20代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '2'){
        eatCost_20[0] = eatCost_20[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '2'){
        eatCost_20[1] = eatCost_20[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '2'){
        eatCost_20[2] = eatCost_20[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '2'){
        eatCost_20[3] = eatCost_20[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '2'){
        eatCost_20[4] = eatCost_20[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '2'){
        eatCost_20[5] = eatCost_20[5] + 1;
      }

      //30代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '3'){
        eatCost_30[0] = eatCost_30[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '3'){
        eatCost_30[1] = eatCost_30[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '3'){
        eatCost_30[2] = eatCost_30[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '3'){
        eatCost_30[3] = eatCost_30[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '3'){
        eatCost_30[4] = eatCost_30[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '3'){
        eatCost_30[5] = eatCost_30[5] + 1;
      }

      //40代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '4'){
        eatCost_40[0] = eatCost_40[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '4'){
        eatCost_40[1] = eatCost_40[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '4'){
        eatCost_40[2] = eatCost_40[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '4'){
        eatCost_40[3] = eatCost_40[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '4'){
        eatCost_40[4] = eatCost_40[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '4'){
        eatCost_40[5] = eatCost_40[5] + 1;
      }

      //50代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '5'){
        eatCost_50[0] = eatCost_50[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '5'){
        eatCost_50[1] = eatCost_50[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '5'){
        eatCost_50[2] = eatCost_50[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '5'){
        eatCost_50[3] = eatCost_50[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '5'){
        eatCost_50[4] = eatCost_50[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '5'){
        eatCost_50[5] = eatCost_50[5] + 1;
      }

      //60代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '6'){
        eatCost_60[0] = eatCost_60[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '6'){
        eatCost_60[1] = eatCost_60[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '6'){
        eatCost_60[2] = eatCost_60[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '6'){
        eatCost_60[3] = eatCost_60[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '6'){
        eatCost_60[4] = eatCost_60[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '6'){
        eatCost_60[5] = eatCost_60[5] + 1;
      }

      //70代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '7'){
        eatCost_70[0] = eatCost_70[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '7'){
        eatCost_70[1] = eatCost_70[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '7'){
        eatCost_70[2] = eatCost_70[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '7'){
        eatCost_70[3] = eatCost_70[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '7'){
        eatCost_70[4] = eatCost_70[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '7'){
        eatCost_70[5] = eatCost_70[5] + 1;
      }

      //80代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '8'){
        eatCost_80[0] = eatCost_80[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '8'){
        eatCost_80[1] = eatCost_80[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '8'){
        eatCost_80[2] = eatCost_80[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '8'){
        eatCost_80[3] = eatCost_80[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '8'){
        eatCost_80[4] = eatCost_80[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '8'){
        eatCost_80[5] = eatCost_80[5] + 1;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  eatCost_man[1] = eatCost_man[0] + eatCost_man[1];
  eatCost_woman[1] = eatCost_woman[0] + eatCost_woman[1];

  eatCost_10[1] = eatCost_10[0] + eatCost_10[1];
  eatCost_20[1] = eatCost_20[0] + eatCost_20[1];
  eatCost_30[1] = eatCost_30[0] + eatCost_30[1];
  eatCost_40[1] = eatCost_40[0] + eatCost_40[1];
  eatCost_50[1] = eatCost_50[0] + eatCost_50[1];
  eatCost_60[1] = eatCost_60[0] + eatCost_60[1];
  eatCost_70[1] = eatCost_70[0] + eatCost_70[1];
  eatCost_80[1] = eatCost_80[0] + eatCost_80[1];

  eatCost_mans = [[ '0-1000円', eatCost_man[1] ], [ '1001~2000円', eatCost_man[2] ], [ '2001~3000円', eatCost_man[3] ], [ '3001~5000円', eatCost_man[4] ], [ '5001円以上', eatCost_man[5] ]];
  eatCost_womans = [[ '0-1000円', eatCost_woman[1] ], [ '1001~2000円', eatCost_woman[2] ], [ '2001~3000円', eatCost_woman[3] ], [ '3001~5000円', eatCost_woman[4] ], [ '5001円以上', eatCost_woman[5] ]];

  eatCost_10year = [[ '0-1000円', eatCost_10[1] ], [ '1001~2000円', eatCost_10[2] ], [ '2001~3000円', eatCost_10[3] ], [ '3001~5000円', eatCost_10[4] ], [ '5001円以上', eatCost_10[5] ]];
  eatCost_20year = [[ '0-1000円', eatCost_20[1] ], [ '1001~2000円', eatCost_20[2] ], [ '2001~3000円', eatCost_20[3] ], [ '3001~5000円', eatCost_20[4] ], [ '5001円以上', eatCost_20[5] ]];
  eatCost_30year = [[ '0-1000円', eatCost_30[1] ], [ '1001~2000円', eatCost_30[2] ], [ '2001~3000円', eatCost_30[3] ], [ '3001~5000円', eatCost_30[4] ], [ '5001円以上', eatCost_30[5] ]];
  eatCost_40year = [[ '0-1000円', eatCost_40[1] ], [ '1001~2000円', eatCost_40[2] ], [ '2001~3000円', eatCost_40[3] ], [ '3001~5000円', eatCost_40[4] ], [ '5001円以上', eatCost_40[5] ]];
  eatCost_50year = [[ '0-1000円', eatCost_50[1] ], [ '1001~2000円', eatCost_50[2] ], [ '2001~3000円', eatCost_50[3] ], [ '3001~5000円', eatCost_50[4] ], [ '5001円以上', eatCost_50[5] ]];
  eatCost_60year = [[ '0-1000円', eatCost_60[1] ], [ '1001~2000円', eatCost_60[2] ], [ '2001~3000円', eatCost_60[3] ], [ '3001~5000円', eatCost_60[4] ], [ '5001円以上', eatCost_60[5] ]];
  eatCost_70year = [[ '0-1000円', eatCost_70[1] ], [ '1001~2000円', eatCost_70[2] ], [ '2001~3000円', eatCost_70[3] ], [ '3001~5000円', eatCost_70[4] ], [ '5001円以上', eatCost_70[5] ]];
  eatCost_80year = [[ '0-1000円', eatCost_80[1] ], [ '1001~2000円', eatCost_80[2] ], [ '2001~3000円', eatCost_80[3] ], [ '3001~5000円', eatCost_80[4] ], [ '5001円以上', eatCost_80[5] ]];

  jQuery.jqplot(
      'february_eatcost',
      [
          eatCost_mans, eatCost_womans
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
                  max: 50,
                  tickInterval: 10,
              }
          },
          title: {
                text: '2月の男女別飲食費の比較',
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
      'feb_eatcost_10and20',
      [
          eatCost_10year, eatCost_20year
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
             { label: '20歳未満' },
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
                  max: 50,
                  tickInterval: 10,
              }
          },
          title: {
                text: '2月の飲食費の比較(20代未満と20代)',
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
      'feb_eatcost_30and40',
      [
          eatCost_30year, eatCost_40year
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
            //  { label: '20歳未満' },
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
                  max: 50,
                  tickInterval: 10,
              }
          },
          title: {
                text: '2月の飲食費の比較(30代と40代)',
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
