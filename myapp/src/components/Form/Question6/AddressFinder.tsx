// AddressFinder.tsx
import React, { ChangeEvent, useState } from "react"
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { UseFormSetValue } from "react-hook-form"
import { useKakaoLoader } from "react-kakao-maps-sdk"

import MapDisplay from "./AddressComponents/MapDisplay"
import SearchInput from "./AddressComponents/SearchInput"
import SearchResult from "./AddressComponents/SearchResult"
import { AddressFormType } from "./AddressQuestion"

interface AddressFinderProps {
  setEventAddress: UseFormSetValue<AddressFormType>
  buttonBackground: string
}

const AddressFinder: React.FC<AddressFinderProps> = ({
  setEventAddress,
  buttonBackground,
}) => {
  const kakao_api_key = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY

  //TODO: gotta check if it works for AWS before merge into main
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
      setSearchResults(data)
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      // Handle zero results
      setSearchResults([])
      //alert("No results found.")
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      // Handle errors
      alert("An error occurred while searching. Please try again later.")
    }
  }

  const handleAddressSelect = (place: any, index: number) => {
    setSelectedItemIndex(index)
    setSelectedAddress(place)
    setCenter({
      lat: place.y,
      lng: place.x,
    })
    setEventAddress("address", place.address_name)
  }

  const handleMapClick = (_target: any, mouseEvent: any) => {
    setCenter({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    })
  }

  return (
    <div className="">
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
        <SearchInput
          value={addressQuery}
          onChange={handleAddressChange}
          placeholder="주소를 입력하세요"
        />
      </motion.div>

      <div className="search-results">
        {searchResults.length > 0 && (
          <ul className="flex flex-wrap ">
            {searchResults.slice(0, 4).map((place, index) => (
              <SearchResult
                key={`${index}-${place.address_name}`}
                place={place}
                index={index}
                selected={selectedItemIndex === index}
                onClick={handleAddressSelect}
                buttonBackground={buttonBackground}
              />
            ))}
          </ul>
        )}
      </div>

      {selectedAddress && (
        <MapDisplay center={center} onClick={handleMapClick} />
      )}
    </div>
  )
}

export default AddressFinder
