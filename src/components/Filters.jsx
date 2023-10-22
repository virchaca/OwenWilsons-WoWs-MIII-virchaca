// import TextFilter from "./TextFilter";
// import YearFilter from "./YearFilter";
// import PropTypes from 'prop-types'

const Filters = ({
  yearFilter,
  handleChangeYear,
  nameFiltered,
  handleChangeInput,
  moviesYears,
}) => {
  const handleInput = (ev) => {
    handleChangeInput(ev.target.value);
  };
  const renderYears = () => {
    return moviesYears.map((year, index) => (
      <option key={index} value={year}>
        {" "}
        {year}
      </option>
    ));
  };
  const handleSelect = (ev) => {
    handleChangeYear(ev.target.value);
  };
  return (
    <div className="divForm">
      <form className="formContainer">
        <div className="inputContainer">
          <label htmlFor="search_name">Movie </label>
          <input
            type="text"
            name="search_name"
            id="search_name"
            value={nameFiltered}
            onChange={handleInput}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="search_year">
            Year
            <select
              name="search_year"
              id="search_year"
              value={yearFilter}
              onChange={handleSelect}
            >
              <option value="">All</option>
              {renderYears()}
            </select>
          </label>
        </div>
      </form>
    </div>
  );
};

// Filters.propTypes = {
//   nameFiltered: PropTypes.string,
// }

export default Filters;
