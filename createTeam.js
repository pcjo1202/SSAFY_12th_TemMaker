const { saveTeams } = require('./setLog');

function shuffle(array = []) {
  for (let i = array.length - 1; i > 0; i--) {
    // i와 0 사이에서 랜덤한 인덱스 선택
    const j = Math.floor(Math.random() * (i + 1));
    // 두 요소를 스왑
    [array[i], array[j]] = [array[j], array[i]];
  }
  // 최종 셔플 후 다시 한 번 랜덤하게 교환
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const shift = (array = []) => {
  const newArr = [];
  // 1. 각 열번호에 따라 0, 1, 2, 3 칸 아래로 밀기
  for (let i = 0; i < array.length; i++) {
    let newIdx = i + (i % 4) * 4;

    if (newIdx > array.length) {
      newIdx = newIdx % array.length;
    }

    newArr[newIdx] = array[i];
  }

  // 2. 각 행에 랜덤적으로 옆으로 밀기
  // for (let i = 0; i < array.length; i++) {
  //
  // }
  return newArr;
};

function createTeams(array, teamSize) {
  let shiftArray = shift(array);
  let shuffledArray = shuffle(shiftArray);

  // const aaa = new Uint32Array(2);
  // global.crypto.getRandomValues(aaa);

  // for (const num of aaa) {
  //   console.log(num);
  // }

  let teams = [];

  for (let i = 0; i < shuffledArray.length; i += teamSize) {
    teams.push(shuffledArray.slice(i, i + teamSize));
  }
  // saveTeams(teams);

  return teams;
}

function getToday() {
  const date = new Date();
  return { month: date.getMonth() + 1, date: date.getDate() };
}

function teamsToString(teams) {
  const { month, date } = getToday();
  const title = `### :party_blob: :rice: ${month}월 ${
    date + 1
  }일 밥 같이 먹어요 :rice: :party_blob: :cat_feed:`; // UTC 23:30 => KST 08:30 하루 차이가 나서 date + 1
  const teamList = teams
    .map((team, index) => `**${index + 1}조**    ➡    ${team.join('\t')}`)
    .join('\n');

  const message = `${title}\n${teamList}`;
  return message;
}

module.exports = { createTeams, teamsToString };
