
import React from 'react';

function CarsFilterOption() {
  return (
    <div className="cars-filter-container mt-10">
      {/* Title Section */}
      <div className="filter-header">
        <h2 className="filter-title">Choose Your Ride</h2>
        <h3 className="filter-subtitle">Explore Our Exclusive Cars Selection</h3>
      </div>

      {/* Filter Dropdowns */}
      <div className="filter-options">
        <select className="filter-select">
          <option disabled selected>
            Price
          </option>
          <option>Min To Max</option>
          <option>Max To Min</option>
        </select>

        <select className="filter-select md-visible">
          <option disabled selected>
            Manufacturer
          </option>
          <option>Honda</option>
          <option>BMW</option>
          <option>Toyota</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFilterOption;
