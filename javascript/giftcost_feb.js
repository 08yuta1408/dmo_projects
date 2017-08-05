var giftCost_man = [0, 0, 0, 0, 0, 0];     //男：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var giftCost_woman = [0, 0, 0, 0, 0, 0];   //女：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上

var giftCost_10 = [0, 0, 0, 0, 0, 0];      //10代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var giftCost_20 = [0, 0, 0, 0, 0, 0];      //20代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var giftCost_30 = [0, 0, 0, 0, 0, 0];      //30代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var giftCost_40 = [0, 0, 0, 0, 0, 0];      //40代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var giftCost_50 = [0, 0, 0, 0, 0, 0];      //50代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var giftCost_60 = [0, 0, 0, 0, 0, 0];      //60代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var giftCost_70 = [0, 0, 0, 0, 0, 0];      //70代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上
var giftCost_80 = [0, 0, 0, 0, 0, 0];      //80代：左から順に、無し・1000円・1001~2000円・2001~3000円・3001~5000円・5000円以上

$(function(){
  $.ajax({url: 'json/data_february.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      //男性のお土産費
      if(data[i]["gift costs"] == '0' && data[i]["sex"] == '1'){
        giftCost_man[0] = giftCost_man[0] + 1;
      }
      if(data[i]["gift costs"] == '1' && data[i]["sex"] == '1'){
        giftCost_man[1] = giftCost_man[1] + 1;
      }
      if(data[i]["gift costs"] == '2' && data[i]["sex"] == '1'){
        giftCost_man[2] = giftCost_man[2] + 1;
      }
      if(data[i]["gift costs"] == '3' && data[i]["sex"] == '1'){
        giftCost_man[3] = giftCost_man[3] + 1;
      }
      if(data[i]["gift costs"] == '4' && data[i]["sex"] == '1'){
        giftCost_man[4] = giftCost_man[4] + 1;
      }
      if(data[i]["gift costs"] == '5' && data[i]["sex"] == '1'){
        giftCost_man[5] = giftCost_man[5] + 1;
      }

      //女性のお土産費
      if(data[i]["gift costs"] == '0' && data[i]["sex"] == '2'){
        giftCost_woman[0] = giftCost_woman[0] + 1;
      }
      if(data[i]["gift costs"] == '1' && data[i]["sex"] == '2'){
        giftCost_woman[1] = giftCost_woman[1] + 1;
      }
      if(data[i]["gift costs"] == '2' && data[i]["sex"] == '2'){
        giftCost_woman[2] = giftCost_woman[2] + 1;
      }
      if(data[i]["gift costs"] == '3' && data[i]["sex"] == '2'){
        giftCost_woman[3] = giftCost_woman[3] + 1;
      }
      if(data[i]["gift costs"] == '4' && data[i]["sex"] == '2'){
        giftCost_woman[4] = giftCost_woman[4] + 1;
      }
      if(data[i]["gift costs"] == '5' && data[i]["sex"] == '2'){
        giftCost_woman[5] = giftCost_woman[5] + 1;
      }



      //20歳未満のお土産費
      if(data[i]["gift costs"] == '0' && data[i]["age"] == '1'){
        giftCost_10[0] = giftCost_10[0] + 1;
      }
      if(data[i]["gift costs"] == '1' && data[i]["age"] == '1'){
        giftCost_10[1] = giftCost_10[1] + 1;
      }
      if(data[i]["gift costs"] == '2' && data[i]["age"] == '1'){
        giftCost_10[2] = giftCost_10[2] + 1;
      }
      if(data[i]["gift costs"] == '3' && data[i]["age"] == '1'){
        giftCost_10[3] = giftCost_10[3] + 1;
      }
      if(data[i]["gift costs"] == '4' && data[i]["age"] == '1'){
        giftCost_10[4] = giftCost_10[4] + 1;
      }
      if(data[i]["gift costs"] == '5' && data[i]["age"] == '1'){
        giftCost_10[5] = giftCost_10[5] + 1;
      }

      //20代のお土産費
      if(data[i]["gift costs"] == '0' && data[i]["age"] == '2'){
        giftCost_20[0] = giftCost_20[0] + 1;
      }
      if(data[i]["gift costs"] == '1' && data[i]["age"] == '2'){
        giftCost_20[1] = giftCost_20[1] + 1;
      }
      if(data[i]["gift costs"] == '2' && data[i]["age"] == '2'){
        giftCost_20[2] = giftCost_20[2] + 1;
      }
      if(data[i]["gift costs"] == '3' && data[i]["age"] == '2'){
        giftCost_20[3] = giftCost_20[3] + 1;
      }
      if(data[i]["gift costs"] == '4' && data[i]["age"] == '2'){
        giftCost_20[4] = giftCost_20[4] + 1;
      }
      if(data[i]["gift costs"] == '5' && data[i]["age"] == '2'){
        giftCost_20[5] = giftCost_20[5] + 1;
      }

      //30代のお土産費
      if(data[i]["gift costs"] == '0' && data[i]["age"] == '3'){
        giftCost_30[0] = giftCost_30[0] + 1;
      }
      if(data[i]["gift costs"] == '1' && data[i]["age"] == '3'){
        giftCost_30[1] = giftCost_30[1] + 1;
      }
      if(data[i]["gift costs"] == '2' && data[i]["age"] == '3'){
        giftCost_30[2] = giftCost_30[2] + 1;
      }
      if(data[i]["gift costs"] == '3' && data[i]["age"] == '3'){
        giftCost_30[3] = giftCost_30[3] + 1;
      }
      if(data[i]["gift costs"] == '4' && data[i]["age"] == '3'){
        giftCost_30[4] = giftCost_30[4] + 1;
      }
      if(data[i]["gift costs"] == '5' && data[i]["age"] == '3'){
        giftCost_30[5] = giftCost_30[5] + 1;
      }

      //40代のお土産費
      if(data[i]["gift costs"] == '0' && data[i]["age"] == '4'){
        giftCost_40[0] = giftCost_40[0] + 1;
      }
      if(data[i]["gift costs"] == '1' && data[i]["age"] == '4'){
        giftCost_40[1] = giftCost_40[1] + 1;
      }
      if(data[i]["gift costs"] == '2' && data[i]["age"] == '4'){
        giftCost_40[2] = giftCost_40[2] + 1;
      }
      if(data[i]["gift costs"] == '3' && data[i]["age"] == '4'){
        giftCost_40[3] = giftCost_40[3] + 1;
      }
      if(data[i]["gift costs"] == '4' && data[i]["age"] == '4'){
        giftCost_40[4] = giftCost_40[4] + 1;
      }
      if(data[i]["gift costs"] == '5' && data[i]["age"] == '4'){
        giftCost_40[5] = giftCost_40[5] + 1;
      }

      //50代のお土産費
      if(data[i]["gift costs"] == '0' && data[i]["age"] == '5'){
        giftCost_50[0] = giftCost_50[0] + 1;
      }
      if(data[i]["gift costs"] == '1' && data[i]["age"] == '5'){
        giftCost_50[1] = giftCost_50[1] + 1;
      }
      if(data[i]["gift costs"] == '2' && data[i]["age"] == '5'){
        giftCost_50[2] = giftCost_50[2] + 1;
      }
      if(data[i]["gift costs"] == '3' && data[i]["age"] == '5'){
        giftCost_50[3] = giftCost_50[3] + 1;
      }
      if(data[i]["gift costs"] == '4' && data[i]["age"] == '5'){
        giftCost_50[4] = giftCost_50[4] + 1;
      }
      if(data[i]["gift costs"] == '5' && data[i]["age"] == '5'){
        giftCost_50[5] = giftCost_50[5] + 1;
      }

      //60代のお土産費
      if(data[i]["gift costs"] == '0' && data[i]["age"] == '6'){
        giftCost_60[0] = giftCost_60[0] + 1;
      }
      if(data[i]["gift costs"] == '1' && data[i]["age"] == '6'){
        giftCost_60[1] = giftCost_60[1] + 1;
      }
      if(data[i]["gift costs"] == '2' && data[i]["age"] == '6'){
        giftCost_60[2] = giftCost_60[2] + 1;
      }
      if(data[i]["gift costs"] == '3' && data[i]["age"] == '6'){
        giftCost_60[3] = giftCost_60[3] + 1;
      }
      if(data[i]["gift costs"] == '4' && data[i]["age"] == '6'){
        giftCost_60[4] = giftCost_60[4] + 1;
      }
      if(data[i]["gift costs"] == '5' && data[i]["age"] == '6'){
        giftCost_60[5] = giftCost_60[5] + 1;
      }

      //70代のお土産費
      if(data[i]["gift costs"] == '0' && data[i]["age"] == '7'){
        giftCost_70[0] = giftCost_70[0] + 1;
      }
      if(data[i]["gift costs"] == '1' && data[i]["age"] == '7'){
        giftCost_70[1] = giftCost_70[1] + 1;
      }
      if(data[i]["gift costs"] == '2' && data[i]["age"] == '7'){
        giftCost_70[2] = giftCost_70[2] + 1;
      }
      if(data[i]["gift costs"] == '3' && data[i]["age"] == '7'){
        giftCost_70[3] = giftCost_70[3] + 1;
      }
      if(data[i]["gift costs"] == '4' && data[i]["age"] == '7'){
        giftCost_70[4] = giftCost_70[4] + 1;
      }
      if(data[i]["gift costs"] == '5' && data[i]["age"] == '7'){
        giftCost_70[5] = giftCost_70[5] + 1;
      }

      //80代のお土産費
      if(data[i]["gift costs"] == '0' && data[i]["age"] == '8'){
        giftCost_80[0] = giftCost_80[0] + 1;
      }
      if(data[i]["gift costs"] == '1' && data[i]["age"] == '8'){
        giftCost_80[1] = giftCost_80[1] + 1;
      }
      if(data[i]["gift costs"] == '2' && data[i]["age"] == '8'){
        giftCost_80[2] = giftCost_80[2] + 1;
      }
      if(data[i]["gift costs"] == '3' && data[i]["age"] == '8'){
        giftCost_80[3] = giftCost_80[3] + 1;
      }
      if(data[i]["gift costs"] == '4' && data[i]["age"] == '8'){
        giftCost_80[4] = giftCost_80[4] + 1;
      }
      if(data[i]["gift costs"] == '5' && data[i]["age"] == '8'){
        giftCost_80[5] = giftCost_80[5] + 1;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  giftCost_man[1] = giftCost_man[0] + giftCost_man[1];
  giftCost_woman[1] = giftCost_woman[0] + giftCost_woman[1];

  giftCost_10[1] = giftCost_10[0] + giftCost_10[1];
  giftCost_20[1] = giftCost_20[0] + giftCost_20[1];
  giftCost_30[1] = giftCost_30[0] + giftCost_30[1];
  giftCost_40[1] = giftCost_40[0] + giftCost_40[1];
  giftCost_50[1] = giftCost_50[0] + giftCost_50[1];
  giftCost_60[1] = giftCost_60[0] + giftCost_60[1];
  giftCost_70[1] = giftCost_70[0] + giftCost_70[1];
  giftCost_80[1] = giftCost_80[0] + giftCost_80[1];

  giftCost_mans = [[ '0-1000円', giftCost_man[1] ], [ '1001~2000円', giftCost_man[2] ], [ '2001~3000円', giftCost_man[3] ], [ '3001~5000円', giftCost_man[4] ], [ '5001円以上', giftCost_man[5] ]];
  giftCost_womans = [[ '0-1000円', giftCost_woman[1] ], [ '1001~2000円', giftCost_woman[2] ], [ '2001~3000円', giftCost_woman[3] ], [ '3001~5000円', giftCost_woman[4] ], [ '5001円以上', giftCost_woman[5] ]];

  giftCost_10year = [[ '0-1000円', giftCost_10[1] ], [ '1001~2000円', giftCost_10[2] ], [ '2001~3000円', giftCost_10[3] ], [ '3001~5000円', giftCost_10[4] ], [ '5001円以上', giftCost_10[5] ]];
  giftCost_20year = [[ '0-1000円', giftCost_20[1] ], [ '1001~2000円', giftCost_20[2] ], [ '2001~3000円', giftCost_20[3] ], [ '3001~5000円', giftCost_20[4] ], [ '5001円以上', giftCost_20[5] ]];
  giftCost_30year = [[ '0-1000円', giftCost_30[1] ], [ '1001~2000円', giftCost_30[2] ], [ '2001~3000円', giftCost_30[3] ], [ '3001~5000円', giftCost_30[4] ], [ '5001円以上', giftCost_30[5] ]];
  giftCost_40year = [[ '0-1000円', giftCost_40[1] ], [ '1001~2000円', giftCost_40[2] ], [ '2001~3000円', giftCost_40[3] ], [ '3001~5000円', giftCost_40[4] ], [ '5001円以上', giftCost_40[5] ]];
  giftCost_50year = [[ '0-1000円', giftCost_50[1] ], [ '1001~2000円', giftCost_50[2] ], [ '2001~3000円', giftCost_50[3] ], [ '3001~5000円', giftCost_50[4] ], [ '5001円以上', giftCost_50[5] ]];
  giftCost_60year = [[ '0-1000円', giftCost_60[1] ], [ '1001~2000円', giftCost_60[2] ], [ '2001~3000円', giftCost_60[3] ], [ '3001~5000円', giftCost_60[4] ], [ '5001円以上', giftCost_60[5] ]];
  giftCost_70year = [[ '0-1000円', giftCost_70[1] ], [ '1001~2000円', giftCost_70[2] ], [ '2001~3000円', giftCost_70[3] ], [ '3001~5000円', giftCost_70[4] ], [ '5001円以上', giftCost_70[5] ]];
  giftCost_80year = [[ '0-1000円', giftCost_80[1] ], [ '1001~2000円', giftCost_80[2] ], [ '2001~3000円', giftCost_80[3] ], [ '3001~5000円', giftCost_80[4] ], [ '5001円以上', giftCost_80[5] ]];

  jQuery.jqplot(
      'february_giftCost',
      [
          giftCost_mans, giftCost_womans
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
                text: '2月の男女別お土産費の比較',
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
      'feb_giftCost_10and20',
      [
          giftCost_10year, giftCost_20year
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
                  max: 30,
                  tickInterval: 10,
              }
          },
          title: {
                text: '2月のお土産費の比較(20代未満と20代)',
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
      'feb_giftCost_30and40',
      [
          giftCost_30year, giftCost_40year
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
                  max: 30,
                  tickInterval: 10,
              }
          },
          title: {
                text: '2月のお土産費の比較(30代と40代)',
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
      'feb_giftCost_50and60',
      [
          giftCost_50year, giftCost_60year
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
                text: '2月のお土産費の比較(50代と60代)',
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
      'feb_giftCost_70and80',
      [
          giftCost_70year, giftCost_80year
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
                text: '2月のお土産費の比較(70代と80代以上)',
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
