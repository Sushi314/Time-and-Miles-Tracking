function copyData(ss, sheetName) {
  var targetSheet = ss.getSheetByName(sheetName);

  if (targetSheet) {
    var timerSheet = ss.getSheetByName('Time Clock');
    var timerData = timerSheet.getRange('A4:Q' + timerSheet.getLastRow()).getValues();
    
    var targetData = targetSheet.getRange('A2:Q' + targetSheet.getLastRow()).getValues();

    // Iterate through each row in 'Timer!A4:Q'
    for (var i = 0; i < timerData.length; i++) {
      var rowExists = false;

      // Check if the current row from 'Timer!A4:I' already exists in 'All Data'
      for (var j = 0; j < targetData.length; j++) {
        if (JSON.stringify(timerData[i]) === JSON.stringify(targetData[j])) {
          rowExists = true;
          break;
        }
      }

      if (!rowExists) {
        // Data doesn't exist in 'All Data', so copy it
        targetSheet.appendRow(timerData[i]);
      }
    }
  } else {
    Logger.log("Function copyData: Sheet '" + sheetName + "' not found.");
  }
}

