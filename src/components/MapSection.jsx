import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import styles from './MapSection.module.css';

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Newark/Phila", coordinates: [-74.1724, 40.7357] },
  { name: "Seattle", coordinates: [-122.3321, 47.6062] },
  { name: "Guayaquil", coordinates: [-79.8899, -2.1710] },
  { name: 'Tirana', coordinates: [19.8187, 41.3275] }
];

const highlightedCountries = ["USA", "ECU", "ALB"];

const MapSection = () => {
  return (
    <section className={styles.mapSection}>
      <h2 className={styles.sectionTitle}>Be an Early Adopter - Pilots Live at Four Major Ports</h2>
      <div className={styles.mapContainer}>
        {/* The map itself is now inside a wrapper to mask the animated border */}
        <div className={styles.mapWrapper}>
            <ComposableMap projectionConfig={{ scale: 160 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isHighlighted = highlightedCountries.includes(geo.properties.iso_a3);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        className={isHighlighted ? styles.highlightedCountry : styles.country}
                      />
                    );
                  })
                }
              </Geographies>
              {markers.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <g
                    fill="none"
                    stroke="#FF5533"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="3" fill="white" stroke="black" strokeWidth="1.5" />
                     <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 7.5 11.6.2.3.3.3.5.3z" fill="black"/>
                  </g>
                </Marker>
              ))}
            </ComposableMap>
        </div>
      </div>
    </section>
  );
};

export default MapSection;