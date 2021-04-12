import { useState } from "react";

const useApplyTime = () => {
  const [outTime, setOut] = useState<string>(":");
  const [inTime, setIn] = useState<string>(":");

  const handleOutHour = (value: string) => {
    const split = outTime.split(":");
    setOut(`${value}:${split[1]}`);
  };

  const handleOutMin = (value: string) => {
    const split = outTime.split(":");
    setOut(`${split[0]}:${value}`);
  };

  const handleInHour = (value: string) => {
    const split = inTime.split(":");
    setIn(`${value}:${split[1]}`);
  };

  const handleInMin = (value: string) => {
    const split = inTime.split(":");
    setIn(`${split[0]}:${value}`);
  };

  return [
    outTime,
    inTime,
    handleOutHour,
    handleOutMin,
    handleInHour,
    handleInMin
  ] as const;
};

export default useApplyTime;
