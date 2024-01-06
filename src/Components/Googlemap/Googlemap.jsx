import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComp = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
  });

  const center = { lat: 28.36055427162364, lng: 77.27784078523807 };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="w-11/12 mx-auto h-full">
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={10}
        onLoad={() => console.log('Map loaded')}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComp;
