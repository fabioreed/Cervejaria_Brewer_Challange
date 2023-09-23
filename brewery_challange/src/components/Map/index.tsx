import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const MapComponent = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBGm-26TTfRtzk18RaEGtkSPYnjrJUdcyU'
  })

  const position = {
    lat: latitude,
    lng: longitude
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%'}}
      center={{
        lat: latitude,
        lng: longitude
      }}
      zoom={15}
    >
      <Marker position={position} />
    </GoogleMap>
  ) : <></>
}

export default MapComponent
