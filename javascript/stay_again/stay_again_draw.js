var stay_again = [0, 0, 0, 0, 0, 0];      //index番号順に、県内在住、ぜひまた来たい、機会があればまた来たい、あまり来たいと思わない、もう来ないと思う、わからない

$(function(){
  //集計
  for (var i = 0; i < stay_again.length; i++) {
    stay_again[i] = stay_again_2016_october[i] + stay_again_2016_november[i] + stay_again_2016_december[i] + stay_again_2017_january[i] + stay_again_feb[i] + stay_again_march[i] + stay_again_april[i] + stay_again_may[i] +  stay_again_june[i] + stay_again_2017_july[i] + stay_again_2017_august[i];
  }

  //集計コンソール表示
  // console.log("---全体集計---");
  // for (var i = 0; i < stay_again.length; i++) {
  //   console.log(stay_again[i]);
  // }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'stay_again_sousu',

        [
            [
                //ここにデータの値を入力
                [ '県内在住:' + stay_again[0] + '人', stay_again[0] ],
                [ 'ぜひまた来たい:' + stay_again[1] + '人', stay_again[1] ],
                [ '機会があればまた来たい:' + stay_again[2] + '人', stay_again[2] ],
                [ 'あまり来たいと思わない:' + stay_again[3] + '人', stay_again[3] ],
                [ 'もう来ないと思う:' + stay_again[4] + '人', stay_again[4] ],
                [ 'わからない:' + stay_again[5] + '人', stay_again[5] ],
            ]
        ],
        {
            title: {
                text: '再来訪 / 総数',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE', '#BE81F7', '#D8D8D8'],

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
                location: 'e',
                rendererOptions: {
                    numberRows: 6
                },
            }
        }
    );

    //総数ボタンを押した
    $('#sosu').click(function(){
      $('.gragh').hide();
      $('#stay_again_sousu').fadeIn(500);
    });


    stay_again_1 = [ [stay_again_2016_october[0], 1], [stay_again_2016_november[0], 2], [stay_again_2016_december[0], 3], [stay_again_2017_january[0], 4],  [stay_again_feb[0], 5], [stay_again_march[0], 6], [stay_again_april[0], 7], [stay_again_may[0], 8], [stay_again_june[0], 9], [stay_again_2017_july[0], 10], [stay_again_2017_august[0], 11] ];
    stay_again_2 = [ [stay_again_2016_october[1], 1], [stay_again_2016_november[1], 2], [stay_again_2016_december[1], 3], [stay_again_2017_january[1], 4],  [stay_again_feb[1], 5], [stay_again_march[1], 6], [stay_again_april[1], 7], [stay_again_may[1], 8], [stay_again_june[1], 9], [stay_again_2017_july[1], 10], [stay_again_2017_august[1], 11] ];
    stay_again_3 = [ [stay_again_2016_october[2], 1], [stay_again_2016_november[2], 2], [stay_again_2016_december[2], 3], [stay_again_2017_january[2], 4],  [stay_again_feb[2], 5], [stay_again_march[2], 6], [stay_again_april[2], 7], [stay_again_may[2], 8], [stay_again_june[2], 9], [stay_again_2017_july[2], 10], [stay_again_2017_august[2], 11] ];
    stay_again_4 = [ [stay_again_2016_october[3], 1], [stay_again_2016_november[3], 2], [stay_again_2016_december[3], 3], [stay_again_2017_january[3], 4],  [stay_again_feb[3], 5], [stay_again_march[3], 6], [stay_again_april[3], 7], [stay_again_may[3], 8], [stay_again_june[3], 9], [stay_again_2017_july[3], 10], [stay_again_2017_august[3], 11] ];
    stay_again_5 = [ [stay_again_2016_october[4], 1], [stay_again_2016_november[4], 2], [stay_again_2016_december[4], 3], [stay_again_2017_january[4], 4],  [stay_again_feb[4], 5], [stay_again_march[4], 6], [stay_again_april[4], 7], [stay_again_may[4], 8], [stay_again_june[4], 9], [stay_again_2017_july[4], 10], [stay_again_2017_august[4], 11] ];
    stay_again_6 = [ [stay_again_2016_october[5], 1], [stay_again_2016_november[5], 2], [stay_again_2016_december[5], 3], [stay_again_2017_january[5], 4],  [stay_again_feb[5], 5], [stay_again_march[5], 6], [stay_again_april[5], 7], [stay_again_may[5], 8], [stay_again_june[5], 9], [stay_again_2017_july[5], 10], [stay_again_2017_august[5], 11] ];

    yticks = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#stay_again_month').fadeIn(500);

      if(button_count == 1){
        jQuery . jqplot(
            'stay_again_month',
            [
                stay_again_1, stay_again_2, stay_again_3, stay_again_4, stay_again_5, stay_again_6

            ],
            {
                title: {
                    text: '再来訪 / 月別',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE', '#BE81F7', '#D8D8D8'],

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
                    { label: '県内在住' },
                    { label: 'ぜひまた来たい' },
                    { label: '機会があればまた来たい' },
                    { label: 'あまり来たいと思わない' },
                    { label: 'もう来ないと思う' },
                    { label: 'わからない' }

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
