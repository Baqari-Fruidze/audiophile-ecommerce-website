import React from "react";

export default function Circle({
  yellow,
  setYellow,
}: {
  yellow: boolean;
  setYellow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="w-[20px] h-[20px] rounded-full border-[1px] border-[solid] border-[#CFCFCF] flex items-center justify-center"
      onClick={() => {
        setYellow((prev) => !prev);
      }}
    >
      {yellow ? (
        <div className="w-[10px] h-[10px] bg-[#D87D4A] rounded-full"></div>
      ) : null}
    </div>
  );
}
