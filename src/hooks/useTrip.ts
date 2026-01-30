import { useEffect, useState } from "react";
import type { Trip } from "../types";
import { fetchTrips } from "../api";

const delay = (milliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

export function useTrips() {
  const [trips, setTrips] = useState<Trip[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadTrips = async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);

      await delay(1500);
      const loadedTrips = await fetchTrips();

      setTrips(loadedTrips);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong, please try again later. :)";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadTrips();
  }, []);

  return { trips, isLoading, errorMessage, reload: loadTrips };
}
