import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
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
  handleSelectedScheduleId: (scheduleId: number) => void;
}
interface MatchProps {
  innerProps: React.HTMLAttributes<HTMLDivElement>;
  data: {
    matchDate: string;
    scheduleId?: number;
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
  handleSelectedScheduleId,
}: PickMatchProps) => {
  const handleMatchSelect = (seletedOption: MatchData | null) => {
    handleMatchData(seletedOption);
    handleSelectedScheduleId(seletedOption?.scheduleId || 3901);
  }; //TODO : schedule API 현재 schedulId 안줌 -> 받을 때 수정 필요

  const getschedules = async () => {
    return await getSchedule(selectedDate);
  };
  const { data: getScheduleQuery, error: getScheduleError } = useQuery<
    MatchData[]
  >({
    queryKey: ['scheule', selectedDate],
    queryFn: getschedules,
  });
  if (getScheduleError) {
    alert(getScheduleError);
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
