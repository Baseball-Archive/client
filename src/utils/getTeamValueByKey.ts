import { BASEBALL_TEAMS } from '../constants/baseballTeams';
import { TeamScheme } from '../types/TeamScheme';

export const getTeamValueByKey = (key: number): string => {
  const team = BASEBALL_TEAMS.find((team) => team.key === key);
  return team ? team.value : ('nc' as TeamScheme);
};
export const getTeamLabelByKey = (key: number): string => {
  const team = BASEBALL_TEAMS.find((team) => team.key === key);
  return team ? team.label : ('nc' as TeamScheme);
};

//FIXME : TeamScheme, SCHEME_MAP 수정 필요 'nc로 리턴x
