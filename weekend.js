import { createTeams } from './createTeam.js';
import { loadPreviousTeams } from './setLog.js';
import { members, TEAM_SIZE } from './data.js';

function getPrevTeams() {
  const prevTeams = loadPreviousTeams();

  return prevTeams != null //
    ? prevTeams.data
    : members;
}

createTeams(getPrevTeams(), TEAM_SIZE);
