import { useMemo, useState } from "react";
import { useTrips } from "../hooks/useTrip";

import "../styles/trips.scss";
import { getVisibleTrips } from "../utils/getVisibleTrips";
import StateMessage from "./StateMessage";

export const Trips = () => {
  const { trips, isLoading, errorMessage, reload } = useTrips();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByRating, setSortByRating] = useState(false);

  const visibleTrips = useMemo(() => {
    return getVisibleTrips({ trips, searchTerm, sortByRating });
  }, [trips, searchTerm, sortByRating]);

  if (errorMessage) {
    return (
      <div className="tripsPage content_wrapper">
        <StateMessage
          title="Couldn’t load trips"
          description={errorMessage}
          actions={
            <button type="button" onClick={reload}>
              Retry
            </button>
          }
        />
      </div>
    );
  }

  const tripCardsContent = visibleTrips.map((trip) => (
    <div key={trip.id}></div>
  ));

  return (
    <>
      <div className="tripsPage content_wrapper">
        <h1 className="tripsPage__title">Trip Card Explorer</h1>

        <p className="tripsPage__meta">
          Showing {visibleTrips.length} of {trips.length}
        </p>

        {visibleTrips.length === 0 ? (
          <StateMessage
            title="No trips found"
            description="Try a different search term or clear the filter."
            actions={
              searchTerm ? (
                <button type="button" onClick={() => setSearchTerm("")}>
                  Clear search
                </button>
              ) : null
            }
          />
        ) : (
          <div className="tripsGrid">{tripCardsContent}</div>
        )}
      </div>
    </>
  );
};

export default Trips;
