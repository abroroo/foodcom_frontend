import { EventDataType } from "@/types/eventTypes/eventTypes"

import { eventIconUrls } from "../EventIcons/eventIconUrls"

export const eventsData: EventDataType[] = [
  {
    id: "business",
    value: "business",
    iconSrc: eventIconUrls.business,
    label: "기업 이벤트",
  },
  {
    id: "public",
    value: "public",
    iconSrc: eventIconUrls.public,
    label: "사회 단체행사",
  },
  {
    id: "festival",
    value: "festival",
    iconSrc: eventIconUrls.festival,
    label: "기관, 축제등",
  },
  {
    id: "birthday",
    value: "birthday",
    iconSrc: eventIconUrls.birthday,
    label: "가족 개인행사",
  },
  {
    id: "wedding",
    value: "wedding",
    iconSrc: eventIconUrls.wedding,
    label: "스몰웨딩, 야외결혼",
  },
  {
    id: "steak",
    value: "steak",
    iconSrc: eventIconUrls.steak,
    label: "스테이크 행사",
  },
  {
    id: "fingerFood",
    value: "fingerFood",
    iconSrc: eventIconUrls.fingerFood,
    label: "핑거푸드",
  },
  {
    id: "otherEvent",
    value: "",
    iconSrc: eventIconUrls.otherEvent,
    label: "도시락.기타 행사",
  },
]
