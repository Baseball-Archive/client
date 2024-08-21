import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import Badge from '../../common/Badge';
import { MatchData } from '../../../types/MatchData';
import { TeamScheme } from '../../../types/TeamScheme';

interface PickMatchProps {
  selectedMatch: MatchData | null;
  handleMatch: (option: MatchData | null) => void;
}
interface MatchProps {
  innerProps: React.HTMLAttributes<HTMLDivElement>;
  data: {
    homeTeam: TeamScheme;
    awayTeam: TeamScheme;
    stadium: string;
  };
}

const dummyData: MatchData[] = [
  {
    matchDate: '2024-08-14',
    homeTeam: 'hanhwa',
    awayTeam: 'lg',
    stadium: '한밭종합운동장',
  },
  {
    matchDate: '2024-08-14',
    homeTeam: 'samsung',
    awayTeam: 'kt',
    stadium: '대구 삼성 라이온즈 파크',
  },
  {
    matchDate: '2024-08-14',
    homeTeam: 'kiwoom',
    awayTeam: 'kia',
    stadium: '고척돔',
  },
  {
    matchDate: '2024-08-14',
    homeTeam: 'doosan',
    awayTeam: 'lotte',
    stadium: '서울종합운동장',
  },
  {
    matchDate: '2024-08-14',
    homeTeam: 'nc',
    awayTeam: 'ssg',
    stadium: '창원NC파크',
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
        <Badge scheme={props.data.homeTeam} /> <span> vs </span>
        <Badge scheme={props.data.awayTeam} /> <span> </span>
        {props.data.stadium}
      </div>
    </div>
  );
};
const SingleValue = (props: MatchProps) => {
  return (
    <div {...props.innerProps} className="px-2">
      <div>
        <Badge scheme={props.data.homeTeam} /> <span> vs </span>
        <Badge scheme={props.data.awayTeam} />
        <span> </span>
        {props.data.stadium}
      </div>
    </div>
  );
};

const PickMatch = ({ selectedMatch, handleMatch }: PickMatchProps) => {
  return (
    <div className="w-full">
      <Select
        placeholder="경기를 선택하세요."
        isSearchable={false}
        value={selectedMatch}
        onChange={handleMatch}
        options={dummyData}
        components={{ Option, SingleValue }}
        styles={customStyles}
      />
    </div>
  );
};

export default PickMatch;
