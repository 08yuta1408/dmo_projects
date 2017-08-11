$(function(){
  var stay_all = [0, 0, 0, 0];     //index番号順に、日帰り、１泊、２泊、３泊以上

  var stay_all_person = 0;     //母数の計算用

  //stay_allに全ての月別結果を代入する
  for (var i = 0; i < stay_all.length; i++) {
    switch (i) {
      case 0:
        stay_all[i] = stay_feb[i] + stay_march[i] + stay_april[i] + stay_may[i] +  stay_june[i];
        break;
      case 1:
        stay_all[i] = stay_feb[i] + stay_march[i] + stay_april[i] + stay_may[i] +  stay_june[i];
        break;
      case 2:
        stay_all[i] = stay_feb[i] + stay_march[i] + stay_april[i] + stay_may[i] +  stay_june[i];
        break;
      case 3:
        stay_all[i] = stay_feb[i] + stay_march[i] + stay_april[i] + stay_may[i] +  stay_june[i];
        break;

    }
  }

  for (var i = 0; i < stay_all.length; i++) {
    stay_all_person += stay_all[i];
  }

  // for (var i = 0; i < stay_all.length; i++) {
  //   console.log(((i + 1) * 10) + "代：" + stay_all[i] + "人");
  // }
  // console.log("母数：" + stay_all_person + "人");

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'stay_sousu',

        [
            [
                //ここにデータの値を入力
                [ '日帰り:' + stay_all[0] + '人', stay_all[0] ],
                [ '1泊:' + stay_all[1] + '人', stay_all[1] ],
                [ '2泊:' + stay_all[2] + '人', stay_all[2] ],
                [ '3泊以上:' + stay_all[3] + '人', stay_all[3] ],
            ]
        ],
        {
            title: {
                text: '宿泊有無/総数 母数：' + (stay_all_person) + '(人)',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE'],

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
                    numberRows: 1
                },
            }
        }
    );


    //総数ボタンを押した
    $('#sosu').click(function(){
      $('.gragh').hide();
      $('#stay_sousu').show();
    });

    stay_10 = [ [stay_feb[0], 1], [stay_march[0], 2], [stay_april[0], 3], [stay_may[0], 4], [stay_june[0], 5] ];
    stay_20 = [ [stay_feb[1], 1], [stay_march[1], 2], [stay_april[1], 3], [stay_may[1], 4], [stay_june[1], 5] ];
    stay_30 = [ [stay_feb[2], 1], [stay_march[2], 2], [stay_april[2], 3], [stay_may[2], 4], [stay_june[2], 5] ];
    stay_40 = [ [stay_feb[3], 1], [stay_march[3], 2], [stay_april[3], 3], [stay_may[3], 4], [stay_june[3], 5] ];

    yticks = ['2月', '3月', '4月', '5月', '6月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#stay_month').show();

      if(button_count == 1){
        jQuery . jqplot(
            'stay_month',
            [
                stay_10, stay_20, stay_30, stay_40

            ],
            {
                title: {
                    text: '宿泊有無/月別 母数：' + (stay_all_person) + '(人)',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F6D8CE', '#F2F5A9',  '#81F79F', '#2E9AFE'],

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
                    { label: '日帰り' },
                    { label: '1泊' },
                    { label: '2泊' },
                    { label: '3泊以上' }

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
