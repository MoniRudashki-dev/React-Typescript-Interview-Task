import "../styles/toolbar.scss";
type TripsToolbarProps = {
  searchTerm: string;
  onSearchTermChange: (nextSearchTerm: string) => void;
  sortByRating: boolean;
  onSortByRatingChange: (nextSortByRating: boolean) => void;
};

export function TripsToolbar(props: TripsToolbarProps) {
  return (
    <div className="tripsToolbar">
      <div className="tripsToolbar__search">
        <label className="tripsToolbar__label" htmlFor="tripSearch">
          Search
        </label>
        <input
          id="tripSearch"
          className="tripsToolbar__input"
          value={props.searchTerm}
          onChange={(event) => props.onSearchTermChange(event.target.value)}
          placeholder="Search by name..."
          autoComplete="off"
        />
      </div>

      <label className="tripsToolbar__toggle">
        <input
          type="checkbox"
          checked={props.sortByRating}
          onChange={(event) => props.onSortByRatingChange(event.target.checked)}
        />
        <span>Sort by rating</span>
      </label>
    </div>
  );
}

export default TripsToolbar;
