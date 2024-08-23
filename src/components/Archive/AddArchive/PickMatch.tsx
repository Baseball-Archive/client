import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { MatchData } from '../../../types/MatchData';
import { TeamScheme } from '../../../types/TeamScheme';
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
    scheduleId: number;
    homeTeamId: number;
    awayTeamId: number;
    stadium: string;
  };
}

const DUMMY_SCHEDULE: MatchData[] = [
  {
    scheduleId: 1,
    matchDate: '2024-08-22',
    homeTeamId: 1,
    awayTeamId: 3,
    stadium: '포항야구장',
    time: '18:30:00',
  },
  {
    scheduleId: 2,
    matchDate: '2024-08-22',
    homeTeamId: 2,
    awayTeamId: 6,
    stadium: '광주기아챔피언스필드',
    time: '18:30:00',
  },
  {
    scheduleId: 3,
    matchDate: '2024-08-22',
    homeTeamId: 4,
    awayTeamId: 7,
    stadium: '수원KT위즈파크',
    time: '18:30:00',
  },
  {
    scheduleId: 4,
    matchDate: '2024-08-22',
    homeTeamId: 5,
    awayTeamId: 9,
    stadium: '청주야구장',
    time: '18:30:00',
  },
  {
    scheduleId: 7,
    matchDate: '2024-08-22',
    homeTeamId: 8,
    awayTeamId: 10,
    stadium: '잠실야구장',
    time: '18:30:00',
  },
];

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
        <span> </span>
        {props.data.stadium}
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
        <span> </span>
        {props.data.stadium}
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
    handleSelectedScheduleId(seletedOption?.scheduleId || 0);
  };

  return (
    <div className="w-full">
      <Select
        placeholder="경기를 선택하세요."
        isSearchable={false}
        value={selectedMatch}
        onChange={handleMatchSelect}
        options={DUMMY_SCHEDULE}
        components={{ Option, SingleValue }}
        styles={customStyles}
      />
    </div>
  );
};

export default PickMatch;
//@TODO: 스케쥴 API 구현 안된 상태라 더미데이터로 대체함. 추후 받은 matchdate로 스케쥴 API 호출
