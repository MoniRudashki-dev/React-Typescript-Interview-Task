import { useMemo, useState } from "react";
import { useTrips } from "../hooks/useTrip";

import "../styles/trips.scss";
import { getVisibleTrips } from "../utils/getVisibleTrips";
import StateMessage from "./StateMessage";
import TripCard from "./TripCard";
import GlobalLoader from "./GlobalLoader";
import TripsToolbar from "./TripsToolbar";
import { TripDetails, TripModal } from ".";
import type { Trip } from "../types";

export const Trips = () => {
  const { trips, isLoading, errorMessage, reload } = useTrips();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByRating, setSortByRating] = useState(false);

  const [showMore, setShowMore] = useState(false);

  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  const handleMoreInfo = (trip: Trip) => setSelectedTrip(trip);
  const handleCloseModal = () => setSelectedTrip(null);

  const visibleTrips = useMemo(() => {
    if (!trips) return null;
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

  const tripCardsContent =
    !!visibleTrips &&
    visibleTrips.map((trip) => (
      <TripCard
        key={trip.id}
        trip={trip}
        onMoreInfo={() => {
          handleMoreInfo(trip);
        }}
      />
    ));

  return (
    <>
      {isLoading && <GlobalLoader />}
      <div className="tripsPage content_wrapper">
        <h1 className="tripsPage__title">Trip Card Explorer</h1>

        <TripsToolbar
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          sortByRating={sortByRating}
          onSortByRatingChange={setSortByRating}
        />

        {!!visibleTrips?.length && !!trips && (
          <p className="tripsPage__meta">
            Showing {visibleTrips.length} of {trips.length}
          </p>
        )}

        {!!visibleTrips && (
          <>
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
              <div className="tripsGrid">
                {showMore
                  ? tripCardsContent
                  : tripCardsContent && tripCardsContent.slice(0, 9)}
              </div>
            )}
          </>
        )}

        {!!visibleTrips && visibleTrips.length > 9 && (
          <div className="tripsPage__showMore">
            <button
              type="button"
              className="tripCard__button"
              style={{ width: "100%" }}
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>
        )}

        <TripModal
          isOpen={selectedTrip !== null}
          title={selectedTrip?.name ?? "Trip details"}
          onClose={handleCloseModal}
        >
          {selectedTrip ? <TripDetails trip={selectedTrip} /> : null}
        </TripModal>
      </div>
    </>
  );
};

export default Trips;
