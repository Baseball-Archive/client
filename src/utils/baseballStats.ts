// 통계 등 승률 계산
export const calculateWinPercentage = (
  wins: number,
  losses: number,
  draws: number,
): string => {
  const totalGames = wins + losses + draws;
  const winPercentage = totalGames === 0 ? 0 : (wins / totalGames) * 100;
  return winPercentage.toFixed(3);
};
