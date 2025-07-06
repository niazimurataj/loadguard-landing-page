import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line // We can still draw the static route lines
} from "react-simple-maps";
import styles from './MapSection.module.css';

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Philadelphia", coordinates: [-75.1652, 39.9526] },
  { name: "Seattle", coordinates: [-122.3321, 47.6062] },
  { name: "Guayaquil", coordinates: [-79.8899, -2.1710] },
  { name: 'Tirana', coordinates: [19.8187, 41.3275] }
];

// We can still define the routes to draw the lines
const routes = [
    { from: "Guayaquil", to: "Tirana" },
    { from: "Guayaquil", to: "Philadelphia" }
];

const highlightedCountries = ["USA", "ECU", "ALB"];

const MapSection = () => {
  return (
    <section className={styles.mapSection}>
      <h2 className={styles.sectionTitle}>LoadGuard Pilots Already Run at Four Major Ports</h2>
      <div className={styles.mapContainer}>
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
              {/* Draw the routes as static dashed lines */}
              {routes.map((route, i) => {
                  const fromMarker = markers.find(m => m.name === route.from);
                  const toMarker = markers.find(m => m.name === route.to);
                  return (
                      <Line
                          key={`line-${i}`}
                          from={fromMarker.coordinates}
                          to={toMarker.coordinates}
                          className={styles.routeLine}
                      />
                  );
              })}
              {/* Draw the location markers */}
              {markers.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={4} className={styles.markerDot} />
                </Marker>
              ))}
            </ComposableMap>
        </div>
      </div>
    </section>
  );
};

export default MapSection;