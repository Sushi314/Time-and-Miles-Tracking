function addDropdownToCell(targetCell, dropdownOptions) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var cell = sheet.getRange(targetCell);

  // Create data validation rule
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(dropdownOptions).build();

  // Apply data validation to the cell
  cell.setDataValidation(rule);
}
