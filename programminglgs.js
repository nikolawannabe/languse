      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var languages =
          ['Hypercard','C/C++','Matlab','Python','Scheme','Prolog','C#','PHP','Ada','Java','F#','Oz','Ruby','Javascript'];
        var years = ['2001', '2002', '2003', '2004', '2005', '2006','2007','2008','2009','2010','2011','2012'];
        var programmingUnitsByLanguage = [[2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                                          [0,  4,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                                          [0,  4,  0,  4,  4,  1,  2,  6,  0,  0,  0,  0,  0,  0],
                                          [0,  1,  0,  2,  1,  0,  0,  4,  0,  0,  0,  0,  0,  0],
                                          [0,  1,  0,  1,  0,  0,  2,  4,  2,  2,  0,  0,  0,  0],
                                          [0,  3,  0,  1,  1,  0,  1,  16,  0,  4,  0,  0,  0, 0],
                                          [0,  3,  0,  1,  0,  0,  1,  12,  0,  0,  0,  1,  0, 0],
                                          [0,  2,  0,  1,  0,  0,  2,  10,  0,  2,  4,  0,  0, 0],
                                          [0,  0,  0,  1,  0,  0,  16,  0,  0,  0,  0,  0,  2, 2],
                                          [0,  0,  0,  0,  0,  0,  16,  0,  0,  0,  0,  0,  0, 16],
                                          [0,  0,  0,  0,  0,  0,  16,  0,  0,  0,  0,  0,  0, 16],
										  [0, 0,   0,  0,  0,  0,  24,   0,  0,  0,  0,  0,  0, 8]];
        
        var invertedProgrammingLanguages = new Array()
        for (var x = 0; x < programmingUnitsByLanguage[0].length; x++)
        {
          invertedProgrammingLanguages[x] = new Array();
        }
        for (var x = 0; x < programmingUnitsByLanguage.length; x++)
        {
          for (var y = 0; y < programmingUnitsByLanguage[x].length; y++)
          {
            invertedProgrammingLanguages[y][x] = programmingUnitsByLanguage[x][y];
          }
        }
      
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        for (var i = 0; i < languages.length; ++i) {
          data.addColumn('number', languages[i]);
        }
        data.addRows(years.length);
        for (var i = 0; i < years.length; ++i) {
          data.setCell(i, 0, years[i]);
        }
        for (var i = 0; i < languages.length; ++i) {
          var language = invertedProgrammingLanguages[i];
          for (var year = 0; year < years.length; ++year) {
            data.setCell(year, i + 1, language[year]);
          }
        }
        // Create and draw the visualization.
        var ac = new google.visualization.AreaChart(document.getElementById('visualization'));
        ac.draw(data, {
          title : 'Programming Hours By Language',
          isStacked: true,
          width: 450,
          height: 700,
          vAxis: {title: "Units of Work"},
          hAxis: {title: "Year"}
        });
      }
      

      google.setOnLoadCallback(drawVisualization);
