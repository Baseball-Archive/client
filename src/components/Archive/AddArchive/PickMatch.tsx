import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { getSchedule } from '../../../apis/shedule';
import { MatchData } from '../../../types/MatchData';
import { TeamScheme } from '../../../types/TeamScheme';
import { convertStadiumName } from '../../../utils/convertStadiumName';
import { getTeamValueByKey } from '../../../utils/getTeamValueByKey';
import Badge from '../../common/Badge';

interface PickMatchProps {
  selectedDate: string;
  selectedMatch: MatchData | null;
  handleMatchData: (option: MatchData | null) => void;
  handleScheduleId: (scheduleId: number) => void;
}
interface MatchProps {
  innerProps: React.HTMLAttributes<HTMLDivElement>;
  data: {
    id?: number;
    matchDate: string;
    homeTeamId: number;
    awayTeamId: number;
    stadium: string;
  };
}

const customStyles: StylesConfig<MatchData, false> = {
  control: (provided) => ({
    ...provided,
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
    backgroundColor: 'white',
  }),
  valueContainer: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#9ca3af',
    marginLeft: '8px',
  }),
};

const Option = (props: MatchProps) => {
  return (
    <div {...props.innerProps} className="flex items-center px-4 py-2">
      <div>
        <Badge
          scheme={getTeamValueByKey(props.data.homeTeamId) as TeamScheme}
        />
        <span> vs </span>
        <Badge
          scheme={getTeamValueByKey(props.data.awayTeamId) as TeamScheme}
        />
        <span className="ml-3">
          {convertStadiumName(props.data.stadium) || props.data.stadium}
        </span>
      </div>
    </div>
  );
};

const SingleValue = (props: MatchProps) => {
  return (
    <div {...props.innerProps} className="px-2">
      <div>
        <Badge
          scheme={getTeamValueByKey(props.data.homeTeamId) as TeamScheme}
        />
        <span> vs </span>
        <Badge
          scheme={getTeamValueByKey(props.data.awayTeamId) as TeamScheme}
        />
        <span className="ml-3">
          {convertStadiumName(props.data.stadium) || props.data.stadium}
        </span>
      </div>
    </div>
  );
};

const PickMatch = ({
  selectedDate,
  selectedMatch,
  handleMatchData,
  handleScheduleId,
}: PickMatchProps) => {
  const handleMatchSelect = (seletedOption: MatchData | null) => {
    handleScheduleId(seletedOption?.id as number);
    handleMatchData(seletedOption);
  };

  const getschedules = async () => {
    console.log(selectedDate);

    return await getSchedule(selectedDate);
  };

  const { data: getScheduleQuery, isLoading } = useQuery<MatchData[]>({
    queryKey: ['schedule', selectedDate],
    queryFn: getschedules,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <Select
        placeholder="경기를 선택하세요."
        isSearchable={false}
        value={selectedMatch}
        onChange={handleMatchSelect}
        options={getScheduleQuery || []}
        components={{ Option, SingleValue }}
        styles={customStyles}
      />
    </div>
  );
};

export default PickMatch;
//@TODO: 스케쥴 API 구현 안된 상태라 더미데이터로 대체함. 추후 받은 matchdate로 스케쥴 API 호출
