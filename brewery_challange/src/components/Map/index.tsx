import React, { useEffect, useRef } from 'react'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

const MapComponent = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        target: mapRef.current!,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [longitude, latitude],
          zoom: 15,
        }),
      })

      return () => {
        // Cleanup when the component unmounts
        map.setTarget(null)
      }
    }
  }, [latitude, longitude])

  return (
    <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
  )
}

export default MapComponent
