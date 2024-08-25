import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { MatchData } from '../../../types/MatchData';
import { TeamScheme } from '../../../types/TeamScheme';
import { getTeamValueByKey } from '../../../utils/getTeamValueByKey';
import Badge from '../../common/Badge';

const MIN_SCORE = 0;
const MAX_SCORE = 30;

interface PickScoreProps {
  homeScore: number;
  awayScore: number;
  handleHomeScore: (score: number) => void;
  handleAwayScore: (score: number) => void;
  selectedMatch: MatchData | null;
}

const PickScore = ({
  homeScore,
  awayScore,
  handleHomeScore,
  handleAwayScore,
  selectedMatch,
}: PickScoreProps) => {
  const incrementScore = (isHome: boolean, score: number) => {
    if (score < MAX_SCORE) {
      if (isHome === true) {
        handleHomeScore(score + 1);
      } else {
        handleAwayScore(score + 1);
      }
    }
  };
  const decrementScore = (isHome: boolean, score: number) => {
    if (score > MIN_SCORE) {
      if (isHome === true) {
        handleHomeScore(score - 1);
      } else {
        handleAwayScore(score - 1);
      }
    }
  };

  return (
    <div className="mb-4 flex h-12 w-full flex-row justify-between rounded-md border px-4">
      {selectedMatch ? (
        <>
          <div className="flex items-center">
            <Badge
              scheme={getTeamValueByKey(selectedMatch.homeTeamId) as TeamScheme}
            />
            <input
              id="homeScore"
              value={homeScore}
              className="flex w-12 text-center text-lg outline-none"
              readOnly
            />
            <div className="flex flex-col rounded-2xl border text-gray-400">
              <button
                type="button"
                onClick={() => incrementScore(true, homeScore)}
              >
                <PlusCircleIcon className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => decrementScore(true, homeScore)}
              >
                <MinusCircleIcon className="size-4" />
              </button>
            </div>
          </div>
          <span className="self-center font-bold">:</span>
          <div className="flex items-center">
            <Badge
              scheme={getTeamValueByKey(selectedMatch.awayTeamId) as TeamScheme}
            />

            <input
              id="awayScore"
              value={awayScore}
              className="flex w-12 text-center text-lg outline-none"
              readOnly
            />
            <div className="flex flex-col rounded-2xl border text-gray-400">
              <button
                type="button"
                onClick={() => incrementScore(false, awayScore)}
              >
                <PlusCircleIcon className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => decrementScore(false, awayScore)}
              >
                <MinusCircleIcon className="size-4" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <span className="self-center text-gray-400">경기를 선택하세요.</span>
      )}
    </div>
  );
};

export default PickScore;
