const { createTeams, teamsToString } = require('./createTeam');
const { members, TEAM_SIZE } = require('./data');
const { sendWebhook } = require('./MMdeploy');
const { loadPreviousTeams } = require('./setLog');

function getPrevTeams() {
  const prevTeams = loadPreviousTeams();

  return prevTeams != null //
    ? prevTeams.data
    : members;
}

// 배포 로직
async function deploy() {
  const teams = getPrevTeams();

  const message = teamsToString(createTeams(teams, TEAM_SIZE));

  await sendWebhook(message);
}

console.log(teamsToString(createTeams(getPrevTeams(), TEAM_SIZE))); // 디버깅용
// 배포 스크립트 실행
// deploy();
