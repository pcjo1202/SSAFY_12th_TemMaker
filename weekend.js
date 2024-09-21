const { createTeams } = require('./createTeam');
const { loadPreviousTeams } = require('./setLog');
const { members, TEAM_SIZE } = require('./data');

function getPrevTeams() {
  const prevTeams = loadPreviousTeams();

  return prevTeams != null //
    ? prevTeams.data
    : members;
}

createTeams(getPrevTeams(), TEAM_SIZE);
