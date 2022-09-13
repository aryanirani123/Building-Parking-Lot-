function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('FilterWhole');
  htmlOutput.search = '';
  return htmlOutput.evaluate();
}

function doPost(e) {
  
  Logger.log(JSON.stringify(e));
  var search = e.parameter.search;
  var htmlOutput =  HtmlService.createTemplateFromFile('FilterWhole');
  htmlOutput.search = search;
  return htmlOutput.evaluate();     

}

function getSheetData()  { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName('Building Parking List'); 
  var dataRange = dataSheet.getDataRange();
  var dataValues = dataRange.getValues();  
  return dataValues;
}

function getUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}
