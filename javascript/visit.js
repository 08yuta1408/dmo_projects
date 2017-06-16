$(function(){




  jQuery.jqplot(
      'visit_gragh',
      [
          visit_times_feb, visit_times_march
      ],
      {
          animate: true,

          seriesDefaults: {
              renderer: jQuery . jqplot . BarRenderer,

              pointLabels: {
                   show: true,
                   location: 'n',
                   ypadding: -3,
                   escapeHTML: false,
                   formatString: '<b style="color: blue;">%d</b>'
               }
          },
          series: [
             { label: '2月' },
             { label: '3月' },

          ],
          legend: {
                show: true,
                placement: 'outsideGrid',
                location: 'e',
                renderer: jQuery . jqplot . EnhancedLegendRenderer,
                rendererOptions: {
                    numberColumns: 3
                }
            },


          seriesColors:[ '#00BFFF', '#FFB6C1' ],

          axes: {
              xaxis: {
                  renderer: jQuery . jqplot . CategoryAxisRenderer,

              },
              // 縦軸(y軸)
              yaxis:{
                  label: '人数(人)',
                  min: 0,
                  max: 100,
                  tickInterval: 10,
              }
          },
          title: {
                text: '2月・3月に富山を訪れた人の数',
                show: true,
                fontFamily: 'ＭＳ ゴシック',
                fontSize: '20px',
                textAlign: 'center',
                textColor: 'black',
                location: 's',
            }
      }
  );

  $('#redrawing').click(function(){
     $('.gra').hide();

     var gragh_character = '';

    $('input[name="month"]:checked').each(function(){
      gragh_character = gragh_character + $(this).val();
    });


    if(gragh_character == "2"){
      $('#visit_gragh_feb').show();
      jQuery.jqplot(
          'visit_gragh_feb',
          [
              visit_times_feb
          ],
          {
              animate: true,

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                       show: true,
                       location: 'n',
                       ypadding: -3,
                       escapeHTML: false,
                       formatString: '<b style="color: blue;">%d</b>'
                   }
              },
              series: [
                 { label: '2月' },
                 { label: '3月' },

              ],
              legend: {
                    show: true,
                    placement: 'outsideGrid',
                    location: 'e',
                    renderer: jQuery . jqplot . EnhancedLegendRenderer,
                    rendererOptions: {
                        numberColumns: 3
                    }
                },


              seriesColors:[ '#00BFFF', '#FFB6C1' ],

              axes: {
                  xaxis: {
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  },
                  // 縦軸(y軸)
                  yaxis:{
                      label: '人数(人)',
                      min: 0,
                      max: 100,
                      tickInterval: 10,
                  }
              },
              title: {
                    text: '2月に富山を訪れた人の数',
                    show: true,
                    fontFamily: 'ＭＳ ゴシック',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                    location: 's',
                }
          }
      );
    }

    else if(gragh_character == "3"){
      $('#visit_gragh_march').show();
      jQuery.jqplot(
          'visit_gragh_march',
          [
              visit_times_march
          ],
          {
              animate: true,

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                       show: true,
                       location: 'n',
                       ypadding: -3,
                       escapeHTML: false,
                       formatString: '<b style="color: blue;">%d</b>'
                   }
              },
              series: [
                //  { label: '2月' },
                 { label: '3月' },

              ],
              legend: {
                    show: true,
                    placement: 'outsideGrid',
                    location: 'e',
                    renderer: jQuery . jqplot . EnhancedLegendRenderer,
                    rendererOptions: {
                        numberColumns: 3
                    }
                },


              seriesColors:[ '#00BFFF', '#FFB6C1' ],

              axes: {
                  xaxis: {
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  },
                  // 縦軸(y軸)
                  yaxis:{
                      label: '人数(人)',
                      min: 0,
                      max: 100,
                      tickInterval: 10,
                  }
              },
              title: {
                    text: '3月に富山を訪れた人の数',
                    show: true,
                    fontFamily: 'ＭＳ ゴシック',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                    location: 's',
                }
          }
      );
    }

    else if(gragh_character == "23"){
      $('#visit_gragh').show();
      jQuery.jqplot(
          'visit_gragh',
          [
              visit_times_february, visit_times_march
          ],
          {
              animate: true,

              seriesDefaults: {
                  renderer: jQuery . jqplot . BarRenderer,

                  pointLabels: {
                       show: true,
                       location: 'n',
                       ypadding: -3,
                       escapeHTML: false,
                       formatString: '<b style="color: blue;">%d</b>'
                   }
              },
              series: [
                 { label: '2月' },
                 { label: '3月' },

              ],
              legend: {
                    show: true,
                    placement: 'outsideGrid',
                    location: 'e',
                    renderer: jQuery . jqplot . EnhancedLegendRenderer,
                    rendererOptions: {
                        numberColumns: 3
                    }
                },


              seriesColors:[ '#00BFFF', '#FFB6C1' ],

              axes: {
                  xaxis: {
                      renderer: jQuery . jqplot . CategoryAxisRenderer,

                  },
                  // 縦軸(y軸)
                  yaxis:{
                      label: '人数(人)',
                      min: 0,
                      max: 100,
                      tickInterval: 10,
                  }
              },
              title: {
                    text: '2月・3月に富山を訪れた人の数',
                    show: true,
                    fontFamily: 'ＭＳ ゴシック',
                    fontSize: '20px',
                    textAlign: 'center',
                    textColor: 'black',
                    location: 's',
                }
          }
      );
    }
  });

});
