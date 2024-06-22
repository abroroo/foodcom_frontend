import React from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"

interface MapDisplayProps {
  center: { lat: number; lng: number }
  onClick: (map: any, mouseEvent: any) => void
}

const MapDisplay: React.FC<MapDisplayProps> = ({ center, onClick }) => {
  return (
    <Map
      className="h-[200px] w-[300px] border md:h-[400px] md:w-[500px]"
      center={center}
      level={3}
      onClick={onClick}
    >
      <MapMarker position={center} />
    </Map>
  )
}

export default MapDisplay
