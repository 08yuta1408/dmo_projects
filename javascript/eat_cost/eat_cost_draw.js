$(function(){
  var eat_cost = [0, 0, 0, 0, 0, 0];      //index番号順に、無し、1000円以下、1001円〜2000円以下、2001円〜3000円以下、3001円〜5000円以下、5001円以上

  //全ての月別結果を代入する
  for (var i = 0; i < eat_cost.length; i++) {
    eat_cost[i] = eat_cost_2016_october[i] + eat_cost_2016_november[i] + eat_cost_2016_december[i] + eat_cost_2017_january[i] + eat_cost_feb[i] + eat_cost_march[i] + eat_cost_april[i] + eat_cost_may[i] +  eat_cost_june[i] + eat_cost_2017_july[i] + eat_cost_2017_august[i];
  }

  console.log("集計 2~6月 飲食費");
  for (var i = 0; i < eat_cost.length; i++) {
    console.log(eat_cost[i]);
  }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'eat_cost_sousu',

        [
            [
                //ここにデータの値を入力
                [ '無し: ' + eat_cost[0] + '人', eat_cost[0] ],
                [ '1000円以下: ' + eat_cost[1] + '人', eat_cost[1] ],
                [ '1001円〜2000円以下: ' + eat_cost[2] + '人', eat_cost[2] ],
                [ '2001円〜3000円以下: ' + eat_cost[3] + '人', eat_cost[3] ],
                [ '3001円〜5000円以下: ' + eat_cost[4] + '人', eat_cost[4] ],
                [ '5001円以上: ' + eat_cost[5] + '人', eat_cost[5] ],
            ]
        ],
        {
            title: {
                text: '飲食費 / 総数',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F5A9D0', '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3'],

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
      $('#eat_cost_sousu').fadeIn(500);
    });

    eat_cost_1 = [ [eat_cost_2016_october[0], 1], [eat_cost_2016_november[0], 2], [eat_cost_2016_december[0], 3], [eat_cost_2017_january[0], 4], [eat_cost_feb[0], 5], [eat_cost_march[0], 6], [eat_cost_april[0], 7], [eat_cost_may[0], 8], [eat_cost_june[0], 9], [eat_cost_2017_july[0], 10], [eat_cost_2017_august[0], 11] ];
    eat_cost_2 = [ [eat_cost_2016_october[1], 1], [eat_cost_2016_november[1], 2], [eat_cost_2016_december[1], 3], [eat_cost_2017_january[1], 4], [eat_cost_feb[1], 5], [eat_cost_march[1], 6], [eat_cost_april[1], 7], [eat_cost_may[1], 8], [eat_cost_june[1], 9], [eat_cost_2017_july[1], 10], [eat_cost_2017_august[1], 11] ];
    eat_cost_3 = [ [eat_cost_2016_october[2], 1], [eat_cost_2016_november[2], 2], [eat_cost_2016_december[2], 3], [eat_cost_2017_january[2], 4], [eat_cost_feb[2], 5], [eat_cost_march[2], 6], [eat_cost_april[2], 7], [eat_cost_may[2], 8], [eat_cost_june[2], 9], [eat_cost_2017_july[2], 10], [eat_cost_2017_august[2], 11] ];
    eat_cost_4 = [ [eat_cost_2016_october[3], 1], [eat_cost_2016_november[3], 2], [eat_cost_2016_december[3], 3], [eat_cost_2017_january[3], 4], [eat_cost_feb[3], 5], [eat_cost_march[3], 6], [eat_cost_april[3], 7], [eat_cost_may[3], 8], [eat_cost_june[3], 9], [eat_cost_2017_july[3], 10], [eat_cost_2017_august[3], 11] ];
    eat_cost_5 = [ [eat_cost_2016_october[4], 1], [eat_cost_2016_november[4], 2], [eat_cost_2016_december[4], 3], [eat_cost_2017_january[4], 4], [eat_cost_feb[4], 5], [eat_cost_march[4], 6], [eat_cost_april[4], 7], [eat_cost_may[4], 8], [eat_cost_june[4], 9], [eat_cost_2017_july[4], 10], [eat_cost_2017_august[4], 11] ];
    eat_cost_6 = [ [eat_cost_2016_october[5], 1], [eat_cost_2016_november[5], 2], [eat_cost_2016_december[5], 3], [eat_cost_2017_january[5], 4], [eat_cost_feb[5], 5], [eat_cost_march[5], 6], [eat_cost_april[5], 7], [eat_cost_may[5], 8], [eat_cost_june[5], 9], [eat_cost_2017_july[5], 10], [eat_cost_2017_august[5], 11] ];

    yticks = ['2016/10月', '2016/11月', '2016/12月', '2017/ 1月', '2017/ 2月', '2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月', '2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#eat_cost_month').fadeIn(500);

      if(button_count == 1){
        jQuery . jqplot(
            'eat_cost_month',
            [
                eat_cost_1, eat_cost_2, eat_cost_3, eat_cost_4, eat_cost_5, eat_cost_6

            ],
            {
                title: {
                    text: '飲食費 / 月別 ',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F5A9D0', '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3'],

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
                    { label: '1000円以下' },
                    { label: '1001円〜2000円以下' },
                    { label: '2001円〜3000円以下' },
                    { label: '3001円〜5000円以下' },
                    { label: '5001円以上' }

                ],

                legend: {
                    show: true,
                    // placement: 'outside',
                    location: 'e',
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
