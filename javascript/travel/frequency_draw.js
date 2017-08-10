$(function(){
  $(function(){
    var frequency_all = [0, 0, 0, 0, 0, 0, 0];

    var frequency_all_person = 0;     //母数の計算用

    //frequency_allに全ての月別結果を代入する
    for (var i = 0; i < frequency_all.length; i++) {
      switch (i) {
        case 0:
          frequency_all[i] = frequency_feb[i] + frequency_march[i] + frequency_april[i] + frequency_may[i] +  frequency_june[i];
          break;
        case 1:
          frequency_all[i] = frequency_feb[i] + frequency_march[i] + frequency_april[i] + frequency_may[i] +  frequency_june[i];
          break;
        case 2:
          frequency_all[i] = frequency_feb[i] + frequency_march[i] + frequency_april[i] + frequency_may[i] +  frequency_june[i];
          break;
        case 3:
          frequency_all[i] = frequency_feb[i] + frequency_march[i] + frequency_april[i] + frequency_may[i] +  frequency_june[i];
          break;
        case 4:
          frequency_all[i] = frequency_feb[i] + frequency_march[i] + frequency_april[i] + frequency_may[i] +  frequency_june[i];
          break;
        case 5:
          frequency_all[i] = frequency_feb[i] + frequency_march[i] + frequency_april[i] + frequency_may[i] +  frequency_june[i];
          break;
        case 6:
          frequency_all[i] = frequency_feb[i] + frequency_march[i] + frequency_april[i] + frequency_may[i] +  frequency_june[i];
          break;
      }
    }

    //母数の計算
    for (var i = 0; i < frequency_all.length; i++) {
      frequency_all_person += frequency_all[i];
    }

    //デフォルトは、総数グラフ
    jQuery . jqplot(
          'frequency_sousu',

          [
              [
                  //ここにデータの値を入力
                  [ '毎月1回程度:' + frequency_all[0] + '人', frequency_all[0] ],
                  [ '年に4回以上:' + frequency_all[1] + '人', frequency_all[1] ],
                  [ '年に２〜3回程度:' + frequency_all[2] + '人', frequency_all[2] ],
                  [ '年に1回程度:' + frequency_all[3] + '人', frequency_all[3] ],
                  [ '2年に1回程度:' + frequency_all[4] + '人', frequency_all[4] ],
                  [ '3年に1回程度:' + frequency_all[5] + '人', frequency_all[5] ],
                  [ 'それ以下:' + frequency_all[6] + '人', frequency_all[6] ],
              ]
          ],
          {
              title: {
                  text: '国内旅行頻度/総数 母数：' + (frequency_all_person) + '(人)',
                  show: true,
                  fontFamily: 'HGP行書体, Serif',
                  fontSize: '20px',
                  textAlign: 'center',
                  textColor: 'black',
              },

              seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#81F79F', '#9F81F7', '#D8D8D8'],

              seriesDefaults: {
                  renderer: jQuery . jqplot . PieRenderer,
                  rendererOptions: {
                      padding: 5,
                      showDataLabels: true,
                      startAngle: -90,
                  }
              },
              legend: {
                  show: true,
                  location: 's',
                  rendererOptions: {
                      numberRows: 2
                  },
              }
          }
      );

      //総数ボタンを押した
      $('#sosu').click(function(){
        $('.gragh').hide();
        $('#frequency_sousu').show();
      });

      frequency_1 = [ [frequency_feb[0], 1], [frequency_march[0], 2], [frequency_april[0], 3], [frequency_may[0], 4], [frequency_june[0], 5] ];
      frequency_2 = [ [frequency_feb[1], 1], [frequency_march[1], 2], [frequency_april[1], 3], [frequency_may[1], 4], [frequency_june[1], 5] ];
      frequency_3 = [ [frequency_feb[2], 1], [frequency_march[2], 2], [frequency_april[2], 3], [frequency_may[2], 4], [frequency_june[2], 5] ];
      frequency_4 = [ [frequency_feb[3], 1], [frequency_march[3], 2], [frequency_april[3], 3], [frequency_may[3], 4], [frequency_june[3], 5] ];
      frequency_5 = [ [frequency_feb[4], 1], [frequency_march[4], 2], [frequency_april[4], 3], [frequency_may[4], 4], [frequency_june[4], 5] ];
      frequency_6 = [ [frequency_feb[5], 1], [frequency_march[5], 2], [frequency_april[5], 3], [frequency_may[5], 4], [frequency_june[5], 5] ];
      frequency_7 = [ [frequency_feb[6], 1], [frequency_march[6], 2], [frequency_april[6], 3], [frequency_may[6], 4], [frequency_june[6], 5] ];

      yticks = ['2月', '3月', '4月', '5月', '6月'];

      //月別ボタンを押した
      $('#month').click(function(){
        $('.gragh').hide();
        $('#frequency_month').show();

        jQuery . jqplot(
            'frequency_month',
            [
                frequency_1, frequency_2, frequency_3, frequency_4, frequency_5, frequency_6, frequency_7

            ],
            {
                title: {
                    text: '職業/月別 母数：' + (frequency_all_person) + '(人)',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#81F79F', '#9F81F7', '#D8D8D8'],

                seriesDefaults: {
                    renderer: jQuery . jqplot . BarRenderer,

                    pointLabels: {
                        show: true,
                        location: 'n',
                        ypadding: -5,
                        escapeHTML: false,
                        edgeTolerance: -20,
                        formatString: '<b style="color: blue;">%d</b>',
                        hideZeros: true
                    },

                    rendererOptions: {
                      barDirection: 'horizontal',
                      dataLabels: 'percent',
                      showDataLabels: true,
                    }
                },

                series: [
                    { label: '毎月1回程度' },
                    { label: '年に4回程度' },
                    { label: '年に２〜3回程度' },
                    { label: '年に1回程度' },
                    { label: '2年に1回程度' },
                    { label: '3年に1回程度' },
                    { label: 'それ以下' }
                ],

                legend: {
                    show: true,
                    // placement: 'outside',
                    location: 'e',
                    // location: 'e',
                    rendererOptions: {
                        numberRows: 2
                    },
                },

                axes: {
                    xaxis:{
                      label: '人数',
                      // max: 550,
                    },

                    yaxis: {
                        ticks: yticks,
                        renderer: jQuery . jqplot . CategoryAxisRenderer,

                    }
                }
            }
        );

      });
  });

});
