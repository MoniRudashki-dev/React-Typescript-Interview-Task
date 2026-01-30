import type { Trip } from "../types";

export function getVisibleTrips(params: {
  trips: Trip[];
  searchTerm: string;
  sortByRating: boolean;
}): Trip[] {
  const normalizedSearchTerm = params.searchTerm.trim().toLowerCase();

  const filteredTrips = normalizedSearchTerm
    ? params.trips.filter((trip) =>
        trip.name.toLowerCase().includes(normalizedSearchTerm),
      )
    : params.trips;

  if (!params.sortByRating) return filteredTrips;

  return [...filteredTrips].sort((firstTrip, secondTrip) => {
    return secondTrip.rating - firstTrip.rating;
  });
}
