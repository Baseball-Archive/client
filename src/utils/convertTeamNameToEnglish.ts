import { TeamScheme } from '../types/TeamScheme';

const teamNameMap: { [key: string]: TeamScheme } = {
  KIA: 'kia',
  삼성: 'samsung',
  LG: 'lg',
  두산: 'doosan',
  SSG: 'ssg',
  KT: 'kt',
  NC: 'nc',
  한화: 'hanhwa',
  롯데: 'lotte',
  키움: 'kiwoom',
};
export const convertTeamNameToEnglish = (teamName: string): TeamScheme => {
  return teamNameMap[teamName] || 'unknown';
};
