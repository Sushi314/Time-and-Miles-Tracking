function deleteData(ss) {
  ss.getRange('A4:X').activate();
  ss.getActiveSheet().deleteRows(ss.getActiveRange().getRow(), ss.getActiveRange().getNumRows());
};