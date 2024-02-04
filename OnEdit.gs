// Change "buttonSheetName" to the sheet with the buttons
var buttonSheetName = 'Time Clock'

function onEdit(e) {
  var ss = SpreadsheetApp.getActive();
  var sheet = e.source.getActiveSheet()
  var sheetName = sheet.getName()
  var editRow = e.range.getRow()
  var editColumn = e.range.getColumn()
  var time = new Date()


  if (sheetName == buttonSheetName){
    var sheetTimer = ss.getSheetByName(buttonSheetName);

    // Depart, Onsite, Leaving, Return buttons
    if(editRow == 2 && editColumn == 1){
      var buttonSS = sheetTimer.getRange(2,1)  
      var a1 = sheetTimer.getRange("A1")
      var a1Value = a1.getValue()

      // When Depart is clicked
      if(a1Value == "Depart"){
        a1.setValue("Onsite")
        departButton(ss, buttonSS, sheetTimer, time)
      }

      // When Onsite is clicked
      if(a1Value == "Onsite"){
        a1.setValue("Leaving")
        onsiteButton(ss, buttonSS, sheetTimer, time)
      }

      // When Leaving is clicked
      if(a1Value == "Leaving"){
        a1.setValue("Return")
        leavingButton(ss, buttonSS, sheetTimer, time)
      }

      // When Return is clicked
      if(a1Value == "Return"){
        a1.setValue("Depart")
        returnButton(ss, buttonSS, sheetTimer, time)
      }
    }

    //Detour
    if (editRow == 2 && editColumn == 3){
      var buttonSS = sheetTimer.getRange('C2')  
      var c1 = sheetTimer.getRange("C1")
      var c1Value = c1.getValue()

      // When Start Detour is clicked
      if(c1Value == "Start Detour"){
        c1.setValue("End Detour")
        startDetourButton(ss, buttonSS, sheetTimer, time)
      }

      // When End Detour is clicked
      if(c1Value == "End Detour"){
        c1.setValue("Start Detour")
        endDetourButton(ss, buttonSS, sheetTimer, time)
      }
      
    }

    //Export and clear
    if (editRow == 2 && editColumn == 5){
      exportClearButton(ss, sheetTimer)
    }
  }

}

