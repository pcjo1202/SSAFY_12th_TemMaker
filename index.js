import { createTeams, teamsToString } from './createTeam.js';
import { members, TEAM_SIZE } from './data.js';
import { sendWebhook } from './MMdeploy.js';
import { loadPreviousTeams } from './setLog.js';

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
deploy();
