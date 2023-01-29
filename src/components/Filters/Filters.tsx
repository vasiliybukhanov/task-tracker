import { TaskDatePicker } from '../TaskDatePicker/TaskDatePicker';
import './Filters.css';

export const Filters = () => {
  return (
    <>
      <h2>Filters</h2>
      <div className="filters-container">
        <div className="filter-item">
          <b className="filter-item__label">
            Start date from:
          </b>
          <TaskDatePicker />
        </div>
        <div className="filter-item">
          <b className="filter-item__label">
            Start date till:
          </b>
          <TaskDatePicker />
        </div>
        <div className="filter-item">
          <b className="filter-item__label">
            End date from:
          </b>
          <TaskDatePicker />
        </div>
        <div className="filter-item">
          <b className="filter-item__label">
            End date till:
          </b>
          <TaskDatePicker />
        </div>
        <button className="filters-apply-button">Apply</button>
      </div>
    </>
  );
};
