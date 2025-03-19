import React from "react";
import ContestCard from "./ContestCard";
import LoadingBar from "./Lodingbar";

const ContestList = ({ contests }) => {
  return (
    <div>
      {contests ? (
        <div className="grid gap-4">
          {contests.map((contest) => (
            <ContestCard key={contest.id} contest={contest} />
          ))}
        </div>
      ) : (
        <LoadingBar />
      )}
    </div>
  );
};

export default ContestList;
