

import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

function SearchInput() {
  return (
    <div className="search-container mt-10">
      <h2 className="search-heading text-center text-[20px] text-gray-400 mb-6">
        Let&apos;s search what you need
      </h2>

      <div className="search-box">
        <div className="search-input-wrapper">
          {/* Location Input */}
          <div className="location-input">
            <FaLocationDot className="location-icon" />
            <input
              type="text"
              placeholder="Enter Location"
              className="location-text-input"
            />
          </div>

          {/* Divider */}
          <div className="divider" />

          {/* Date Input */}
          <div className="date-input">
            <input
              type="date"
              className="date-text-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
