import React, { ChangeEvent, useState } from "react"
import {
  faLocationDot,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk"

interface AddressFinderProps {
  setEventAddress: React.Dispatch<React.SetStateAction<string>>
  buttonBackground: string
}

const AddressFinder: React.FC<AddressFinderProps> = ({
  setEventAddress,
  buttonBackground,
}) => {
  const kakao_api_key = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY

  //TODO: gotta check if it works for AWS  before merge into main
  const [loading, error] = useKakaoLoader({
    appkey: `${kakao_api_key}`,
    libraries: ["clusterer", "drawing", "services"],
  })

  const [addressQuery, setAddressQuery] = useState<string>("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [selectedAddress, setSelectedAddress] = useState<any | null>(null)
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 37.5566803113882,
    lng: 126.904501286522,
  })
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  )

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setAddressQuery(query)

    const ps = new window.kakao.maps.services.Geocoder()
    ps.addressSearch(query, placesSearchCB)
  }

  const placesSearchCB = (data: any, status: any, pagination: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      // No need to extract only address names, keep the entire data
      setSearchResults(data)
    }
  }

  const handleAddressSelect = (place: any, index: number) => {
    setSelectedItemIndex(index)
    setSelectedAddress(place) // Pass the entire place object
    //console.log("This is selectedAddress: ", selectedAddress)
    setCenter({
      lat: place.y,
      lng: place.x,
    })
    setEventAddress(place.address_name)
  }

  const handleSubmitAddress = () => {
    if (selectedAddress) {
      const { lat, lng } = selectedAddress // Extract lat and lng
      const exactAddress = `${lat}, ${lng}` // Format the address as needed
      // console.log('Selected Address:', exactAddress);
      setEventAddress(selectedAddress.address_name)
    } else {
      alert("Please select an address from the suggestions.")
    }
  }

  const handleMapClick = (map: any, mouseEvent: any) => {
    // Create a new InfoWindow object
    const newInfoWindow = new window.kakao.maps.InfoWindow({
      content: addressQuery, // Use addressQuery here or the appropriate variable
      position: selectedAddress.latLng,
    })

    // setInfoWindow(newInfoWindow); // Uncomment this if needed
  }

  return (
    <div className="w-[90%]">
      <motion.h1
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="mb-5 flex items-center justify-center  text-[0.9rem] font-semibold lg:text-[1.2rem]"
      >
        <FontAwesomeIcon
          icon={faMapLocationDot}
          style={{ color: buttonBackground }}
          className="mr-2 h-9 w-9"
        />{" "}
        행사예정 지역이나 주소지를 <br className="block md:hidden" />
        입력하여 선택해주세요
      </motion.h1>
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className="mb-4 flex"
      >
        <input
          type="text"
          value={addressQuery}
          onChange={handleAddressChange}
          className="my-0 mt-1 h-[40px] w-[100%] flex-grow border-b-[1px] border-slate-200 pb-0 text-[14px] text-[#49111c] focus:border-[#49111c] focus:outline-none md:text-[17px]"
          required
          placeholder="주소를 입력하세요"
        />
      </motion.div>

      <div className="search-results">
        {searchResults.length > 0 && (
          <ul className="flex flex-wrap ">
            {searchResults.slice(0, 4).map((place, index) => (
              <motion.li
                initial={{ scale: 1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.2, type: "spring", bounce: 0.25 }}
                key={`${index}-${place.address_name}`} // Use a unique key
                onClick={() => handleAddressSelect(place, index)}
                className="search-result mb-2 flex w-full cursor-pointer items-center justify-start rounded-lg border-b p-2 shadow-sm hover:bg-slate-50 md:mx-[2px] md:mb-3 md:w-[49%]"
                style={
                  selectedItemIndex === index
                    ? {
                        background: buttonBackground,
                        color: "#fff",
                        fontWeight: "bold",
                      }
                    : {}
                }
              >
                <FontAwesomeIcon
                  style={{ color: buttonBackground }}
                  icon={faLocationDot}
                  className="mr-1 h-8 w-4"
                />{" "}
                {place.address_name}
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      {selectedAddress && (
        <Map
          className="h-[200px] w-full border md:h-[300px]"
          center={center}
          level={3}
          //onClick={handleMapClick}
          onClick={(_target, mouseEvent) => {
            setCenter({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })
            handleMapClick
          }}
        >
          <MapMarker position={center} />
        </Map>
      )}
    </div>
  )
}

export default AddressFinder
