"use client";

import { useState, useCallback, useEffect } from "react";
import { LocalStorageKey } from "../types/index";

type SetValue<T> = T | ((prevValue: T) => T);

function useLocalStorage<T>(key: LocalStorageKey, initialValue: T) {
  // Helper function to safely parse JSON
  const parseJSON = <T>(value: string | null): T | undefined => {
    try {
      return value === null ? undefined : JSON.parse(value);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return undefined;
    }
  };

  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? parseJSON<T>(item) ?? initialValue : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = useCallback((value: SetValue<T>) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Error setting localStorage value:", error);
    }
  }, [key, storedValue]);

  const removeValue = useCallback(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error removing localStorage value:", error);
    }
  }, [key, initialValue]);

  // Sync state with other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        setStoredValue(parseJSON(e.newValue) ?? initialValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue] as const;
}

export { useLocalStorage };