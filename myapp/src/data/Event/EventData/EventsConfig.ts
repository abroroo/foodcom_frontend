import { EventDataType } from "@/types/eventTypes/eventTypes"

import { eventIconUrls } from "../EventIcons/eventIconUrls"

export const EventsConfig: EventDataType[] = [
  {
    id: "wedding",
    value: "wedding",
    iconSrc: eventIconUrls.wedding,
    imageSrc: imageSources.wedding,
    label: "스몰웨딩, 야외결혼",
    color: "#F25287",
  },
  {
    id: "business",
    value: "business",
    iconSrc: eventIconUrls.business,
    imageSrc: imageSources.business,
    label: "기업 이벤트",
    color: "#2563EB",
  },
  {
    id: "public",
    value: "public",
    iconSrc: eventIconUrls.public,
    imageSrc: imageSources.public,
    label: "사회 단체행사",
    color: "#047857",
  },
  {
    id: "festival",
    value: "festival",
    iconSrc: eventIconUrls.festival,
    imageSrc: imageSources.festival,
    label: "기관, 축제등",
    color: "#7C3AED",
  },
  {
    id: "birthday",
    value: "birthday",
    iconSrc: eventIconUrls.birthday,
    imageSrc: imageSources.birthday,
    label: "가족 개인행사",
    color: "#9D174D",
  },
  {
    id: "fingerFood",
    value: "fingerFood",
    iconSrc: eventIconUrls.fingerFood,
    imageSrc: imageSources.fingerFood,
    label: "핑거푸드",
    color: "#F8B400",
  },

  {
    id: "steak",
    value: "steak",
    iconSrc: eventIconUrls.steak,
    imageSrc: imageSources.steak,
    label: "스테이크 행사",
    color: "#FE0000",
  },

  {
    id: "otherEvent",
    value: "otherEvent",
    iconSrc: eventIconUrls.otherEvent,
    imageSrc: imageSources.otherEvent,
    label: "도시락.기타 행사",
    color: "#C05621",
  },
]
