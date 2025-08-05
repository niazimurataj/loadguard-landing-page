import React, { useState, useEffect } from 'react';
import Chatbot from '../components/Chatbot';
import AlertingChain from '../components/AlertingChain';
import styles from './MembersPage.module.css';
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import mapStyles from '../components/MapSection.module.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Container 1", coordinates: [-75.1652, 39.9526] },
  { name: "Container 2", coordinates: [-122.3321, 47.6062] },
  { name: "Container 3", coordinates: [-79.8899, -2.1710] },
  { name: "Container 4", coordinates: [19.8187, 41.3275] }
];

const routes = [
    { from: "Container 3", to: "Container 4" },
    { from: "Container 3", to: "Container 1" }
];

const highlightedCountries = ["USA", "ECU", "ALB"];

const MemberMap = () => {
  return (
    <section className={mapStyles.mapSection}>
      <h2 className={mapStyles.sectionTitle}>Track your 4 containers</h2>
      <div className={mapStyles.mapContainer}>
        <div className={mapStyles.mapWrapper}>
            <ComposableMap projectionConfig={{ scale: 160 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isHighlighted = highlightedCountries.includes(geo.properties.iso_a3);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        className={isHighlighted ? mapStyles.highlightedCountry : mapStyles.country}
                      />
                    );
                  })
                }
              </Geographies>
              {routes.map((route, i) => {
                  const fromMarker = markers.find(m => m.name === route.from);
                  const toMarker = markers.find(m => m.name === route.to);
                  return (
                      <Line
                          key={`line-${i}`}
                          from={fromMarker.coordinates}
                          to={toMarker.coordinates}
                          className={mapStyles.routeLine}
                      />
                  );
              })}
              {markers.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={4} className={mapStyles.markerDot} />
                </Marker>
              ))}
            </ComposableMap>
        </div>
      </div>
    </section>
  );
};

const DataTable = () => {
  const initialData = [
    { deviceId: 'LG-001', motion: 'Normal', temperature: 2, humidity: 80, voc: 150, spoilage: 'Low', access: 'No' },
    { deviceId: 'LG-002', motion: 'Vibration Detected', temperature: 3, humidity: 82, voc: 180, spoilage: 'Medium', access: 'Yes' },
    { deviceId: 'LG-003', motion: 'Normal', temperature: 1, humidity: 79, voc: 140, spoilage: 'Low', access: 'No' },
    { deviceId: 'LG-004', motion: 'Normal', temperature: 2.5, humidity: 81, voc: 160, spoilage: 'Low', access: 'No' },
  ];

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => 
        prevData.map(row => ({...row, temperature: parseFloat((row.temperature + (Math.random() - 0.5) * 0.1).toFixed(1))}))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Motion</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>VOC Index</th>
            <th>Spoilage</th>
            <th>Illegal Access</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.deviceId}</td>
              <td>{row.motion}</td>
              <td>{row.temperature}°C</td>
              <td>{row.humidity}%</td>
              <td>{row.voc}</td>
              <td>{row.spoilage}</td>
              <td>{row.access}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.buttonContainer}>
        <button className={styles.addButton}>Add device</button>
      </div>
    </div>
  );
};


const MembersPage = () => {
  const [activeSection, setActiveSection] = useState('monitor');

  return (
    <div className="gradient-background">
      <h1 style={{textAlign: 'center', marginTop: '2rem'}}>Members Area</h1>
      
      <div style={{ textAlign: 'center' }}>
        <div className={styles.toggleWrapper}>
          <button 
            className={`${styles.toggleButton} ${activeSection === 'monitor' ? styles.active : ''}`}
            onClick={() => setActiveSection('monitor')}
          >
            Monitor
          </button>
          <button 
            className={`${styles.toggleButton} ${activeSection === 'agent' ? styles.active : ''}`}
            onClick={() => setActiveSection('agent')}
          >
            Agent
          </button>
          <button 
            className={`${styles.toggleButton} ${activeSection === 'alerting' ? styles.active : ''}`}
            onClick={() => setActiveSection('alerting')}
          >
            Alerting Chain
          </button>
        </div>
      </div>

      <div className={styles.separator} style={{ margin: '0px 0px 0px 0px' }}></div>

      <div className={styles.content}>
        {activeSection === 'monitor' && (
          <div>
            <MemberMap />
            <DataTable />
          </div>
        )}
        {activeSection === 'agent' && <Chatbot />}
        {activeSection === 'alerting' && <AlertingChain />}
      </div>
    </div>
  );
};

export default MembersPage;