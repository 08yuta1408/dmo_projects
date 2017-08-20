var stay_again = [0, 0, 0, 0, 0, 0];      //index番号順に、県内在住、ぜひまた来たい、機会があればまた来たい、あまり来たいと思わない、もう来ないと思う、わからない

$(function(){
  //集計
  for (var i = 0; i < stay_again.length; i++) {
    stay_again[i] = stay_again_feb[i] + stay_again_march[i] + stay_again_april[i] + stay_again_may[i] + stay_again_june[i];
  }

  //集計コンソール表示
  console.log("---全体集計---");
  for (var i = 0; i < stay_again.length; i++) {
    console.log(stay_again[i]);
  }

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


    stay_again_1 = [ [stay_again_feb[0], 1], [stay_again_march[0], 2], [stay_again_april[0], 3], [stay_again_may[0], 4], [stay_again_june[0], 5] ];
    stay_again_2 = [ [stay_again_feb[1], 1], [stay_again_march[1], 2], [stay_again_april[1], 3], [stay_again_may[1], 4], [stay_again_june[1], 5] ];
    stay_again_3 = [ [stay_again_feb[2], 1], [stay_again_march[2], 2], [stay_again_april[2], 3], [stay_again_may[2], 4], [stay_again_june[2], 5] ];
    stay_again_4 = [ [stay_again_feb[3], 1], [stay_again_march[3], 2], [stay_again_april[3], 3], [stay_again_may[3], 4], [stay_again_june[3], 5] ];
    stay_again_5 = [ [stay_again_feb[4], 1], [stay_again_march[4], 2], [stay_again_april[4], 3], [stay_again_may[4], 4], [stay_again_june[4], 5] ];
    stay_again_6 = [ [stay_again_feb[5], 1], [stay_again_march[5], 2], [stay_again_april[5], 3], [stay_again_may[5], 4], [stay_again_june[5], 5] ];
    yticks = ['2月', '3月', '4月', '5月', '6月'];

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
