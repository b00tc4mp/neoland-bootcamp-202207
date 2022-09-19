// ================== Imports ================== //

import Loggito from "../utils/Loggito";

function Search({ onQuery }) {
  const logger = new Loggito("Search");

  const handleSubmit = (event) => {
    event.preventDefault();

    const query = event.target.query.value;

    onQuery(query);
  };

  logger.info("return");

  return (
    <form className="grouped-elements flex-row" onSubmit={handleSubmit}>
      <input
        className="input-field search-input"
        type="text"
        name="query"
        placeholder="Search questions..."
      />
      <button
        className="material-symbols-outlined nav-icon logout-button-style search-button"
        // text="search"
      >
        search
      </button>
    </form>
  );
}

export default Search;
