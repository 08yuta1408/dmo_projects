var eatCost_man2 = [0, 0, 0, 0, 0, 0];     //男：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_woman2 = [0, 0, 0, 0, 0, 0];   //女：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上

var eatCost_10_2 = [0, 0, 0, 0, 0, 0];      //10代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_20_2 = [0, 0, 0, 0, 0, 0];      //20代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_30_2 = [0, 0, 0, 0, 0, 0];      //30代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_40_2 = [0, 0, 0, 0, 0, 0];      //40代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_50_2 = [0, 0, 0, 0, 0, 0];      //50代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_60_2 = [0, 0, 0, 0, 0, 0];      //60代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_70_2 = [0, 0, 0, 0, 0, 0];      //70代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var eatCost_80_2 = [0, 0, 0, 0, 0, 0];      //80代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上

$(function(){
  $.ajax({url: 'data_march.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      //男性の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["sex"] == '1'){
        eatCost_man2[0] = eatCost_man2[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["sex"] == '1'){
        eatCost_man2[1] = eatCost_man2[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["sex"] == '1'){
        eatCost_man2[2] = eatCost_man2[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["sex"] == '1'){
        eatCost_man2[3] = eatCost_man2[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["sex"] == '1'){
        eatCost_man2[4] = eatCost_man2[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["sex"] == '1'){
        eatCost_man2[5] = eatCost_man2[5] + 1;
      }

      //女性の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["sex"] == '2'){
        eatCost_woman2[0] = eatCost_woman2[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["sex"] == '2'){
        eatCost_woman2[1] = eatCost_woman2[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["sex"] == '2'){
        eatCost_woman2[2] = eatCost_woman2[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["sex"] == '2'){
        eatCost_woman2[3] = eatCost_woman2[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["sex"] == '2'){
        eatCost_woman2[4] = eatCost_woman2[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["sex"] == '2'){
        eatCost_woman2[5] = eatCost_woman2[5] + 1;
      }



      //20歳未満の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '1'){
        eatCost_10_2[0] = eatCost_10_2[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '1'){
        eatCost_10_2[1] = eatCost_10_2[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '1'){
        eatCost_10_2[2] = eatCost_10_2[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '1'){
        eatCost_10_2[3] = eatCost_10_2[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '1'){
        eatCost_10_2[4] = eatCost_10_2[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '1'){
        eatCost_10_2[5] = eatCost_10_2[5] + 1;
      }

      //20代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '2'){
        eatCost_20_2[0] = eatCost_20_2[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '2'){
        eatCost_20_2[1] = eatCost_20_2[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '2'){
        eatCost_20_2[2] = eatCost_20_2[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '2'){
        eatCost_20_2[3] = eatCost_20_2[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '2'){
        eatCost_20_2[4] = eatCost_20_2[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '2'){
        eatCost_20_2[5] = eatCost_20_2[5] + 1;
      }

      //30代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '3'){
        eatCost_30_2[0] = eatCost_30_2[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '3'){
        eatCost_30_2[1] = eatCost_30_2[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '3'){
        eatCost_30_2[2] = eatCost_30_2[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '3'){
        eatCost_30_2[3] = eatCost_30_2[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '3'){
        eatCost_30_2[4] = eatCost_30_2[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '3'){
        eatCost_30_2[5] = eatCost_30_2[5] + 1;
      }

      //40代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '4'){
        eatCost_40_2[0] = eatCost_40_2[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '4'){
        eatCost_40_2[1] = eatCost_40_2[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '4'){
        eatCost_40_2[2] = eatCost_40_2[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '4'){
        eatCost_40_2[3] = eatCost_40_2[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '4'){
        eatCost_40_2[4] = eatCost_40_2[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '4'){
        eatCost_40_2[5] = eatCost_40_2[5] + 1;
      }

      //50代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '5'){
        eatCost_50_2[0] = eatCost_50_2[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '5'){
        eatCost_50_2[1] = eatCost_50_2[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '5'){
        eatCost_50_2[2] = eatCost_50_2[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '5'){
        eatCost_50_2[3] = eatCost_50_2[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '5'){
        eatCost_50_2[4] = eatCost_50_2[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '5'){
        eatCost_50_2[5] = eatCost_50_2[5] + 1;
      }

      //60代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '6'){
        eatCost_60_2[0] = eatCost_60_2[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '6'){
        eatCost_60_2[1] = eatCost_60_2[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '6'){
        eatCost_60_2[2] = eatCost_60_2[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '6'){
        eatCost_60_2[3] = eatCost_60_2[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '6'){
        eatCost_60_2[4] = eatCost_60_2[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '6'){
        eatCost_60_2[5] = eatCost_60_2[5] + 1;
      }

      //70代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '7'){
        eatCost_70_2[0] = eatCost_70_2[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '7'){
        eatCost_70_2[1] = eatCost_70_2[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '7'){
        eatCost_70_2[2] = eatCost_70_2[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '7'){
        eatCost_70_2[3] = eatCost_70_2[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '7'){
        eatCost_70_2[4] = eatCost_70_2[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '7'){
        eatCost_70_2[5] = eatCost_70_2[5] + 1;
      }

      //80代の飲食費
      if(data[i]["eat costs"] == '0' && data[i]["age"] == '8'){
        eatCost_80_2[0] = eatCost_80_2[0] + 1;
      }
      if(data[i]["eat costs"] == '1' && data[i]["age"] == '8'){
        eatCost_80_2[1] = eatCost_80_2[1] + 1;
      }
      if(data[i]["eat costs"] == '2' && data[i]["age"] == '8'){
        eatCost_80_2[2] = eatCost_80_2[2] + 1;
      }
      if(data[i]["eat costs"] == '3' && data[i]["age"] == '8'){
        eatCost_80_2[3] = eatCost_80_2[3] + 1;
      }
      if(data[i]["eat costs"] == '4' && data[i]["age"] == '8'){
        eatCost_80_2[4] = eatCost_80_2[4] + 1;
      }
      if(data[i]["eat costs"] == '5' && data[i]["age"] == '8'){
        eatCost_80_2[5] = eatCost_80_2[5] + 1;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  eatCost_man2[1] = eatCost_man2[0] + eatCost_man2[1];
  eatCost_woman2[1] = eatCost_woman2[0] + eatCost_woman2[1];

  eatCost_10_2[1] = eatCost_10_2[0] + eatCost_10_2[1];
  eatCost_20_2[1] = eatCost_20_2[0] + eatCost_20_2[1];
  eatCost_30_2[1] = eatCost_30_2[0] + eatCost_30_2[1];
  eatCost_40_2[1] = eatCost_40_2[0] + eatCost_40_2[1];
  eatCost_50_2[1] = eatCost_50_2[0] + eatCost_50_2[1];
  eatCost_60_2[1] = eatCost_60_2[0] + eatCost_60_2[1];
  eatCost_70_2[1] = eatCost_70_2[0] + eatCost_70_2[1];
  eatCost_80_2[1] = eatCost_80_2[0] + eatCost_80_2[1];

  eatCost_man2 = [[ '0-1000円', eatCost_man2[1] ], [ '1001~2000円', eatCost_man2[2] ], [ '2001~3000円', eatCost_man2[3] ], [ '3001~5000円', eatCost_man2[4] ], [ '5001円以上', eatCost_man2[5] ]];
  eatCost_woman2 = [[ '0-1000円', eatCost_woman2[1] ], [ '1001~2000円', eatCost_woman2[2] ], [ '2001~3000円', eatCost_woman2[3] ], [ '3001~5000円', eatCost_woman2[4] ], [ '5001円以上', eatCost_woman2[5] ]];

  eatCost_10_2year = [[ '0-1000円', eatCost_10_2[1] ], [ '1001~2000円', eatCost_10_2[2] ], [ '2001~3000円', eatCost_10_2[3] ], [ '3001~5000円', eatCost_10_2[4] ], [ '5001円以上', eatCost_10_2[5] ]];
  eatCost_20_2year = [[ '0-1000円', eatCost_20_2[1] ], [ '1001~2000円', eatCost_20_2[2] ], [ '2001~3000円', eatCost_20_2[3] ], [ '3001~5000円', eatCost_20_2[4] ], [ '5001円以上', eatCost_20_2[5] ]];
  eatCost_30_2year = [[ '0-1000円', eatCost_30_2[1] ], [ '1001~2000円', eatCost_30_2[2] ], [ '2001~3000円', eatCost_30_2[3] ], [ '3001~5000円', eatCost_30_2[4] ], [ '5001円以上', eatCost_30_2[5] ]];
  eatCost_40_2year = [[ '0-1000円', eatCost_40_2[1] ], [ '1001~2000円', eatCost_40_2[2] ], [ '2001~3000円', eatCost_40_2[3] ], [ '3001~5000円', eatCost_40_2[4] ], [ '5001円以上', eatCost_40_2[5] ]];
  eatCost_50_2year = [[ '0-1000円', eatCost_50_2[1] ], [ '1001~2000円', eatCost_50_2[2] ], [ '2001~3000円', eatCost_50_2[3] ], [ '3001~5000円', eatCost_50_2[4] ], [ '5001円以上', eatCost_50_2[5] ]];
  eatCost_60_2year = [[ '0-1000円', eatCost_60_2[1] ], [ '1001~2000円', eatCost_60_2[2] ], [ '2001~3000円', eatCost_60_2[3] ], [ '3001~5000円', eatCost_60_2[4] ], [ '5001円以上', eatCost_60_2[5] ]];
  eatCost_70_2year = [[ '0-1000円', eatCost_70_2[1] ], [ '1001~2000円', eatCost_70_2[2] ], [ '2001~3000円', eatCost_70_2[3] ], [ '3001~5000円', eatCost_70_2[4] ], [ '5001円以上', eatCost_70_2[5] ]];
  eatCost_80_2year = [[ '0-1000円', eatCost_80_2[1] ], [ '1001~2000円', eatCost_80_2[2] ], [ '2001~3000円', eatCost_80_2[3] ], [ '3001~5000円', eatCost_80_2[4] ], [ '5001円以上', eatCost_80_2[5] ]];

  jQuery.jqplot(
      'march_eatcost',
      [
          eatCost_man2, eatCost_woman2
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
                text: '3月の男女別飲食費の比較',
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
      'march_eatcost_10and20',
      [
          eatCost_10_2year, eatCost_20_2year
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
                text: '3月の飲食費の比較(20代未満と20代)',
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
      'march_eatcost_30and40',
      [
          eatCost_30_2year, eatCost_40_2year
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
             { label: '30代' },
             { label: '40代' },
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
                text: '3月の飲食費の比較(30代と40代)',
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
      'march_eatcost_50and60',
      [
          eatCost_50_2year, eatCost_60_2year
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
             { label: '50代' },
             { label: '60代' },
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
                text: '3月の飲食費の比較(50代と60代)',
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
      'march_eatcost_70and80',
      [
          eatCost_70_2year, eatCost_80_2year
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
             { label: '70代' },
             { label: '80代以上' },
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
                text: '3月の飲食費の比較(70代と80代以上)',
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
