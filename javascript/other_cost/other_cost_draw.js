$(function(){
  var other_cost = [0, 0, 0, 0, 0, 0];      //index番号順に、無し、1000円以下、1001円〜2000円以下、2001円〜3000円以下、3001円〜5000円以下、5001円以上

  //全ての月別結果を代入する
  for (var i = 0; i < other_cost.length; i++) {
    other_cost[i] = other_cost_feb[i] + other_cost_march[i] + other_cost_april[i] + other_cost_may[i] +  other_cost_june[i];
  }

  console.log("集計 2~6月 その他観光費");
  for (var i = 0; i < other_cost.length; i++) {
    console.log(other_cost[i]);
  }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'other_cost_sousu',

        [
            [
                //ここにデータの値を入力
                [ '無し: ' + other_cost[0] + '人', other_cost[0] ],
                [ '1000円以下: ' + other_cost[1] + '人', other_cost[1] ],
                [ '1001円〜2000円以下: ' + other_cost[2] + '人', other_cost[2] ],
                [ '2001円〜3000円以下: ' + other_cost[3] + '人', other_cost[3] ],
                [ '3001円〜5000円以下: ' + other_cost[4] + '人', other_cost[4] ],
                [ '5001円以上: ' + other_cost[5] + '人', other_cost[5] ],
            ]
        ],
        {
            title: {
                text: 'その他観光費 / 総数',
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
      $('#other_cost_sousu').fadeIn(500);
    });

    other_cost_1 = [ [other_cost_feb[0], 1], [other_cost_march[0], 2], [other_cost_april[0], 3], [other_cost_may[0], 4], [other_cost_june[0], 5] ];
    other_cost_2 = [ [other_cost_feb[1], 1], [other_cost_march[1], 2], [other_cost_april[1], 3], [other_cost_may[1], 4], [other_cost_june[1], 5] ];
    other_cost_3 = [ [other_cost_feb[2], 1], [other_cost_march[2], 2], [other_cost_april[2], 3], [other_cost_may[2], 4], [other_cost_june[2], 5] ];
    other_cost_4 = [ [other_cost_feb[3], 1], [other_cost_march[3], 2], [other_cost_april[3], 3], [other_cost_may[3], 4], [other_cost_june[3], 5] ];
    other_cost_5= [ [other_cost_feb[4], 1], [other_cost_march[4], 2], [other_cost_april[4], 3], [other_cost_may[4], 4], [other_cost_june[4], 5] ];
    other_cost_6 = [ [other_cost_feb[5], 1], [other_cost_march[5], 2], [other_cost_april[5], 3], [other_cost_may[5], 4], [other_cost_june[5], 5] ];

    yticks = ['2月', '3月', '4月', '5月', '6月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#other_cost_month').fadeIn(500);

      if(button_count == 1){
        jQuery . jqplot(
            'other_cost_month',
            [
                other_cost_1, other_cost_2, other_cost_3, other_cost_4, other_cost_5, other_cost_6

            ],
            {
                title: {
                    text: 'その他観光費 / 月別 ',
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
