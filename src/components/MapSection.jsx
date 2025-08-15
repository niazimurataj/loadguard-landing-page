import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, Polyline } from '@react-google-maps/api';
import styles from './MapSection.module.css';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 20.0,
  lng: -40.0
};

const markers = [
  { name: "Philadelphia", position: { lat: 39.9526, lng: -75.1652 } },
  { name: "Seattle", position: { lat: 47.6062, lng: -122.3321 } },
  { name: "Guayaquil", position: { lat: -2.1710, lng: -79.8899 } },
  { name: 'Tirana', position: { lat: 41.3275, lng: 19.8187 } }
];

const routes = [
  { from: "Guayaquil", to: "Tirana" },
  { from: "Guayaquil", to: "Philadelphia" }
];

const mapOptions = {
  styles: [
    { elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
    { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f5f5' }] },
    { featureType: 'administrative.land_parcel', stylers: [{ visibility: 'off' }] },
    { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#bdbdbd' }] },
    { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#eeeeee' }] },
    { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
    { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#e5e5e5' }] },
    { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
    { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
    { featureType: 'road.arterial', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
    { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#dadada' }] },
    { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
    { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
    { featureType: 'transit.line', elementType: 'geometry', stylers: [{ color: '#e5e5e5' }] },
    { featureType: 'transit.station', elementType: 'geometry', stylers: [{ color: '#eeeeee' }] },
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#c9c9c9' }] },
    { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
  ],
  disableDefaultUI: true,
  zoomControl: true,
};

const MapSection = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'homepage-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <section className={styles.mapSection}>
      <h2 className={styles.sectionTitle}>LoadGuard Pilots Already Run at Four Major Ports</h2>
      <div className={styles.mapContainer}>
        <div className={styles.mapWrapper}>
          {loadError ? (
            <div>Error loading map. Please check your API key.</div>
          ) : isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={3}
              options={mapOptions}
            >
              {markers.map((marker) => (
                <MarkerF
                  key={marker.name}
                  position={marker.position}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    fillColor: "#B91C1C",
                    fillOpacity: 1,
                    strokeWeight: 2,
                    strokeColor: "#fff",
                  }}
                />
              ))}
              {routes.map((route, i) => {
                const fromMarker = markers.find(m => m.name === route.from);
                const toMarker = markers.find(m => m.name === route.to);
                if (!fromMarker || !toMarker) return null;
                return (
                  <Polyline
                    key={`line-${i}`}
                    path={[fromMarker.position, toMarker.position]}
                    options={{ strokeColor: '#B91C1C', strokeOpacity: 0.8, strokeWeight: 2, icons: [{ icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 4 }, offset: '0', repeat: '20px' }] }}
                  />
                );
              })}
            </GoogleMap>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapSection;