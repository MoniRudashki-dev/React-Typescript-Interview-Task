import type { Trip, TripsResponse } from "../types";

export async function fetchTrips(): Promise<Trip[]> {
  const response = await fetch("/data/data.json", {
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Failed to load trips (${response.status})`);
  }

  const payload = (await response.json()) as TripsResponse;

  if (!payload?.trips || !Array.isArray(payload.trips)) {
    throw new Error("Invalid trips payload");
  }

  return payload.trips;
}
