import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Select, {
  SingleValue as SingleValueType,
  StylesConfig,
} from 'react-select';
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
    match_date: string;
    homeTeamId: number;
    awayTeamId: number;
    stadium: string;
    time: string;
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

const Option = (props: MatchProps) => (
  <div {...props.innerProps} className="flex items-center px-4 py-2">
    <div>
      <Badge scheme={getTeamValueByKey(props.data.homeTeamId) as TeamScheme} />
      <span> vs </span>
      <Badge scheme={getTeamValueByKey(props.data.awayTeamId) as TeamScheme} />
      <span className="ml-3">
        {convertStadiumName(props.data.stadium) || props.data.stadium}
      </span>
    </div>
  </div>
);

const SingleValue = (props: MatchProps) => (
  <div {...props.innerProps} className="px-2">
    <div>
      <Badge scheme={getTeamValueByKey(props.data.homeTeamId) as TeamScheme} />
      <span> vs </span>
      <Badge scheme={getTeamValueByKey(props.data.awayTeamId) as TeamScheme} />
      <span className="ml-3">
        {convertStadiumName(props.data.stadium) || props.data.stadium}
      </span>
    </div>
  </div>
);

const PickMatch = ({
  selectedDate,
  selectedMatch,
  handleMatchData,
  handleScheduleId,
}: PickMatchProps) => {
  const handleMatchSelect = (selectedOption: MatchData | null) => {
    if (selectedOption) {
      handleScheduleId(selectedOption.id as number);
      handleMatchData(selectedOption);
    }
  };

  const getschedules = async () => await getSchedule(selectedDate);

  const { data: getScheduleQuery, isLoading } = useQuery<MatchData[]>({
    queryKey: ['schedule', selectedDate],
    queryFn: getschedules,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSelectChange = (
    newValue: SingleValueType<{
      id?: number;
      match_date: string;
      homeTeamId: number;
      awayTeamId: number;
      stadium: string;
      time: string;
    }> | null,
  ) => {
    handleMatchSelect(
      newValue ? { ...newValue, match_date: newValue.match_date } : null,
    );
  };

  const options = (getScheduleQuery || []).map((schedule) => ({
    id: schedule.id,
    match_date: schedule.match_date,
    homeTeamId: schedule.homeTeamId,
    awayTeamId: schedule.awayTeamId,
    stadium: schedule.stadium,
    time: schedule.time,
  }));

  return (
    <div className="w-full">
      <Select
        placeholder="경기를 선택하세요."
        isSearchable={false}
        value={
          selectedMatch
            ? {
                id: selectedMatch.id,
                match_date: selectedMatch.match_date,
                homeTeamId: selectedMatch.homeTeamId,
                awayTeamId: selectedMatch.awayTeamId,
                stadium: selectedMatch.stadium,
                time: selectedMatch.time,
              }
            : null
        }
        onChange={handleSelectChange}
        options={options}
        components={{ Option, SingleValue }}
        styles={customStyles}
      />
    </div>
  );
};

export default PickMatch;
