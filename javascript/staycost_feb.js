var stayCost_man = [0, 0, 0, 0, 0, 0, 0, 0, 0];     //男：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_woman = [0, 0, 0, 0, 0, 0, 0, 0, 0];   //女：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上

var stayCost_10 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //10代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_20 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //20代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_30 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //30代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_40 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //40代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_50 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //50代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_60 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //60代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_70 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //70代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上
var stayCost_80 = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //80代：左から順に、無し・10000円以下・10001~20000円・20001~30000円・30001~40000円・40001円以上

$(function(){
  $.ajax({url: 'json/data_february.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      //男性の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["sex"] == '1'){
        stayCost_man[0] = stayCost_man[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["sex"] == '1'){
        stayCost_man[1] = stayCost_man[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["sex"] == '1'){
        stayCost_man[2] = stayCost_man[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["sex"] == '1'){
        stayCost_man[3] = stayCost_man[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["sex"] == '1'){
        stayCost_man[4] = stayCost_man[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["sex"] == '1'){
        stayCost_man[5] = stayCost_man[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["sex"] == '1'){
        stayCost_man[6] = stayCost_man[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["sex"] == '1'){
        stayCost_man[7] = stayCost_man[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["sex"] == '1'){
        stayCost_man[8] = stayCost_man[8] + 1;
      }

      //女性の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["sex"] == '2'){
        stayCost_woman[0] = stayCost_woman[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["sex"] == '2'){
        stayCost_woman[1] = stayCost_woman[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["sex"] == '2'){
        stayCost_woman[2] = stayCost_woman[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["sex"] == '2'){
        stayCost_woman[3] = stayCost_woman[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["sex"] == '2'){
        stayCost_woman[4] = stayCost_woman[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["sex"] == '2'){
        stayCost_woman[5] = stayCost_woman[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["sex"] == '2'){
        stayCost_woman[6] = stayCost_woman[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["sex"] == '2'){
        stayCost_woman[7] = stayCost_woman[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["sex"] == '2'){
        stayCost_woman[8] = stayCost_woman[8] + 1;
      }



      //10代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '1'){
        stayCost_10[0] = stayCost_10[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '1'){
        stayCost_10[1] = stayCost_10[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '1'){
        stayCost_10[2] = stayCost_10[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '1'){
        stayCost_10[3] = stayCost_10[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '1'){
        stayCost_10[4] = stayCost_10[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '1'){
        stayCost_10[5] = stayCost_10[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '1'){
        stayCost_10[6] = stayCost_10[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '1'){
        stayCost_10[7] = stayCost_10[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '1'){
        stayCost_10[8] = stayCost_10[8] + 1;
      }


      //20代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '2'){
        stayCost_20[0] = stayCost_20[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '2'){
        stayCost_20[1] = stayCost_20[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '2'){
        stayCost_20[2] = stayCost_20[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '2'){
        stayCost_20[3] = stayCost_20[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '2'){
        stayCost_20[4] = stayCost_20[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '2'){
        stayCost_20[5] = stayCost_20[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '2'){
        stayCost_20[6] = stayCost_20[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '2'){
        stayCost_20[7] = stayCost_20[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '2'){
        stayCost_20[8] = stayCost_20[8] + 1;
      }

      //30代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '3'){
        stayCost_30[0] = stayCost_30[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '3'){
        stayCost_30[1] = stayCost_30[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '3'){
        stayCost_30[2] = stayCost_30[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '3'){
        stayCost_30[3] = stayCost_30[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '3'){
        stayCost_30[4] = stayCost_30[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '3'){
        stayCost_30[5] = stayCost_30[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '3'){
        stayCost_30[6] = stayCost_30[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '3'){
        stayCost_30[7] = stayCost_30[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '3'){
        stayCost_30[8] = stayCost_30[8] + 1;
      }

      //40代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '4'){
        stayCost_40[0] = stayCost_40[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '4'){
        stayCost_40[1] = stayCost_40[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '4'){
        stayCost_40[2] = stayCost_40[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '4'){
        stayCost_40[3] = stayCost_40[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '4'){
        stayCost_40[4] = stayCost_40[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '4'){
        stayCost_40[5] = stayCost_40[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '4'){
        stayCost_40[6] = stayCost_40[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '4'){
        stayCost_40[7] = stayCost_40[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '4'){
        stayCost_40[8] = stayCost_40[8] + 1;
      }

      //50代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '5'){
        stayCost_50[0] = stayCost_50[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '5'){
        stayCost_50[1] = stayCost_50[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '5'){
        stayCost_50[2] = stayCost_50[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '5'){
        stayCost_50[3] = stayCost_50[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '5'){
        stayCost_50[4] = stayCost_50[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '5'){
        stayCost_50[5] = stayCost_50[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '5'){
        stayCost_50[6] = stayCost_50[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '5'){
        stayCost_50[7] = stayCost_50[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '5'){
        stayCost_50[8] = stayCost_50[8] + 1;
      }

      //60代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '6'){
        stayCost_60[0] = stayCost_60[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '6'){
        stayCost_60[1] = stayCost_60[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '6'){
        stayCost_60[2] = stayCost_60[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '6'){
        stayCost_60[3] = stayCost_60[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '6'){
        stayCost_60[4] = stayCost_60[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '6'){
        stayCost_60[5] = stayCost_60[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '6'){
        stayCost_60[6] = stayCost_60[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '6'){
        stayCost_60[7] = stayCost_60[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '6'){
        stayCost_60[8] = stayCost_60[8] + 1;
      }

      //70代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '7'){
        stayCost_70[0] = stayCost_70[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '7'){
        stayCost_70[1] = stayCost_70[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '7'){
        stayCost_70[2] = stayCost_70[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '7'){
        stayCost_70[3] = stayCost_70[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '7'){
        stayCost_70[4] = stayCost_70[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '7'){
        stayCost_70[5] = stayCost_70[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '7'){
        stayCost_70[6] = stayCost_70[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '7'){
        stayCost_70[7] = stayCost_70[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '7'){
        stayCost_70[8] = stayCost_70[8] + 1;
      }

      //80代の宿泊費
      if(data[i]["stay costs"] == '0' && data[i]["age"] == '8'){
        stayCost_80[0] = stayCost_80[0] + 1;
      }
      if(data[i]["stay costs"] == '1' && data[i]["age"] == '8'){
        stayCost_80[1] = stayCost_80[1] + 1;
      }
      if(data[i]["stay costs"] == '6' && data[i]["age"] == '8'){
        stayCost_80[2] = stayCost_80[2] + 1;
      }
      if(data[i]["stay costs"] == '7' && data[i]["age"] == '8'){
        stayCost_80[3] = stayCost_80[3] + 1;
      }
      if(data[i]["stay costs"] == '8' && data[i]["age"] == '8'){
        stayCost_80[4] = stayCost_80[4] + 1;
      }
      if(data[i]["stay costs"] == '9' && data[i]["age"] == '8'){
        stayCost_80[5] = stayCost_80[5] + 1;
      }
      if(data[i]["stay costs"] == '10' && data[i]["age"] == '8'){
        stayCost_80[6] = stayCost_80[6] + 1;
      }
      if(data[i]["stay costs"] == '11' && data[i]["age"] == '8'){
        stayCost_80[7] = stayCost_80[7] + 1;
      }
      if(data[i]["stay costs"] == '5' && data[i]["age"] == '8'){
        stayCost_80[8] = stayCost_80[8] + 1;
      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  stayCost_man[1] = stayCost_man[0] + stayCost_man[1];
  stayCost_woman[1] = stayCost_woman[0] + stayCost_woman[1];

  stayCost_10[1] = stayCost_10[0] + stayCost_10[1];
  stayCost_20[1] = stayCost_20[0] + stayCost_20[1];
  stayCost_30[1] = stayCost_30[0] + stayCost_30[1];
  stayCost_40[1] = stayCost_40[0] + stayCost_40[1];
  stayCost_50[1] = stayCost_50[0] + stayCost_50[1];
  stayCost_60[1] = stayCost_60[0] + stayCost_60[1];
  stayCost_70[1] = stayCost_70[0] + stayCost_70[1];
  stayCost_80[1] = stayCost_80[0] + stayCost_80[1];

  stayCost_mans = [[ '~10000円', stayCost_man[1] ], [ '~15000円', stayCost_man[2] ], [ '~20000円', stayCost_man[3] ], [ '~25000円', stayCost_man[4] ], [ '~30000円', stayCost_man[5] ], [ '~35000円', stayCost_man[6] ], [ '~40000円', stayCost_man[7] ], [ '40000円~', stayCost_man[8] ]];
  stayCost_womans = [[ '~10000円', stayCost_woman[1] ], [ '~15000円', stayCost_woman[2] ], [ '~20000円', stayCost_woman[3] ], [ '~25000円', stayCost_woman[4] ], [ '~30000円', stayCost_woman[5] ], [ '~35000円', stayCost_woman[6] ], [ '~40000円', stayCost_woman[7] ], [ '40000円~', stayCost_woman[8] ]];

  stayCost_10year = [[ '~10000円', stayCost_10[1] ], [ '~15000円', stayCost_10[2] ], [ '~20000円', stayCost_10[3] ], [ '~25000円', stayCost_10[4] ], [ '~30000円', stayCost_10[5] ], [ '~35000円', stayCost_10[6] ], [ '~40000円', stayCost_10[7] ], [ '40000円~', stayCost_10[8] ]];
  stayCost_20year = [[ '~10000円', stayCost_20[1] ], [ '~15000円', stayCost_20[2] ], [ '~20000円', stayCost_20[3] ], [ '~25000円', stayCost_20[4] ], [ '~30000円', stayCost_20[5] ], [ '~35000円', stayCost_20[6] ], [ '~40000円', stayCost_20[7] ], [ '40000円~', stayCost_20[8] ]];
  stayCost_30year = [[ '~10000円', stayCost_30[1] ], [ '~15000円', stayCost_30[2] ], [ '~20000円', stayCost_30[3] ], [ '~25000円', stayCost_30[4] ], [ '~30000円', stayCost_30[5] ], [ '~35000円', stayCost_30[6] ], [ '~40000円', stayCost_30[7] ], [ '40000円~', stayCost_30[8] ]];
  stayCost_40year = [[ '~10000円', stayCost_40[1] ], [ '~15000円', stayCost_40[2] ], [ '~20000円', stayCost_40[3] ], [ '~25000円', stayCost_40[4] ], [ '~30000円', stayCost_40[5] ], [ '~35000円', stayCost_40[6] ], [ '~40000円', stayCost_40[7] ], [ '40000円~', stayCost_40[8] ]];
  stayCost_50year = [[ '~10000円', stayCost_50[1] ], [ '~15000円', stayCost_50[2] ], [ '~20000円', stayCost_50[3] ], [ '~25000円', stayCost_50[4] ], [ '~30000円', stayCost_50[5] ], [ '~35000円', stayCost_50[6] ], [ '~40000円', stayCost_50[7] ], [ '40000円~', stayCost_50[8] ]];
  stayCost_60year = [[ '~10000円', stayCost_60[1] ], [ '~15000円', stayCost_60[2] ], [ '~20000円', stayCost_60[3] ], [ '~25000円', stayCost_60[4] ], [ '~30000円', stayCost_60[5] ], [ '~35000円', stayCost_60[6] ], [ '~40000円', stayCost_60[7] ], [ '40000円~', stayCost_60[8] ]];
  stayCost_70year = [[ '~10000円', stayCost_70[1] ], [ '~15000円', stayCost_70[2] ], [ '~20000円', stayCost_70[3] ], [ '~25000円', stayCost_70[4] ], [ '~30000円', stayCost_70[5] ], [ '~35000円', stayCost_70[6] ], [ '~40000円', stayCost_70[7] ], [ '40000円~', stayCost_70[8] ]];
  stayCost_80year = [[ '~10000円', stayCost_80[1] ], [ '~15000円', stayCost_80[2] ], [ '~20000円', stayCost_80[3] ], [ '~25000円', stayCost_80[4] ], [ '~30000円', stayCost_80[5] ], [ '~35000円', stayCost_80[6] ], [ '~40000円', stayCost_80[7] ], [ '40000円~', stayCost_80[8] ]];

  jQuery.jqplot(
      'february_stayCost',
      [
          stayCost_mans, stayCost_womans
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
                text: '2月の男女別宿泊費の比較',
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
      'feb_stayCost_10and20',
      [
          stayCost_10year, stayCost_20year
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
                text: '2月の宿泊費の比較(20代未満と20代)',
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
      'feb_stayCost_30and40',
      [
          stayCost_30year, stayCost_40year
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
                text: '2月の宿泊費の比較(30代と40代)',
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
      'feb_stayCost_50and60',
      [
          stayCost_50year, stayCost_60year
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
                text: '2月の宿泊費の比較(50代と60代)',
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
      'feb_stayCost_70and80',
      [
          stayCost_70year, stayCost_80year
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
                text: '2月の宿泊費の比較(70代と80代以上)',
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
