$(function(){
  var stay_with_all = [0, 0, 0, 0, 0, 0];     //index番号順に、日帰り、１泊、２泊、３泊以上

  var stay_with_all_person = 0;     //母数の計算用

  //stay_with_allに全ての月別結果を代入する
  for (var i = 0; i < stay_with_all.length; i++) {
    switch (i) {
      case 0:
        stay_with_all[i] = stay_with_feb[i] + stay_with_march[i] + stay_with_april[i] + stay_with_may[i] +  stay_with_june[i];
        break;
      case 1:
        stay_with_all[i] = stay_with_feb[i] + stay_with_march[i] + stay_with_april[i] + stay_with_may[i] +  stay_with_june[i];
        break;
      case 2:
        stay_with_all[i] = stay_with_feb[i] + stay_with_march[i] + stay_with_april[i] + stay_with_may[i] +  stay_with_june[i];
        break;
      case 3:
        stay_with_all[i] = stay_with_feb[i] + stay_with_march[i] + stay_with_april[i] + stay_with_may[i] +  stay_with_june[i];
        break;
      case 4:
        stay_with_all[i] = stay_with_feb[i] + stay_with_march[i] + stay_with_april[i] + stay_with_may[i] +  stay_with_june[i];
        break;
      case 5:
        stay_with_all[i] = stay_with_feb[i] + stay_with_march[i] + stay_with_april[i] + stay_with_may[i] +  stay_with_june[i];
        break;

    }
  }

  for (var i = 0; i < stay_with_all.length; i++) {
    stay_with_all_person += stay_with_all[i];
  }

  // for (var i = 0; i < stay_with_all.length; i++) {
  //   console.log(((i + 1) * 10) + "代：" + stay_with_all[i] + "人");
  // }
  // console.log("母数：" + stay_with_all_person + "人");

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'stay_with_sousu',

        [
            [
                //ここにデータの値を入力
                [ '一人旅行:' + stay_with_all[0] + '人', stay_with_all[0] ],
                [ '夫婦・カップル:' + stay_with_all[1] + '人', stay_with_all[1] ],
                [ '家族・親子:' + stay_with_all[2] + '人', stay_with_all[2] ],
                [ '友人:' + stay_with_all[3] + '人', stay_with_all[3] ],
                [ '職場・学校等の団体旅行:' + stay_with_all[4] + '人', stay_with_all[4] ],
                [ 'その他:' + stay_with_all[5] + '人', stay_with_all[5] ],
            ]
        ],
        {
            title: {
                text: '同行者属性/総数 母数：' + (stay_with_all_person) + '(人)',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7'],

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
      $('#stay_with_sousu').show();
    });

    stay_with_1 = [ [stay_with_feb[0], 1], [stay_with_march[0], 2], [stay_with_april[0], 3], [stay_with_may[0], 4], [stay_with_june[0], 5] ];
    stay_with_2 = [ [stay_with_feb[1], 1], [stay_with_march[1], 2], [stay_with_april[1], 3], [stay_with_may[1], 4], [stay_with_june[1], 5] ];
    stay_with_3 = [ [stay_with_feb[2], 1], [stay_with_march[2], 2], [stay_with_april[2], 3], [stay_with_may[2], 4], [stay_with_june[2], 5] ];
    stay_with_4 = [ [stay_with_feb[3], 1], [stay_with_march[3], 2], [stay_with_april[3], 3], [stay_with_may[3], 4], [stay_with_june[3], 5] ];
    stay_with_5 = [ [stay_with_feb[4], 1], [stay_with_march[4], 2], [stay_with_april[4], 3], [stay_with_may[4], 4], [stay_with_june[4], 5] ];
    stay_with_6 = [ [stay_with_feb[5], 1], [stay_with_march[5], 2], [stay_with_april[5], 3], [stay_with_may[5], 4], [stay_with_june[5], 5] ];


    yticks = ['2月', '3月', '4月', '5月', '6月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#stay_with_month').show();

      if(button_count == 1){
        jQuery . jqplot(
            'stay_with_month',
            [
                stay_with_1, stay_with_2, stay_with_3, stay_with_4, stay_with_5, stay_with_6

            ],
            {
                title: {
                    text: '同行者属性/月別 母数：' + (stay_with_all_person) + '(人)',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F6D8CE', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7'],

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
                    { label: '一人旅行' },
                    { label: '夫婦・カップル' },
                    { label: '家族・親子' },
                    { label: '友人' },
                    { label: '職場・学校等の団体旅行' },
                    { label: 'その他' },

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
                      max : 650,
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
