import "./ExpenseFilter.css";

export const ExpenseFilter = (props) => {
  const getYearHandler = (event) => {
    props.onSelectedYear(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div className="list-filter-title">
          <span>Filter By Year</span>
        </div>
        <select
          className="form-select form-select-lg"
          value={props.selected}
          onChange={getYearHandler}
        >
          <option value="ALL">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
