// import TextFilter from "./TextFilter";
// import YearFilter from "./YearFilter";
// import PropTypes from 'prop-types'

const Filters = ({
  yearFilter,
  handleChangeYear,
  nameFiltered,
  handleChangeInput,
}) => {
  const handleInput = (ev) => {
    handleChangeInput(ev.target.value);
  };

  const handleSelect = (ev) => {
    handleChangeYear(ev.target.value);
  };
  return (
    <div className="divForm">
      <form>
        <label htmlFor="search_name">Movie </label>
        <input
          type="text"
          name="search_name"
          id="search_name"
          value={nameFiltered}
          onChange={handleInput}
        />

        <label htmlFor="search_year">
          Year
          <select
            name="search_year"
            id="search_year"
            value={yearFilter}
            onChange={handleSelect}
          >
            <option value="">All</option>
            <option value="2004">2004</option>
            <option value="2008">2008</option>
            <option value="2011">2011</option>
            <option value="2004">2004</option>
          </select>
        </label>
      </form>
    </div>
  );
};

// Filters.propTypes = {
//   nameFiltered: PropTypes.string,
// }

export default Filters;
