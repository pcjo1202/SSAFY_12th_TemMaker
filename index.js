const { createTeams, teamsToString } = require('./createTeam');
const { members, TEAM_SIZE } = require('./data');
const { sendWebhook } = require('./MMdeploy');

// 배포 로직
async function deploy() {
  const message = teamsToString(createTeams(members, TEAM_SIZE));
  await sendWebhook(message);
}

// createTeams(members, TEAM_SIZE); // 디버깅용
// 배포 스크립트 실행
deploy();
