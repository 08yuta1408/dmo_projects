$(function(){
  var career_all = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  var career_all_person = 0;     //母数の計算用

  //career_allに全ての月別結果を代入する
  for (var i = 0; i < career_all.length; i++) {
      career_all[i] = career_2016_october[i] + career_2016_november[i] + career_2016_december[i] + career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i] + career_2017_july[i] +  career_2017_august[i];
  }

  //母数の計算
  for (var i = 0; i < career_all.length; i++) {
    career_all_person += career_all[i];
  }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'career_sousu',

        [
            [
                //ここにデータの値を入力
                [ '農林水産・鉱業:' + career_all[0] + '人', career_all[0] ],
                [ '建設業:' + career_all[1] + '人', career_all[1] ],
                [ '製造業:' + career_all[2] + '人', career_all[2] ],
                [ '卸・小売・飲食業:' + career_all[3] + '人', career_all[3] ],
                [ '金融・保険業:' + career_all[4] + '人', career_all[4] ],
                [ '不動産業:' + career_all[5] + '人', career_all[5] ],
                [ '運輸・通信業:' + career_all[6] + '人', career_all[6] ],
                [ 'サービス業:' + career_all[7] + '人', career_all[7] ],
                [ '公務員:' + career_all[8] + '人', career_all[8] ],
                [ 'その他・該当なし:' + career_all[9] + '人', career_all[9] ],


            ]
        ],
        {
            title: {
                text: '職業/総数 母数：' + (career_all_person) + '(人)',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

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
      $('#career_sousu').show();
    });

    career_nourin = [ [career_2016_october[0], 1], [career_2016_november[0], 2], [career_2016_december[0], 3], [career_2017_january[0], 4], [career_feb[0], 5], [career_march[0], 6], [career_april[0], 7], [career_may[0], 8], [career_june[0], 9], [career_2017_july[0], 10], [career_2017_august[0], 11] ];
    career_kensetu = [ [career_2016_october[1], 1], [career_2016_november[1], 2], [career_2016_december[1], 3], [career_2017_january[1], 4], [career_feb[1], 5], [career_march[1], 6], [career_april[1], 7], [career_may[1], 8], [career_june[1], 9], [career_2017_july[1], 10], [career_2017_august[1], 11] ];
    career_seizou = [ [career_2016_october[2], 1], [career_2016_november[2], 2], [career_2016_december[2], 3], [career_2017_january[2], 4], [career_feb[2], 5], [career_march[2], 6], [career_april[2], 7], [career_may[2], 8], [career_june[2], 9], [career_2017_july[2], 10], [career_2017_august[2], 11] ];
    career_orosi = [ [career_2016_october[3], 1], [career_2016_november[3], 2], [career_2016_december[3], 3], [career_2017_january[3], 4], [career_feb[3], 5], [career_march[3], 6], [career_april[3], 7], [career_may[3], 8], [career_june[3], 9], [career_2017_july[3], 10], [career_2017_august[3], 11] ];
    career_kinyu = [ [career_2016_october[4], 1], [career_2016_november[4], 2], [career_2016_december[4], 3], [career_2017_january[4], 4], [career_feb[4], 5], [career_march[4], 6], [career_april[4], 7], [career_may[4], 8], [career_june[4], 9], [career_2017_july[4], 10], [career_2017_august[4], 11] ];
    career_fudousan = [ [career_2016_october[5], 1], [career_2016_november[5], 2], [career_2016_december[5], 3], [career_2017_january[5], 4], [career_feb[5], 5], [career_march[5], 6], [career_april[5], 7], [career_may[5], 8], [career_june[5], 9], [career_2017_july[5], 10], [career_2017_august[5], 11] ];
    career_tusin = [ [career_2016_october[6], 1], [career_2016_november[6], 2], [career_2016_december[6], 3], [career_2017_january[6], 4], [career_feb[6], 5], [career_march[6], 6], [career_april[6], 7], [career_may[6], 8], [career_june[6], 9], [career_2017_july[6], 10], [career_2017_august[6], 11] ];
    career_service = [ [career_2016_october[7], 1], [career_2016_november[7], 2], [career_2016_december[7], 3], [career_2017_january[7], 4], [career_feb[7], 5], [career_march[7], 6], [career_april[7], 7], [career_may[7], 8], [career_june[7], 9], [career_2017_july[7], 10], [career_2017_august[7], 11] ];
    career_koumuin = [ [career_2016_october[8], 1], [career_2016_november[8], 2], [career_2016_december[8], 3], [career_2017_january[8], 4], [career_feb[8], 5], [career_march[8], 6], [career_april[8], 7], [career_may[8], 8], [career_june[8], 9], [career_2017_july[8], 10], [career_2017_august[8], 11] ];
    career_others = [ [career_2016_october[9], 1], [career_2016_november[9], 2], [career_2016_december[9], 3], [career_2017_january[9], 4], [career_feb[9], 5], [career_march[9], 6], [career_april[9], 7], [career_may[9], 8], [career_june[9], 9], [career_2017_july[9], 10], [career_2017_august[9], 11] ];

    yticks = ['2016/10月','2016/11月','2016/12月','2017/ 1月','2017/ 2月','2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月','2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      $('.gragh').hide();
      $('#career_month').show();
      button_count++;

      if(button_count == 1){
        jQuery . jqplot(
            'career_month',
            [
                career_nourin, career_kensetu, career_seizou, career_orosi, career_kinyu, career_fudousan, career_tusin, career_service, career_koumuin, career_others

            ],
            {
                title: {
                    text: '職業/月別 母数：' + (career_all_person) + '(人)',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[  '#F78181','#F79F81', '#F6CED8', '#F2F5A9', '#D0F5A9', '#81F79F', '#81F7F3', '#9F81F7', '#F5A9D0', '#D8D8D8'],

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
                    { label: '農林水産・鉱業' },
                    { label: '建設業' },
                    { label: '製造業' },
                    { label: '卸・小売・飲食業' },
                    { label: '金融・保険業' },
                    { label: '不動産業' },
                    { label: '運輸・通信業' },
                    { label: 'サービス業' },
                    { label: '公務員' },
                    { label: 'その他・該当なし' }
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
      }

    });
});
