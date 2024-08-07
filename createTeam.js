function shuffle(array = []) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.round(Math.random() * i);
    let temp;
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

function createTeams(array, teamSize) {
  let shuffledArray = shuffle(array);
  let teams = [];

  for (let i = 0; i < shuffledArray.length; i += teamSize) {
    teams.push(shuffledArray.slice(i, i + teamSize));
  }

  return teams;
}

function getToday() {
  const date = new Date();
  console.log();
  console.log();
  return { month: date.getMonth() + 1, date: date.getDate() };
}

function teamsToString(teams) {
  const { month, date } = getToday();
  const title = `# :party_blob: :rice: ${month}월 ${date}일 밥 같이 먹어요 :rice: :party_blob: :cat_feed:`;
  const teamList = teams
    .map((team, index) => `#### **${index + 1}조**    ➡    ${team.join('\t')}`)
    .join('\n');

  const message = `${title}\n${teamList}`;
  return message;
}

module.exports = { createTeams, teamsToString };
