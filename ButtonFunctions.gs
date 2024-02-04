var clientCell = 'A4';
var startingMileageCell = 'B4';
var mileageBetweenClientsCell = 'C4';
var endingMileageCell = 'D4';
var departCell = 'E4';
var onsiteCell = 'F4';
var leavingCell = 'G4';
var returnCell = 'H4';
var dateCell = 'I4';
var workMilesCell = 'J4';
var milesBetweenClientsCell = 'K4';
var startDetourCell = 'L4';
var endDetourCell = 'M4';
var commentsCell = 'N4';
var mileageWhenGasFilledCell = 'O4';
var gasGallonsCell = 'P4';
var costOfGasCell = 'Q4';
var costPerGallonCell = 'R4';

var clientDropdownOptions = ["JuTa", "LuSt", "JePe"];
var timeRange1 = departCell + ':' + returnCell;
var timeRange2 =  startDetourCell + ':' + endDetourCell ;


function departButton(ss, buttonSS, sheetTimer, time) {
  buttonSS.setBackground("#FF7326")
  buttonSS.setFontColor("#FF7327")
  sheetTimer.insertRowsAfter(3,1)
  sheetTimer.getRange(departCell).setValue(time)
  sheetTimer.getRange(dateCell).setValue(time)
  formatCells(ss);
  formatCellDate(ss, dateCell, timeRange1, timeRange2);
  formatCommentCell(ss, commentsCell);

  //Sets formula for cell
  ss.getRange(workMilesCell).activate();
  ss.getCurrentCell().setValue('=IF(OR(' + startingMileageCell + ' <= 1,'+ endingMileageCell + ' <= 1),0,'+ endingMileageCell + '-' + startingMileageCell + ')');

  //Sets formula for cell
  ss.getRange(milesBetweenClientsCell).activate();
  ss.getCurrentCell().setValue('=IF(OR(' + startingMileageCell + ' <= 1,'+ endingMileageCell + ' <= 1,'+ mileageBetweenClientsCell + ' <= 1),0,'+ mileageBetweenClientsCell + '-' + startingMileageCell + ')');

  addDropdownToCell(clientCell, clientDropdownOptions);
 
  //Sets active cell to A4 after functions run dont change
  ss.getRange('A4').activate();
}

function onsiteButton(ss, buttonSS, sheetTimer, time) {
  buttonSS.setBackground("#FF194D")
  buttonSS.setFontColor("#FF194E")
  sheetTimer.getRange(onsiteCell).setValue(time)
  
  //Sets active cell to A4 after functions run dont change
  ss.getRange('A4').activate();
}

function leavingButton(ss, buttonSS, sheetTimer, time) {
  buttonSS.setBackground("#BF2669")
  buttonSS.setFontColor("#BF266A")
  sheetTimer.getRange(leavingCell).setValue(time)
}

function returnButton(ss, buttonSS, sheetTimer, time) {
  buttonSS.setBackground("#702A8C")
  buttonSS.setFontColor("#702A8D")
  sheetTimer.getRange(returnCell).setValue(time)

  //Sets active cell to A4 after functions run dont change
  ss.getRange('A4').activate();
}

function startDetourButton(ss, buttonSS, sheetTimer, time) {
  buttonSS.setBackground("#702A8C")
  buttonSS.setFontColor("#702A8D")
  sheetTimer.getRange(startDetourCell).setValue(time)

  //Sets active cell to A4 after functions run dont change
  ss.getRange('A4').activate();
}

function endDetourButton(ss, buttonSS, sheetTimer, time) {
  buttonSS.setBackground("#702A8C")
  buttonSS.setFontColor("#702A8D")
  sheetTimer.getRange(endDetourCell).setValue(time)

  //Sets active cell to A4 after functions run dont change
  ss.getRange('A4').activate();
}


function exportClearButton(ss, sheetTimer){
  var buttonClear = sheetTimer.getRange(2,5)

  buttonClear.setBackground("#cc0000")
  buttonClear.setFontColor("#f4cccc")

  copyData(ss,'All Data');
  allDataFormating(ss, 'All Data')

  sheetTimer.getRange('E2').activate();
  ss.getCurrentCell().setValue('FALSE');
  
  buttonClear.setBackground("#f4cccc")
  buttonClear.setFontColor("#cc0000")

  sheetTimer.getRange('G2').activate();
  ss.getCurrentCell().setValue('00:00:00')

  deleteData(ss);

  //Sets active cell to A4 after functions run dont change
  ss.getRange('A4').activate();
  
}