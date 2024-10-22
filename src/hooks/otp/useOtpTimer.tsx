import { useRef, useEffect, useCallback } from "react";

interface UseOtpTimerProps {
  timeLimit: number;
  onTimeout: () => void;
}

const formatTime = (time: number): string => {
  const minutes: string = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds: string = (time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const useOtpTimer = ({ timeLimit, onTimeout }: UseOtpTimerProps) => {
  const timeLeftRef = useRef<number>(timeLimit);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const callbackRef = useRef<() => void>(onTimeout);

  const getTimeLeft = useCallback(() => timeLeftRef.current, []);
  const getFormattedTimeLeft = useCallback(() => formatTime(timeLeftRef.current), []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const resetTimer = useCallback(() => {
    clearTimer();
    timeLeftRef.current = timeLimit;
    startTimer();
  }, [timeLimit, clearTimer]);

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      timeLeftRef.current -= 1;
      if (timeLeftRef.current <= 0) {
        clearTimer();
        callbackRef.current();
      }
    }, 1000);
  }, [clearTimer]);

  useEffect(() => {
    callbackRef.current = onTimeout;
  }, [onTimeout]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  return {
    getTimeLeft,
    getFormattedTimeLeft,
    resetTimer,
  };
};

export default useOtpTimer;