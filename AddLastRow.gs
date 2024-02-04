function addLastRow(ss, targetSheetName) {

  if (targetSheetName) {
    var lastRow = targetSheet.getLastRow();
    targetSheet.insertRowAfter(lastRow);
    return lastRow + 1;
  } else {
    Logger.log("function addLastRow: Sheet '" + targetSheetName + "' not found.");
    return null;
  }
}