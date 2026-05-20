// === Google Apps Script 服务端代码（API模式）===
// 将此代码粘贴到 Google Sheet 的 Apps Script 编辑器中
// 此版本通过 doPost 接收外部表单提交，兼容所有设备

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var result = saveData(data);
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  // GET请求也支持（用于测试）
  return ContentService.createTextOutput(JSON.stringify({status: 'ok', message: '工业评估表API正常运行'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function saveData(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('评估结果');
  
  if (!sheet) {
    sheet = ss.insertSheet('评估结果');
    var headers = [
      '提交时间', '评估人', '被评估班组',
      '出油率(20)', '仁得率(20)', '成本(20)', '油损(20)', '满负荷率(20)', '安全(-20/0)',
      '组织结构完整性(0-20)', '新老员工比例(0-20)', '梯队建设(0-20)', '人员储备(0-20)', '安全管理(0-20)',
      '技术改造(20)', '技术创新(20)', '柴油vs新能源(20)', '工业指标突破(20)', '污水合格(20)',
      '工业目标得分', '团队建设得分', '技术突破得分', '总分', '评级', '补充意见'
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  
  var row = [
    new Date().toLocaleString('zh-CN'),
    data.voter,
    data.team || ''
  ];
  
  for (var i = 0; i < data.scores.length; i++) {
    row.push(data.scores[i]);
  }
  
  row.push(data.mod1Total);
  row.push(data.mod2Total);
  row.push(data.mod3Total);
  row.push(data.grandTotal);
  row.push(data.grade);
  row.push(data.comments || '');
  
  sheet.appendRow(row);
  
  return { success: true, message: '提交成功！' };
}
