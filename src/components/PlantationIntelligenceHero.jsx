import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import styles from './PlantationIntelligenceHero.module.css';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.45,
  lng: -79.90
};

// Generate random plantation data around the center
const generatePlantations = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    position: {
      lat: center.lat + (Math.random() - 0.5) * 0.5,
      lng: center.lng + (Math.random() - 0.5) * 0.8,
    },
    qualityScore: (Math.random() * (95 - 70) + 70).toFixed(1),
    contrabandRisk: (Math.random() * 15).toFixed(1),
    phytoRisk: (Math.random() * 20).toFixed(1),
  }));
};

const mapOptions = {
  styles: [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    { featureType: "poi", stylers: [{ visibility: "off" }] },
    { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] },
    { featureType: "transit", stylers: [{ visibility: "off" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] },
  ],
  disableDefaultUI: true,
  zoomControl: true,
};

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height + 10), // Position above the marker
});

const PlantationIntelligenceHero = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  const plantations = React.useMemo(() => generatePlantations(20), []);

  if (loadError) {
    return <div className={styles.errorState}>Error loading maps. Please check your API key.</div>;
  }

  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Plantation Intelligence</h2>
        <p className={styles.subtitle}>
          We fuse real-time device data with a live, interactive map of plantation risk factors. Our correlation engine proactively weights container scores, identifies anomalies, and alerts stakeholders before contamination or claims can occur.
        </p>
      </div>
      <div className={styles.mapContainer}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9} // Zoomed out
            options={mapOptions}
          >
            <TooltipProvider>
              {plantations.map(p => (
                <Tooltip key={p.id}>
                  <TooltipTrigger asChild>
                    <Marker 
                      position={p.position} 
                      icon={{
                        path: window.google.maps.SymbolPath.CIRCLE,
                        scale: 5,
                        fillColor: "#DC2626",
                        fillOpacity: 0.7,
                        strokeWeight: 0,
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent className={styles.tooltipContent}>
                    <h4>Plantation {p.id}</h4>
                    <p><strong>Quality:</strong> {p.qualityScore}</p>
                    <p><strong>Contraband Risk:</strong> {p.contrabandRisk}%</p>
                    <p><strong>Phytosanitary Risk:</strong> {p.phytoRisk}%</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </GoogleMap>
        ) : (
          <div className={styles.loadingState}>Loading Map...</div>
        )}
      </div>
    </div>
  );
};

export default PlantationIntelligenceHero;
