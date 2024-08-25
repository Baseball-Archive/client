import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { BASEBALL_TEAMS } from '../../../constants/baseballTeams';
import { ScheduleItem } from '../../../types/MatchData';
import { TeamScheme } from '../../../types/TeamScheme';
import Badge from '../../common/Badge';

interface OptionProps {
  innerProps: React.HTMLAttributes<HTMLDivElement>;
  data: ScheduleItem;
}

interface PostPickMatchProps {
  onSelectMatch: (match: number) => void;
  scheduleData: ScheduleItem[];
}

const Option = (props: OptionProps) => (
  <div {...props.innerProps} className="flex items-center px-4 py-2">
    <div>
      <Badge
        scheme={BASEBALL_TEAMS[props.data.home_team_id - 1].value as TeamScheme}
      />
      <span> vs </span>
      <Badge
        scheme={BASEBALL_TEAMS[props.data.away_team_id - 1].value as TeamScheme}
      />
      <span> </span>
      {props.data.stadium}
    </div>
  </div>
);

const SingleValue = (props: OptionProps) => (
  <div {...props.innerProps} className="px-2">
    <div>
      <Badge
        scheme={BASEBALL_TEAMS[props.data.home_team_id - 1].value as TeamScheme}
      />{' '}
      <span> vs </span>
      <Badge
        scheme={BASEBALL_TEAMS[props.data.away_team_id - 1].value as TeamScheme}
      />
      <span> </span>
      {props.data.stadium}
    </div>
  </div>
);

const PostPickMatch = ({ onSelectMatch, scheduleData }: PostPickMatchProps) => {
  const [selectedOption, setSelectedOption] = useState<ScheduleItem | null>(
    null,
  );

  const handleChange = (selected: ScheduleItem | null) => {
    setSelectedOption(selected);
    if (selected) {
      onSelectMatch(selected.id);
    }
  };

  const customStyles: StylesConfig<ScheduleItem, false> = {
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
    <div className="w-full rounded border border-[#A9A9A9] p-2">
      <Select
        placeholder="경기를 선택하세요."
        isSearchable={false}
        value={selectedOption}
        onChange={handleChange}
        options={scheduleData}
        components={{ Option, SingleValue }}
        styles={customStyles}
      />
    </div>
  );
};

export default PostPickMatch;
