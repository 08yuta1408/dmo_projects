$(function(){
  var gift_cost = [0, 0, 0, 0, 0, 0];      //index番号順に、無し、1000円以下、1001円〜2000円以下、2001円〜3000円以下、3001円〜5000円以下、5001円以上

  //全ての月別結果を代入する
  for (var i = 0; i < gift_cost.length; i++) {
    gift_cost[i] = gift_cost_2016_october[i] +gift_cost_2016_november[i] + gift_cost_2016_december[i] + gift_cost_2017_january[i] +  gift_cost_feb[i] + gift_cost_march[i] + gift_cost_april[i] + gift_cost_may[i] +  gift_cost_june[i] + gift_cost_2017_july[i] + gift_cost_2017_august[i];
  }

  // console.log("集計 2~6月 宿泊費");
  // for (var i = 0; i < gift_cost.length; i++) {
  //   console.log(gift_cost[i]);
  // }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'gift_cost_sousu',

        [
            [
                //ここにデータの値を入力
                [ '無し: ' + gift_cost[0] + '人', gift_cost[0] ],
                [ '1000円以下: ' + gift_cost[1] + '人', gift_cost[1] ],
                [ '1001円〜2000円以下: ' + gift_cost[2] + '人', gift_cost[2] ],
                [ '2001円〜3000円以下: ' + gift_cost[3] + '人', gift_cost[3] ],
                [ '3001円〜5000円以下: ' + gift_cost[4] + '人', gift_cost[4] ],
                [ '5001円以上: ' + gift_cost[5] + '人', gift_cost[5] ],
            ]
        ],
        {
            title: {
                text: 'お土産費 / 総数',
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
      $('#gift_cost_sousu').fadeIn(500);
    });

    gift_cost_1 = [ [gift_cost_2016_october[0], 1], [gift_cost_2016_november[0], 2], [gift_cost_2016_december[0], 3], [gift_cost_2017_january[0], 4], [gift_cost_feb[0], 5], [gift_cost_march[0], 6], [gift_cost_april[0], 7], [gift_cost_may[0], 8], [gift_cost_june[0], 9], [gift_cost_2017_july[0], 10], [gift_cost_2017_august[0], 11] ];
    gift_cost_2 = [ [gift_cost_2016_october[1], 1], [gift_cost_2016_november[1], 2], [gift_cost_2016_december[1], 3], [gift_cost_2017_january[1], 4], [gift_cost_feb[1], 5], [gift_cost_march[1], 6], [gift_cost_april[1], 7], [gift_cost_may[1], 8], [gift_cost_june[1], 9], [gift_cost_2017_july[1], 10], [gift_cost_2017_august[1], 11] ];
    gift_cost_3 = [ [gift_cost_2016_october[2], 1], [gift_cost_2016_november[2], 2], [gift_cost_2016_december[2], 3], [gift_cost_2017_january[2], 4], [gift_cost_feb[2], 5], [gift_cost_march[2], 6], [gift_cost_april[2], 7], [gift_cost_may[2], 8], [gift_cost_june[2], 9], [gift_cost_2017_july[2], 10], [gift_cost_2017_august[2], 11] ];
    gift_cost_4 = [ [gift_cost_2016_october[3], 1], [gift_cost_2016_november[3], 2], [gift_cost_2016_december[3], 3], [gift_cost_2017_january[3], 4], [gift_cost_feb[3], 5], [gift_cost_march[3], 6], [gift_cost_april[3], 7], [gift_cost_may[3], 8], [gift_cost_june[3], 9], [gift_cost_2017_july[3], 10], [gift_cost_2017_august[3], 11] ];
    gift_cost_5 = [ [gift_cost_2016_october[4], 1], [gift_cost_2016_november[4], 2], [gift_cost_2016_december[4], 3], [gift_cost_2017_january[4], 4], [gift_cost_feb[4], 5], [gift_cost_march[4], 6], [gift_cost_april[4], 7], [gift_cost_may[4], 8], [gift_cost_june[4], 9], [gift_cost_2017_july[4], 10], [gift_cost_2017_august[4], 11] ];
    gift_cost_6 = [ [gift_cost_2016_october[5], 1], [gift_cost_2016_november[5], 2], [gift_cost_2016_december[5], 3], [gift_cost_2017_january[5], 4], [gift_cost_feb[5], 5], [gift_cost_march[5], 6], [gift_cost_april[5], 7], [gift_cost_may[5], 8], [gift_cost_june[5], 9], [gift_cost_2017_july[5], 10], [gift_cost_2017_august[5], 11] ];


    // gift_cost_1 = [ [gift_cost_feb[0], 1], [gift_cost_march[0], 2], [gift_cost_april[0], 3], [gift_cost_may[0], 4], [gift_cost_june[0], 5] ];
    // gift_cost_2 = [ [gift_cost_feb[1], 1], [gift_cost_march[1], 2], [gift_cost_april[1], 3], [gift_cost_may[1], 4], [gift_cost_june[1], 5] ];
    // gift_cost_3 = [ [gift_cost_feb[2], 1], [gift_cost_march[2], 2], [gift_cost_april[2], 3], [gift_cost_may[2], 4], [gift_cost_june[2], 5] ];
    // gift_cost_4 = [ [gift_cost_feb[3], 1], [gift_cost_march[3], 2], [gift_cost_april[3], 3], [gift_cost_may[3], 4], [gift_cost_june[3], 5] ];
    // gift_cost_5= [ [gift_cost_feb[4], 1], [gift_cost_march[4], 2], [gift_cost_april[4], 3], [gift_cost_may[4], 4], [gift_cost_june[4], 5] ];
    // gift_cost_6 = [ [gift_cost_feb[5], 1], [gift_cost_march[5], 2], [gift_cost_april[5], 3], [gift_cost_may[5], 4], [gift_cost_june[5], 5] ];

    yticks = ['2016/10月', '2016/11月', '2016/12月', '2017/ 1月', '2017/ 2月', '2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月', '2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#gift_cost_month').fadeIn(500);

      if(button_count == 1){
        jQuery . jqplot(
            'gift_cost_month',
            [
                gift_cost_1, gift_cost_2, gift_cost_3, gift_cost_4, gift_cost_5, gift_cost_6

            ],
            {
                title: {
                    text: 'お土産費 / 月別 ',
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
