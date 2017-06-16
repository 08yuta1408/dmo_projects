var region = [0, 0, 0, 0, 0, 0, 0, 0];   //左から順に、北海道・東北・関東・中部・近畿・中国・四国・九州

$(function(){
  $.ajax({url: 'data_february.json', dataType: 'json', async: false}).done(function(data){

    for(var i = 0; i < data.length; i++){
      switch(parseInt(data[i]["from"])){
        case 1:
          region[0] = region[0] + 1;
          break;

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          region[1] = region[1] + 1;
          break;

        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
          region[2] = region[2] + 1;
          break;

        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
          region[3] = region[3] + 1;
          break;

        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
          region[4] = region[4] + 1;
          break;

        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
          region[5] = region[5] + 1;
          break;

        case 36:
        case 37:
        case 38:
        case 39:
          region[6] = region[6] + 1;
          break;

        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
          region[7] = region[7] + 1;
          break;

      }
    }
  })

  .fail(function(){
    window.alert('読み込みエラー');
  })

  visit_times_feb = [['北海道', region[0]], ['東北', region[1]], ['関東', region[2]], ['中部', region[3]], ['近畿', region[4]], ['中国', region[5]], ['四国', region[6]], ['九州', region[7]]];

    // jQuery.jqplot(
    //     'visit_gragh',
    //
    //     [
    //         visit_times_feb, visit_times_march
    //     ],
    //     {
    //         animate: true,
    //
    //         seriesDefaults: {
    //             renderer: jQuery . jqplot . BarRenderer,
    //
    //             pointLabels: {
    //                  show: true,
    //                  location: 'n',
    //                  ypadding: -3,
    //                  escapeHTML: false,
    //                  formatString: '<b style="color: blue;">%d</b>'
    //              }
    //         },
    //         series: [
    //           //  { label: '男' },
    //           //  { label: '女' },
    //
    //         ],
    //         // legend: {
    //         //       show: true,
    //         //       placement: 'outsideGrid',
    //         //       location: 'e',
    //         //       renderer: jQuery . jqplot . EnhancedLegendRenderer,
    //         //       rendererOptions: {
    //         //           numberColumns: 3
    //         //       }
    //         //   },
    //
    //
    //         seriesColors:[ '#00BFFF', '#FFB6C1' ],
    //
    //         axes: {
    //             xaxis: {
    //                 renderer: jQuery . jqplot . CategoryAxisRenderer,
    //
    //             },
    //             // 縦軸(y軸)
    //             yaxis:{
    //                 label: '人数(人)',
    //                 min: 0,
    //                 max: 100,
    //                 tickInterval: 10,
    //             }
    //         },
    //         title: {
    //               text: '2月に富山を訪れた人の数',
    //               show: true,
    //               fontFamily: 'ＭＳ ゴシック',
    //               fontSize: '20px',
    //               textAlign: 'center',
    //               textColor: 'black',
    //               location: 's',
    //           }
    //     }
    // );

});
