import apiClient from './apiClient';

export const getSchedule = async (date: string) => {
  try {
    const response = await apiClient.get(`/schedules/${date}`);
    return response.data;
  } catch (error) {
    console.error('스케줄 조회 실패: ', error);
    throw new Error(`스케줄 조회 실패:  ${error}`);
  }
};

export const getStandings = async () => {
  try {
    const response = await apiClient.get('/standings');
    return response.data;
  } catch (error) {
    console.error('리그 순위 조회 실패: ', error);
    throw new Error(`리그 순위 조회 실패:  ${error}`);
  }
};
