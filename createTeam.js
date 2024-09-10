function shuffle(array = []) {
  for (let i = array.length - 1; i > 0; i--) {
    // 여러 번의 난수 생성과 다른 방식의 인덱스 선택
    let j1 = Math.floor(Math.random() * i);
    let j2 = Math.floor(Math.random() * i);
    let j3 = Math.floor(Math.random() * (i + 1));

    // 각 인덱스에 따른 값을 섞음
    [array[i], array[j1]] = [array[j1], array[i]];
    [array[i], array[j2]] = [array[j2], array[i]];
    [array[i], array[j3]] = [array[j3], array[i]];
  }

  // 최종 셔플 후 다시 한 번 랜덤하게 교환
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }

  // 최종 셔플 후 다시 한 번 랜덤하게 교환
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function createTeams(array, teamSize) {
  let shuffledArray = shuffle(shuffle(shuffle(shuffle(array))));
  let teams = [];

  for (let i = 0; i < shuffledArray.length; i += teamSize) {
    teams.push(shuffledArray.slice(i, i + teamSize));
  }
  console.log(teams);

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
