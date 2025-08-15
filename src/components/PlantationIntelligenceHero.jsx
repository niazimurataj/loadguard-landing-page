import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import styles from './PlantationIntelligenceHero.module.css';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -2.5,
  lng: -79.5
};

const allLandCoordinates = [
    { lat: -2.17, lng: -79.88 }, { lat: -2.05, lng: -79.90 }, { lat: -2.23, lng: -79.80 },
    { lat: -2.15, lng: -79.75 }, { lat: -2.28, lng: -79.65 }, { lat: -2.35, lng: -79.78 },
    { lat: -2.45, lng: -79.85 }, { lat: -2.50, lng: -79.70 }, { lat: -2.60, lng: -79.60 },
    { lat: -2.70, lng: -79.75 }, { lat: -2.80, lng: -79.88 }, { lat: -2.90, lng: -79.70 },
    { lat: -3.00, lng: -79.60 }, { lat: -3.10, lng: -79.75 }, { lat: -3.20, lng: -79.85 },
    { lat: -3.30, lng: -79.65 }, { lat: -3.40, lng: -79.78 }, { lat: -3.50, lng: -79.90 },
    { lat: -3.60, lng: -79.70 }, { lat: -3.70, lng: -79.60 }, { lat: -3.80, lng: -79.75 },
    { lat: -3.90, lng: -79.85 }, { lat: -4.00, lng: -79.65 }, { lat: -2.12, lng: -79.58 },
    { lat: -2.25, lng: -79.45 }, { lat: -2.38, lng: -79.55 }, { lat: -2.52, lng: -79.40 },
    { lat: -2.65, lng: -79.50 }, { lat: -2.78, lng: -79.35 }, { lat: -2.92, lng: -79.48 },
    { lat: -3.05, lng: -79.30 }, { lat: -3.18, lng: -79.45 }, { lat: -3.32, lng: -79.58 },
    { lat: -3.45, lng: -79.40 }, { lat: -3.58, lng: -79.50 }, { lat: -3.72, lng: -79.35 },
    { lat: -3.85, lng: -79.48 }, { lat: -3.98, lng: -79.25 }, { lat: -2.08, lng: -79.33 },
    { lat: -2.21, lng: -79.21 }, { lat: -2.34, lng: -79.31 }, { lat: -2.47, lng: -79.18 },
    { lat: -2.61, lng: -79.28 }, { lat: -2.74, lng: -79.15 }, { lat: -2.87, lng: -79.28 },
    { lat: -3.01, lng: -79.13 }, { lat: -3.14, lng: -79.25 }, { lat: -3.27, lng: -79.12 },
    { lat: -3.41, lng: -79.23 }, { lat: -3.54, lng: -79.10 }, { lat: -1.98, lng: -79.55 },
    { lat: -1.87, lng: -79.63 }, { lat: -1.76, lng: -79.52 }, { lat: -1.65, lng: -79.60 },
    { lat: -1.54, lng: -79.48 }, { lat: -1.43, lng: -79.55 }, { lat: -1.32, lng: -79.43 },
    { lat: -1.21, lng: -79.50 }, { lat: -1.10, lng: -79.38 }, { lat: -1.00, lng: -79.45 },
    { lat: -0.90, lng: -79.33 }, { lat: -0.80, lng: -79.40 }, { lat: -0.70, lng: -79.28 },
    { lat: -0.60, lng: -79.35 }, { lat: -0.50, lng: -79.23 }, { lat: -0.40, lng: -79.30 },
    { lat: -0.30, lng: -79.18 }, { lat: -0.20, lng: -79.25 }, { lat: -0.10, lng: -79.13 },
    { lat: -1.95, lng: -79.22 }, { lat: -1.84, lng: -79.30 }, { lat: -1.73, lng: -79.18 },
    { lat: -1.62, lng: -79.25 }, { lat: -1.51, lng: -79.13 }, { lat: -1.40, lng: -79.20 },
    { lat: -1.29, lng: -79.08 }, { lat: -1.18, lng: -79.15 }, { lat: -1.07, lng: -79.03 },
    { lat: -0.96, lng: -79.10 }, { lat: -0.85, lng: -78.98 }, { lat: -0.74, lng: -79.05 },
    { lat: -0.63, lng: -78.93 }, { lat: -0.52, lng: -79.00 }, { lat: -0.41, lng: -78.88 },
    { lat: -0.31, lng: -78.95 }, { lat: -0.21, lng: -78.83 }, { lat: -0.11, lng: -78.90 },
    { lat: -0.01, lng: -78.78 }
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const selectedCoordinates = shuffleArray(allLandCoordinates).slice(0, 70);

const plantations = selectedCoordinates.map((pos, i) => {
  const contrabandRisk = parseFloat((Math.random() * 15).toFixed(1));
  const phytoRisk = parseFloat((Math.random() * 20).toFixed(1));
  const contaminationScore = (contrabandRisk + phytoRisk).toFixed(1);
  const color = Math.random() > 0.5 ? '#DC2626' : '#808080';
  const scale = color === '#DC2626' ? 8 : 4;

  return {
    id: i + 1,
    position: pos,
    qualityScore: (Math.random() * (95 - 70) + 70).toFixed(1),
    contrabandRisk: contrabandRisk,
    phytoRisk: phytoRisk,
    contaminationScore: contaminationScore,
    color: color,
    scale: scale,
  };
});

const intelligenceData = [
  { dimension: 'Phytosanitary', value: 85 },
  { dimension: 'Contraband', value: 92 },
  { dimension: 'Quality', value: 78 },
  { dimension: 'Price Fluctuation', value: 60 },
  { dimension: 'Claims Fulfilment', value: 95 },
];

const IntelligenceRadarChart = () => (
  <RadarChart cx={150} cy={125} outerRadius={75} width={300} height={250} data={intelligenceData}>
    <PolarGrid gridType="circle" />
    <PolarAngleAxis dataKey="dimension" tick={{ fill: '#a0aec0', fontSize: 12 }} />
    <PolarRadiusAxis angle={30} domain={[0, 100]} axisLine={false} tick={false} />
    <Radar dataKey="value" stroke="#DC2626" fill="#DC2626" fillOpacity={0.6} />
  </RadarChart>
);

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

const PlantationIntelligenceHero = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  if (loadError) {
    return <div className={styles.errorState}>Error loading maps. Please check your API key.</div>;
  }

  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Plantation Intelligence</h2>
        <IntelligenceRadarChart />
        <p className={styles.subtitle}>
          We fuse real-time device data with a live, interactive map of plantation risk factors. Our correlation engine proactively weights container scores, identifies anomalies, and alerts stakeholders before contamination or claims can occur.
        </p>
      </div>
      <div className={styles.mapContainer}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9}
            options={mapOptions}
          >
            <TooltipProvider>
              {plantations.map(p => (
                <Tooltip key={p.id}>
                  <TooltipTrigger asChild>
                    <MarkerF 
                      position={p.position} 
                      icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: p.scale,
                        fillColor: p.color,
                        fillOpacity: 1,
                        strokeWeight: 2,
                        strokeColor: "#fff",
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent className={styles.tooltipContent}>
                    <h4>Plantation {p.id}</h4>
                    <p><strong>Quality:</strong> {p.qualityScore}</p>
                    <p><strong>Contraband Risk:</strong> {p.contrabandRisk}%</p>
                    <p><strong>Phytosanitary Risk:</strong> {p.phytoRisk}%</p>
                    <p><strong>Contamination Score:</strong> {p.contaminationScore}%</p>
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