import React, { useState } from "react";
import Badge from "../../common/Badge";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { MatchData } from "../../../types/MatchData";

interface PickScoreProps {
  homeScore: number;
  awayScore: number;
  setHomeScore: (score: number) => void;
  setAwayScore: (score: number) => void;
  selectedMatch: MatchData | null;
}

const PickScore = ({
  homeScore,
  awayScore,
  setHomeScore,
  setAwayScore,
  selectedMatch,
}: PickScoreProps) => {
  const handleHomeScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHomeScore(Number(e.target.value));
  };
  const handleAwayScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAwayScore(Number(e.target.value));
  };
  const incrementScore = (
    setter: (score: number) => void,
    score: number,
    max: number,
  ) => {
    if (score < max) {
      setter(score + 1);
    }
  };
  const decrementScore = (
    setter: (score: number) => void,
    score: number,
    min: number,
  ) => {
    if (score > min) {
      setter(score - 1);
    }
  };

  return (
    <div className="mb-6 flex h-12 w-full flex-row justify-between rounded-md border px-4">
      {selectedMatch && (
        <>
          <div className="flex items-center">
            <Badge scheme={selectedMatch?.homeTeam} />
            <input
              id="homeScore"
              value={homeScore}
              onChange={handleHomeScoreChange}
              className="flex w-12 text-center text-lg outline-none"
              min={0}
              max={30}
              readOnly
            />
            <div className="flex flex-col rounded-2xl border text-gray-400">
              <button
                onClick={() => incrementScore(setHomeScore, homeScore, 30)}
              >
                <PlusCircleIcon className="size-4" />
              </button>
              <button
                onClick={() => decrementScore(setHomeScore, homeScore, 0)}
              >
                <MinusCircleIcon className="size-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <Badge scheme={selectedMatch.awayTeam} />

            <input
              id="awayScore"
              value={awayScore}
              onChange={handleAwayScoreChange}
              className="flex w-12 text-center text-lg outline-none"
              min={0}
              max={30}
              readOnly
            />
            <div className="flex flex-col rounded-2xl border text-gray-400">
              <button
                onClick={() => incrementScore(setAwayScore, awayScore, 30)}
              >
                <PlusCircleIcon className="size-4" />
              </button>
              <button
                onClick={() => decrementScore(setAwayScore, awayScore, 0)}
              >
                <MinusCircleIcon className="size-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PickScore;
