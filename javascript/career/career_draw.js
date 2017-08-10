$(function(){
  var career_all = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  var career_all_person = 0;     //母数の計算用

  //career_allに全ての月別結果を代入する
  for (var i = 0; i < career_all.length; i++) {
    switch (i) {
      case 0:
        career_all[i] = career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i];
        break;
      case 1:
        career_all[i] = career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i];
        break;
      case 2:
        career_all[i] = career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i];
        break;
      case 3:
        career_all[i] = career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i];
        break;
      case 4:
        career_all[i] = career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i];
        break;
      case 5:
        career_all[i] = career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i];
        break;
      case 6:
        career_all[i] = career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i];
        break;
      case 7:
        career_all[i] = career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i];
        break;
      case 8:
        career_all[i] = career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i];
        break;
      case 9:
        career_all[i] = career_feb[i] + career_march[i] + career_april[i] + career_may[i] +  career_june[i];
        break;

    }
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

    career_nourin = [ [career_feb[0], 1], [career_march[0], 2], [career_april[0], 3], [career_may[0], 4], [career_june[0], 5] ];
    career_kensetu = [ [career_feb[1], 1], [career_march[1], 2], [career_april[1], 3], [career_may[1], 4], [career_june[1], 5] ];
    career_seizou = [ [career_feb[2], 1], [career_march[2], 2], [career_april[2], 3], [career_may[2], 4], [career_june[2], 5] ];
    career_orosi = [ [career_feb[3], 1], [career_march[3], 2], [career_april[3], 3], [career_may[3], 4], [career_june[3], 5] ];
    career_kinyu = [ [career_feb[4], 1], [career_march[4], 2], [career_april[4], 3], [career_may[4], 4], [career_june[4], 5] ];
    career_fudousan = [ [career_feb[5], 1], [career_march[5], 2], [career_april[5], 3], [career_may[5], 4], [career_june[5], 5] ];
    career_tusin = [ [career_feb[6], 1], [career_march[6], 2], [career_april[6], 3], [career_may[6], 4], [career_june[6], 5] ];
    career_service = [ [career_feb[7], 1], [career_march[7], 2], [career_april[7], 3], [career_may[7], 4], [career_june[7], 5] ];
    career_koumuin = [ [career_feb[8], 1], [career_march[8], 2], [career_april[8], 3], [career_may[8], 4], [career_june[8], 5] ];
    career_others = [ [career_feb[9], 1], [career_march[9], 2], [career_april[9], 3], [career_may[9], 4], [career_june[9], 5] ];

    yticks = ['2月', '3月', '4月', '5月', '6月'];

    //月別ボタンを押した
    $('#month').click(function(){
      $('.gragh').hide();
      $('#career_month').show();

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

    });
});
