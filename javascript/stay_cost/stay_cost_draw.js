$(function(){
  var stay_cost = [0, 0, 0, 0, 0, 0, 0, 0, 0];      //index番号順に、無し、10000円以下、10001円〜15000円以下、15001円〜20000円以下、20001円〜25000円以下、25001円〜30000円以下、30001円〜35000円以下、35001円〜40000円以下、40000円以上

  //全ての月別結果を代入する
  for (var i = 0; i < stay_cost.length; i++) {
    stay_cost[i] = stay_cost_2016_october[i] + stay_cost_2016_november[i] + stay_cost_2016_december[i] + stay_cost_2017_january[i] + stay_cost_feb[i] + stay_cost_march[i] + stay_cost_april[i] + stay_cost_may[i] +  stay_cost_june[i] + stay_cost_2017_july[i] + stay_cost_2017_august[i];
  }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'stay_cost_sousu',

        [
            [
                //ここにデータの値を入力
                [ '無し: ' + stay_cost[0] + '人', stay_cost[0] ],
                [ '10000円以下: ' + stay_cost[1] + '人', stay_cost[1] ],
                [ '10001円〜15000円以下: ' + stay_cost[2] + '人', stay_cost[2] ],
                [ '15001円〜20000円以下: ' + stay_cost[3] + '人', stay_cost[3] ],
                [ '20001円〜25000円以下: ' + stay_cost[4] + '人', stay_cost[4] ],
                [ '25001円〜30000円以下: ' + stay_cost[5] + '人', stay_cost[5] ],
                [ '30001円〜35000円以下: ' + stay_cost[6] + '人', stay_cost[6] ],
                [ '35001円〜40000円以下: ' + stay_cost[7] + '人', stay_cost[7] ],
                [ '40001円以上: ' + stay_cost[8] + '人', stay_cost[8] ],


            ]
        ],
        {
            title: {
                text: '宿泊費 / 総数',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8', '#D8D8D8'],

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
                    numberRows: 3
                },
            }
        }
    );


    //総数ボタンを押した
    $('#sosu').click(function(){
      $('.gragh').hide();
      $('#stay_cost_sousu').fadeIn(500);
    });

    stay_cost_1 = [ [stay_cost_2016_october[0], 1], [stay_cost_2016_november[0], 2], [stay_cost_2016_december[0], 3], [stay_cost_2017_january[0], 4],  [stay_cost_feb[0], 5], [stay_cost_march[0], 6], [stay_cost_april[0], 7], [stay_cost_may[0], 8], [stay_cost_june[0], 9], [stay_cost_2017_july[0], 10], [stay_cost_2017_august[0], 11] ];
    stay_cost_2 = [ [stay_cost_2016_october[1], 1], [stay_cost_2016_november[1], 2], [stay_cost_2016_december[1], 3], [stay_cost_2017_january[1], 4],  [stay_cost_feb[1], 5], [stay_cost_march[1], 6], [stay_cost_april[1], 7], [stay_cost_may[1], 8], [stay_cost_june[1], 9], [stay_cost_2017_july[1], 10], [stay_cost_2017_august[1], 11] ];
    stay_cost_3 = [ [stay_cost_2016_october[2], 1], [stay_cost_2016_november[2], 2], [stay_cost_2016_december[2], 3], [stay_cost_2017_january[2], 4],  [stay_cost_feb[2], 5], [stay_cost_march[2], 6], [stay_cost_april[2], 7], [stay_cost_may[2], 8], [stay_cost_june[2], 9], [stay_cost_2017_july[2], 10], [stay_cost_2017_august[2], 11] ];
    stay_cost_4 = [ [stay_cost_2016_october[3], 1], [stay_cost_2016_november[3], 2], [stay_cost_2016_december[3], 3], [stay_cost_2017_january[3], 4],  [stay_cost_feb[3], 5], [stay_cost_march[3], 6], [stay_cost_april[3], 7], [stay_cost_may[3], 8], [stay_cost_june[3], 9], [stay_cost_2017_july[3], 10], [stay_cost_2017_august[3], 11] ];
    stay_cost_5 = [ [stay_cost_2016_october[4], 1], [stay_cost_2016_november[4], 2], [stay_cost_2016_december[4], 3], [stay_cost_2017_january[4], 4],  [stay_cost_feb[4], 5], [stay_cost_march[4], 6], [stay_cost_april[4], 7], [stay_cost_may[4], 8], [stay_cost_june[4], 9], [stay_cost_2017_july[4], 10], [stay_cost_2017_august[4], 11] ];
    stay_cost_6 = [ [stay_cost_2016_october[5], 1], [stay_cost_2016_november[5], 2], [stay_cost_2016_december[5], 3], [stay_cost_2017_january[5], 4],  [stay_cost_feb[5], 5], [stay_cost_march[5], 6], [stay_cost_april[5], 7], [stay_cost_may[5], 8], [stay_cost_june[5], 9], [stay_cost_2017_july[5], 10], [stay_cost_2017_august[5], 11] ];
    stay_cost_7 = [ [stay_cost_2016_october[6], 1], [stay_cost_2016_november[6], 2], [stay_cost_2016_december[6], 3], [stay_cost_2017_january[6], 4],  [stay_cost_feb[6], 5], [stay_cost_march[6], 6], [stay_cost_april[6], 7], [stay_cost_may[6], 8], [stay_cost_june[6], 9], [stay_cost_2017_july[6], 10], [stay_cost_2017_august[6], 11] ];
    stay_cost_8 = [ [stay_cost_2016_october[7], 1], [stay_cost_2016_november[7], 2], [stay_cost_2016_december[7], 3], [stay_cost_2017_january[7], 4],  [stay_cost_feb[7], 5], [stay_cost_march[7], 6], [stay_cost_april[7], 7], [stay_cost_may[7], 8], [stay_cost_june[7], 9], [stay_cost_2017_july[7], 10], [stay_cost_2017_august[7], 11] ];
    stay_cost_9 = [ [stay_cost_2016_october[8], 1], [stay_cost_2016_november[8], 2], [stay_cost_2016_december[8], 3], [stay_cost_2017_january[8], 4],  [stay_cost_feb[8], 5], [stay_cost_march[8], 6], [stay_cost_april[8], 7], [stay_cost_may[8], 8], [stay_cost_june[8], 9], [stay_cost_2017_july[8], 10], [stay_cost_2017_august[8], 11] ];

    yticks = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#stay_cost_month').fadeIn(500);

      if(button_count == 1){
        jQuery . jqplot(
            'stay_cost_month',
            [
                stay_cost_1, stay_cost_2, stay_cost_3, stay_cost_4, stay_cost_5, stay_cost_6, stay_cost_7, stay_cost_8, stay_cost_9

            ],
            {
                title: {
                    text: '宿泊費 / 月別 ',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8', '#D8D8D8'],

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
                    { label: '無し' },
                    { label: '10000円以下' },
                    { label: '10001円〜15000円以下' },
                    { label: '15001円〜20000円以下' },
                    { label: '20010円〜25000円以下' },
                    { label: '25001円〜30000円以下' },
                    { label: '30001円〜35000円以下' },
                    { label: '35001円〜40000円以下' },
                    { label: '40000円以上' }
                ],

                legend: {
                    show: true,
                    // placement: 'outside',
                    location: 'se',
                    // location: 'e',
                    rendererOptions: {
                        numberRows: 1
                    },
                },

                axes: {
                    xaxis:{
                      max: 650,
                      label: '人数',
                    },

                    yaxis: {
                        ticks: yticks,
                        renderer: jQuery . jqplot . CategoryAxisRenderer,

                    }
                }
            }
        );
      }

    });
});
