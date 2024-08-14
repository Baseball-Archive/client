import React, { useState } from "react";
import Select, { StylesConfig, components } from "react-select";
import Badge from "../../common/Badge";

interface MatchOption {
  matchDate: string;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
}

const PickMatch: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<MatchOption | null>(
    null,
  );

  const dummyData: MatchOption[] = [
    {
      matchDate: "2024-08-14",
      homeTeam: "hanhwa",
      awayTeam: "lg",
      stadium: "한밭종합운동장",
    },
    {
      matchDate: "2024-08-14",
      homeTeam: "samsung",
      awayTeam: "kt",
      stadium: "대구 삼성 라이온즈 파크",
    },
    {
      matchDate: "2024-08-14",
      homeTeam: "kiwoom",
      awayTeam: "kia",
      stadium: "고척돔",
    },
    {
      matchDate: "2024-08-14",
      homeTeam: "doosan",
      awayTeam: "lotte",
      stadium: "서울종합운동장",
    },
    {
      matchDate: "2024-08-14",
      homeTeam: "nc",
      awayTeam: "ssg",
      stadium: "창원NC파크",
    },
  ];

  const handleChange = (selected: MatchOption | null) => {
    setSelectedOption(selected);
  };

  const customStyles: StylesConfig<MatchOption, false> = {
    control: (provided) => ({
      ...provided,
      outline: "none",
      boxShadow: "none",
      border: "none",
      backgroundColor: "white",
    }),

    valueContainer: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
      marginLeft: "8px",
    }),
  };

  const Option = (props: any) => {
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

  const SingleValue = (props: any) => {
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

export default PickMatch;
