$(function(){
  var sex_all_man = 0;
  var sex_all_woman = 0;

  //総数
  sex_all_man = man_feb + man_march + man_april + man_may + man_june;
  sex_all_woman = woman_feb + woman_march + woman_april + woman_may + woman_june;

  console.log(sex_all_man);
  console.log(sex_all_woman);

  //デフォルトは、総数グラフ
  jQuery . jqplot(
        'sex_sousu',

        [
            [
                //ここにデータの値を入力
                [ '男性:' + sex_all_man + '人', sex_all_man ],
                [ '女性:' + sex_all_woman + '人', sex_all_woman ],

            ]
        ],
        {
            title: {
                text: '居住地/総数 母数：' + (sex_all_man + sex_all_woman) + '(人)',
                show: true,
                fontFamily: 'HGP行書体, Serif',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
            },

            seriesColors:[ '#81DAF5', '#F78181' ],

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

    //月別用
    sex_feb = [ [ woman_feb, 1 ], [ man_feb, 2 ]];
    sex_march = [ [ woman_march, 1 ], [ man_march, 2 ]];
    sex_april = [ [ woman_april, 1 ], [ man_april, 2 ]];
    sex_may = [ [ woman_may, 1 ], [ man_may, 2 ]];
    sex_june = [ [ woman_june, 1 ], [ man_june, 2 ]];
    ticks = ['女性', '男性']

  //総数ボタンを押した
  $('#sosu').click(function(){
    $('.gragh').hide();
    $('#sex_sousu').show();
  });

  //月別ボタンを押した
  $('#month').click(function(){
    $('.gragh').hide();
    $('#sex_month').show();
    jQuery . jqplot(
        'sex_month',
        [
            sex_feb, sex_march, sex_april, sex_may, sex_june
        ],
        {
            title: {
                text: '居住地/月別 母数：' + (sex_all_man + sex_all_woman) + '(人)',
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
                { label: '2月' },
                { label: '3月' },
                { label: '4月' },
                { label: '5月' },
                { label: '6月' }
            ],

            legend: {
                show: true,
                location: 'e',
                rendererOptions: {
                    numberRows: 1
                },
            },

            axes: {
                xaxis:{
                  label: '人数',
                },

                yaxis: {

                    renderer: jQuery . jqplot . CategoryAxisRenderer,
                    ticks: ticks,
                }
            }
        }
    );
  });

});
