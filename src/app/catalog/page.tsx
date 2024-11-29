import React, { useState } from 'react';
import Image from 'next/image';
function Catalog() {
  const cars = [
    { id: 1, image: '/photo-1607946039408-921d9f4e4953.avif', name: 'BMW X5', price: '$45,000' },
    { id: 2, image: '/media/photo-1731834700717-2098a9c2afb1.avif', name: 'Toyota Corolla', price: '$20,000' },
    { id: 3, image: '/media/photo-1641921966132-371cca4de3a1.avif', name: 'Honda Civic', price: '$22,000' },
    { id: 4, image: '/media/photo-1609521247503-8de40462e427.avif', name: 'Mercedes Benz A-Class', price: '$40,000' },
    { id: 5, image: '/media/photo-1590509278793-032529995158.avif', name: 'Audi Q7', price: '$60,000' },
    { id: 6, image: '/media/photo-1585011664466-b7bbe92f34ef.avif', name: 'Tesla Model 3', price: '$55,000' },
  ];

  return (
    <div className="catalog-container">
      <h2 className="catalog-title">Browse Our Car Collection</h2>
      <p className="catalog-subtitle">Discover your perfect ride from our exclusive selection</p>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a car..."
        />
      </div>

      <div className="catalog-grid">
        {cars.map(car => (
          <div key={car.id} className="catalog-card">
           <Image src={car.image}
           alt='car'
           width={300}
           height={300} />
            <div className="card-details">
              <h3 className="car-name">{car.name}</h3>
              <p className="car-price">{car.price}</p>
              <button className="details-button">See Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
