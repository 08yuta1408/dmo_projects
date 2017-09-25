$(function(){
  var from_info = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      ////index番号順に、富山県のホームページ(富山観光ナビなど)、富山県のパンフレット(観光季刊誌「ねまるちゃ」など)、旅行会社のパンフレット、旅行ガイドブック、旅行会社のウェブサイト、ネット専門の旅行予約サイト、宿泊施設のウェブサイト、SNS（Facebook、Twitter 等）、知人の口コミ、テレビ・ラジオ（映画、ドラマ等も含む）、その他

  //集計
  for (var i = 0; i < from_info.length; i++) {
    from_info[i] = from_info_2016_october[i] + from_info_2016_november[i] + from_info_2016_december[i] + from_info_2017_january[i] + from_info_feb[i] + from_info_march[i] + from_info_april[i] + from_info_may[i] + from_info_june[i] + from_info_2017_july[i] +　from_info_2017_august[i];
  }
  console.log("集計結果 情報入手先");
  for (var i = 0; i < from_info.length; i++) {
    console.log(from_info[i]);
  }

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'from_info_sousu',

        [
            [
                //ここにデータの値を入力
                [ '富山県のホームページ(富山観光ナビなど):' + from_info[0] + '人', from_info[0] ],
                [ '富山県のパンフレット(観光季刊誌「ねまるちゃ」など):' + from_info[1] + '人', from_info[1] ],
                [ '旅行会社のパンフレット:' + from_info[2] + '人', from_info[2] ],
                [ '旅行ガイドブック:' + from_info[3] + '人', from_info[3] ],
                [ '旅行会社のウェブサイト:' + from_info[4] + '人', from_info[4] ],
                [ 'ネット専門の旅行予約サイト:' + from_info[5] + '人', from_info[5] ],
                [ '宿泊施設のウェブサイト:' + from_info[6] + '人', from_info[6] ],
                [ 'SNS（Facebook、Twitter 等）:' + from_info[7] + '人', from_info[7] ],
                [ '知人の口コミ:' + from_info[8] + '人', from_info[8] ],
                [ 'テレビ・ラジオ（映画、ドラマ等も含む）:' + from_info[9] + '人', from_info[9] ],
                [ 'その他:' + from_info[10] + '人', from_info[10] ],


            ]
        ],
        {
            title: {
                text: '観光情報入手先 / 総数 ',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#F78181', '#F79F81', '#F7BE81', '#F5DA81', '#F3F781', '#D8F781', '#9FF781', '#81F7F3', '#819FF7', '#DA81F5', '#D8D8D8'],

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
      $('#from_info_sousu').fadeIn(500);
    });

    from_info_1 = [ [from_info_2016_october[0], 1], [from_info_2016_november[0], 2], [from_info_2016_december[0], 3], [from_info_2017_january[0], 4], [from_info_feb[0], 5], [from_info_march[0], 6], [from_info_april[0], 7], [from_info_may[0], 8], [from_info_june[0], 9], [from_info_2017_july[0], 10], [from_info_2017_august[0], 11] ];
    from_info_2 = [ [from_info_2016_october[1], 1], [from_info_2016_november[1], 2], [from_info_2016_december[1], 3], [from_info_2017_january[1], 4], [from_info_feb[1], 5], [from_info_march[1], 6], [from_info_april[1], 7], [from_info_may[1], 8], [from_info_june[1], 9], [from_info_2017_july[1], 10], [from_info_2017_august[1], 11] ];
    from_info_3 = [ [from_info_2016_october[2], 1], [from_info_2016_november[2], 2], [from_info_2016_december[2], 3], [from_info_2017_january[2], 4], [from_info_feb[2], 5], [from_info_march[2], 6], [from_info_april[2], 7], [from_info_may[2], 8], [from_info_june[2], 9], [from_info_2017_july[2], 10], [from_info_2017_august[2], 11] ];
    from_info_4 = [ [from_info_2016_october[3], 1], [from_info_2016_november[3], 2], [from_info_2016_december[3], 3], [from_info_2017_january[3], 4], [from_info_feb[3], 5], [from_info_march[3], 6], [from_info_april[3], 7], [from_info_may[3], 8], [from_info_june[3], 9], [from_info_2017_july[3], 10], [from_info_2017_august[3], 11] ];
    from_info_5 = [ [from_info_2016_october[4], 1], [from_info_2016_november[4], 2], [from_info_2016_december[4], 3], [from_info_2017_january[4], 4], [from_info_feb[4], 5], [from_info_march[4], 6], [from_info_april[4], 7], [from_info_may[4], 8], [from_info_june[4], 9], [from_info_2017_july[4], 10], [from_info_2017_august[4], 11] ];
    from_info_6 = [ [from_info_2016_october[5], 1], [from_info_2016_november[5], 2], [from_info_2016_december[5], 3], [from_info_2017_january[5], 4], [from_info_feb[5], 5], [from_info_march[5], 6], [from_info_april[5], 7], [from_info_may[5], 8], [from_info_june[5], 9], [from_info_2017_july[5], 10], [from_info_2017_august[5], 11] ];
    from_info_7 = [ [from_info_2016_october[6], 1], [from_info_2016_november[6], 2], [from_info_2016_december[6], 3], [from_info_2017_january[6], 4], [from_info_feb[6], 5], [from_info_march[6], 6], [from_info_april[6], 7], [from_info_may[6], 8], [from_info_june[6], 9], [from_info_2017_july[6], 10], [from_info_2017_august[6], 11] ];
    from_info_8 = [ [from_info_2016_october[7], 1], [from_info_2016_november[7], 2], [from_info_2016_december[7], 3], [from_info_2017_january[7], 4], [from_info_feb[7], 5], [from_info_march[7], 6], [from_info_april[7], 7], [from_info_may[7], 8], [from_info_june[7], 9], [from_info_2017_july[7], 10], [from_info_2017_august[7], 11] ];
    from_info_9 = [ [from_info_2016_october[8], 1], [from_info_2016_november[8], 2], [from_info_2016_december[8], 3], [from_info_2017_january[8], 4], [from_info_feb[8], 5], [from_info_march[8], 6], [from_info_april[8], 7], [from_info_may[8], 8], [from_info_june[8], 9], [from_info_2017_july[8], 10], [from_info_2017_august[8], 11] ];
    from_info_10 = [ [from_info_2016_october[9], 1], [from_info_2016_november[9], 2], [from_info_2016_december[9], 3], [from_info_2017_january[9], 4], [from_info_feb[9], 5], [from_info_march[9], 6], [from_info_april[9], 7], [from_info_may[9], 8], [from_info_june[9], 9], [from_info_2017_july[9], 10], [from_info_2017_august[9], 11] ];
    from_info_11 = [ [from_info_2016_october[10], 1], [from_info_2016_november[10], 2], [from_info_2016_december[10], 3], [from_info_2017_january[10], 4], [from_info_feb[10], 5], [from_info_march[10], 6], [from_info_april[10], 7], [from_info_may[10], 8], [from_info_june[10], 9], [from_info_2017_july[10], 10], [from_info_2017_august[10], 11] ];

    yticks = ['2016/10月', '2016/11月', '2016/12月', '2017/ 1月', '2017/ 2月', '2017/ 3月', '2017/ 4月', '2017/ 5月', '2017/ 6月', '2017/ 7月', '2017/ 8月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#from_info_month').fadeIn();

      if(button_count == 1){
        jQuery . jqplot(
            'from_info_month',
            [
                from_info_1, from_info_2, from_info_3, from_info_4, from_info_5, from_info_6, from_info_7, from_info_8, from_info_9, from_info_10, from_info_11

            ],
            {
                title: {
                    text: '観光情報入手先 / 月別 ',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#F78181', '#F79F81', '#F7BE81', '#F5DA81', '#F3F781', '#D8F781', '#9FF781', '#81F7F3', '#819FF7', '#DA81F5', '#D8D8D8'],

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
                    { label: '富山県のホームページ(富山観光ナビなど)' },
                    { label: '富山県のパンフレット(観光季刊誌「ねまるちゃ」など)' },
                    { label: '旅行会社のパンフレット' },
                    { label: '旅行ガイドブック' },
                    { label: '旅行会社のウェブサイト' },
                    { label: 'ネット専門の旅行予約サイト' },
                    { label: '宿泊施設のウェブサイト' },
                    { label: 'SNS（Facebook、Twitter 等）' },
                    { label: '知人の口コミ' },
                    { label: 'テレビ・ラジオ（映画、ドラマ等も含む）' },
                    { label: 'その他' }
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
