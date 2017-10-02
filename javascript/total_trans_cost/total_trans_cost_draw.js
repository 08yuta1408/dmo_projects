$(function(){
  var total_trans_cost = [0, 0, 0, 0, 0, 0];  //index番号順に、無し、10000円以下、10001円〜20000円以下、20001円〜30000円以下、30001円〜40000円以下、40001円以上

  //全ての月別結果を代入する
  for (var i = 0; i < total_trans_cost.length; i++) {
    total_trans_cost[i] = total_trans_cost_2016_october[i] + total_trans_cost_2016_november[i] + total_trans_cost_2016_december[i] + total_trans_cost_2017_january[i] + total_trans_cost_feb[i] + total_trans_cost_march[i] + total_trans_cost_april[i] + total_trans_cost_may[i] +  total_trans_cost_june[i] + total_trans_cost_2017_july[i] + total_trans_cost_2017_august[i];
  }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'total_trans_cost_sousu',

        [
            [
                //ここにデータの値を入力
                [ '無し: ' + total_trans_cost[0] + '人', total_trans_cost[0] ],
                [ '10000円以下: ' + total_trans_cost[1] + '人', total_trans_cost[1] ],
                [ '10001円〜20000円以下: ' + total_trans_cost[2] + '人', total_trans_cost[2] ],
                [ '20001円〜30000円以下: ' + total_trans_cost[3] + '人', total_trans_cost[3] ],
                [ '30001円〜40000円以下: ' + total_trans_cost[4] + '人', total_trans_cost[4] ],
                [ '40000円以上: ' + total_trans_cost[5] + '人', total_trans_cost[5] ],



            ]
        ],
        {
            title: {
                text: '県内交通費/総数',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8'],

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
      $('#total_trans_cost_sousu').fadeIn(500);
    });

    total_trans_cost_1 = [ [total_trans_cost_2016_october[0], 1], [total_trans_cost_2016_november[0], 2], [total_trans_cost_2016_december[0], 3], [total_trans_cost_2017_january[0], 4],  [total_trans_cost_feb[0], 5], [total_trans_cost_march[0], 6], [total_trans_cost_april[0], 7], [total_trans_cost_may[0], 8], [total_trans_cost_june[0], 9], [total_trans_cost_2017_july[0], 10], [total_trans_cost_2017_august[0], 11] ];
    total_trans_cost_2 = [ [total_trans_cost_2016_october[1], 1], [total_trans_cost_2016_november[1], 2], [total_trans_cost_2016_december[1], 3], [total_trans_cost_2017_january[1], 4],  [total_trans_cost_feb[1], 5], [total_trans_cost_march[1], 6], [total_trans_cost_april[1], 7], [total_trans_cost_may[1], 8], [total_trans_cost_june[1], 9], [total_trans_cost_2017_july[1], 10], [total_trans_cost_2017_august[1], 11] ];
    total_trans_cost_3 = [ [total_trans_cost_2016_october[2], 1], [total_trans_cost_2016_november[2], 2], [total_trans_cost_2016_december[2], 3], [total_trans_cost_2017_january[2], 4],  [total_trans_cost_feb[2], 5], [total_trans_cost_march[2], 6], [total_trans_cost_april[2], 7], [total_trans_cost_may[2], 8], [total_trans_cost_june[2], 9], [total_trans_cost_2017_july[2], 10], [total_trans_cost_2017_august[2], 11] ];
    total_trans_cost_4 = [ [total_trans_cost_2016_october[3], 1], [total_trans_cost_2016_november[3], 2], [total_trans_cost_2016_december[3], 3], [total_trans_cost_2017_january[3], 4],  [total_trans_cost_feb[3], 5], [total_trans_cost_march[3], 6], [total_trans_cost_april[3], 7], [total_trans_cost_may[3], 8], [total_trans_cost_june[3], 9], [total_trans_cost_2017_july[3], 10], [total_trans_cost_2017_august[3], 11] ];
    total_trans_cost_5 = [ [total_trans_cost_2016_october[4], 1], [total_trans_cost_2016_november[4], 2], [total_trans_cost_2016_december[4], 3], [total_trans_cost_2017_january[4], 4],  [total_trans_cost_feb[4], 5], [total_trans_cost_march[4], 6], [total_trans_cost_april[4], 7], [total_trans_cost_may[4], 8], [total_trans_cost_june[4], 9], [total_trans_cost_2017_july[4], 10], [total_trans_cost_2017_august[4], 11] ];
    total_trans_cost_6 = [ [total_trans_cost_2016_october[5], 1], [total_trans_cost_2016_november[5], 2], [total_trans_cost_2016_december[5], 3], [total_trans_cost_2017_january[5], 4],  [total_trans_cost_feb[5], 5], [total_trans_cost_march[5], 6], [total_trans_cost_april[5], 7], [total_trans_cost_may[5], 8], [total_trans_cost_june[5], 9], [total_trans_cost_2017_july[5], 10], [total_trans_cost_2017_august[5], 11] ];

    yticks = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#total_trans_cost_month').fadeIn(500);

      if(button_count == 1){
        jQuery . jqplot(
            'total_trans_cost_month',
            [
                total_trans_cost_1, total_trans_cost_2, total_trans_cost_3, total_trans_cost_4, total_trans_cost_5, total_trans_cost_6

            ],
            {
                title: {
                    text: '県内交通費/月別 ',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#F6CED8'],

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
                    { label: '10001円〜20000円以下' },
                    { label: '20001円〜30000円以下' },
                    { label: '30001円〜40000円以下' },
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
