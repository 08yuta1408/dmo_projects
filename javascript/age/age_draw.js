$(function(){
  var age_all = [0, 0, 0, 0, 0, 0, 0, 0];     //index番号順に、20代未満・20代・30代・40代・50代・60代・70代・80代以上

  var age_all_person = 0;     //母数の計算用

  //age_allに全ての月別結果を代入する
  for (var i = 0; i < age_all.length; i++) {
    age_all[i] = age_feb[i] + age_march[i] + age_april[i] + age_may[i] +  age_june[i];
  }

  for (var i = 0; i < age_all.length; i++) {
    age_all_person += age_all[i];
  }

  for (var i = 0; i < age_all.length; i++) {
    console.log(((i + 1) * 10) + "代：" + age_all[i] + "人");
  }
  console.log("母数：" + age_all_person + "人");

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'age_sousu',

        [
            [
                //ここにデータの値を入力
                [ '20代未満:' + age_all[0] + '人', age_all[0] ],
                [ '20代:' + age_all[1] + '人', age_all[1] ],
                [ '30代:' + age_all[2] + '人', age_all[2] ],
                [ '40代:' + age_all[3] + '人', age_all[3] ],
                [ '50代:' + age_all[4] + '人', age_all[4] ],
                [ '60代:' + age_all[5] + '人', age_all[5] ],
                [ '70代:' + age_all[6] + '人', age_all[6] ],
                [ '80代以上:' + age_all[7] + '人', age_all[7] ],


            ]
        ],
        {
            title: {
                text: '年齢/総数 母数：' + (age_all_person) + '(人)',
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
                    numberRows: 1
                },
            }
        }
    );


    //総数ボタンを押した
    $('#sosu').click(function(){
      $('.gragh').hide();
      $('#age_sousu').show();
    });

    age_10 = [ [age_feb[0], 1], [age_march[0], 2], [age_april[0], 3], [age_may[0], 4], [age_june[0], 5] ];
    age_20 = [ [age_feb[1], 1], [age_march[1], 2], [age_april[1], 3], [age_may[1], 4], [age_june[1], 5] ];
    age_30 = [ [age_feb[2], 1], [age_march[2], 2], [age_april[2], 3], [age_may[2], 4], [age_june[2], 5] ];
    age_40 = [ [age_feb[3], 1], [age_march[3], 2], [age_april[3], 3], [age_may[3], 4], [age_june[3], 5] ];
    age_50 = [ [age_feb[4], 1], [age_march[4], 2], [age_april[4], 3], [age_may[4], 4], [age_june[4], 5] ];
    age_60 = [ [age_feb[5], 1], [age_march[5], 2], [age_april[5], 3], [age_may[5], 4], [age_june[5], 5] ];
    age_70 = [ [age_feb[6], 1], [age_march[6], 2], [age_april[6], 3], [age_may[6], 4], [age_june[6], 5] ];
    age_80 = [ [age_feb[7], 1], [age_march[7], 2], [age_april[7], 3], [age_may[7], 4], [age_june[7], 5] ];
    yticks = ['2月', '3月', '4月', '5月', '6月'];

    var button_count = 0;
    //月別ボタンを押した
    $('#month').click(function(){
      button_count++;
      $('.gragh').hide();
      $('#age_month').show();

      if(button_count == 1){
        jQuery . jqplot(
            'age_month',
            [
                age_10, age_20, age_30, age_40, age_50, age_60, age_70, age_80

            ],
            {
                title: {
                    text: '年齢/月別 母数：' + (age_all_person) + '(人)',
                    show: true,
                    fontFamily: 'HGP行書体, Serif',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                },

                stackSeries: true,

                seriesColors:[ '#E2A9F3', '#BCA9F5', '#2E9AFE', '#2EFE9A', '#F7FE2E' ],

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
                    { label: '20代未満' },
                    { label: '20代' },
                    { label: '30代' },
                    { label: '40代' },
                    { label: '50代' },
                    { label: '60代' },
                    { label: '70代' },
                    { label: '80代以上' }
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
