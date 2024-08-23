import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { MatchData } from '../../../types/MatchData';
import { TeamScheme } from '../../../types/TeamScheme';
import Badge from '../../common/Badge';

interface OptionProps {
  innerProps: React.HTMLAttributes<HTMLDivElement>;
  data: {
    homeTeam: TeamScheme;
    awayTeam: TeamScheme;
    stadium: string;
  };
}

interface PostPickMatchProps {
  onSelectMatch: (match: { home: string; away: string }) => void;
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

const Option = (props: OptionProps) => (
  <div {...props.innerProps} className="flex items-center px-4 py-2">
    <div>
      <Badge scheme={props.data.homeTeam} /> <span> vs </span>
      <Badge scheme={props.data.awayTeam} /> <span> </span>
      {props.data.stadium}
    </div>
  </div>
);

const SingleValue = (props: OptionProps) => (
  <div {...props.innerProps} className="px-2">
    <div>
      <Badge scheme={props.data.homeTeam} /> <span> vs </span>
      <Badge scheme={props.data.awayTeam} />
      <span> </span>
      {props.data.stadium}
    </div>
  </div>
);

const PostPickMatch: React.FC<PostPickMatchProps> = ({ onSelectMatch }) => {
  const [selectedOption, setSelectedOption] = useState<MatchData | null>(null);

  const handleChange = (selected: MatchData | null) => {
    setSelectedOption(selected);
    if (selected) {
      onSelectMatch({
        home: selected.homeTeam,
        away: selected.awayTeam,
      });
    }
  };

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

  return (
    <div className="w-full">
      <Select
        placeholder="경기를 선택하세요."
        isSearchable={false}
        value={selectedOption}
        onChange={handleChange}
        options={dummyData}
        components={{ Option, SingleValue }}
        styles={customStyles}
      />
    </div>
  );
};

export default PostPickMatch;
