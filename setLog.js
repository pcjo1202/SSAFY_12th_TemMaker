const fs = require('fs');

function getYesterDayKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();

  return `${year}-${month}-${day - 1}`; // 날짜를 문자열로 반환
}

function getTodayKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();

  return `${year}-${month}-${day}`; // 날짜를 문자열로 반환
}

function flattenData(array) {
  // 하나의 배열로 만듬
  let data = [];

  array.map((arr) => {
    arr.map((each) => {
      data.push(each);
    });
  });

  return data;
}

function saveTeams(teams) {
  let data = {};
  const filePath = './logs/logs.json';

  // 기존 파일이 있으면 데이터를 불러옴
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath);
    data = JSON.parse(fileData);
  }

  const todayKey = getTodayKey(); // 오늘 날짜를 키로 사용

  if (Object.keys(data).includes(todayKey)) {
    return;
  }

  data[todayKey] = {
    date: todayKey,
    data: flattenData(teams),
  };

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // 데이터를 파일에 저장 (2는 JSON 정렬)
}

function loadPreviousTeams() {
  const filePath = './logs/logs.json';
  const dateKey = getYesterDayKey();

  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    if (Object.keys(data).length != 0) {
      data[dateKey] && console.log('어제 날짜 발견!! 어제 팀으로 셔플합니다.');

      return data[dateKey] || null; // 어제 날짜의 데이터를 반환
    }
  }

  console.log('어제 팀을 발견하지 못했으므로, default data 사용합니다.');

  return null; // 파일이 없으면 null 반환
}

module.exports = { saveTeams, loadPreviousTeams };
