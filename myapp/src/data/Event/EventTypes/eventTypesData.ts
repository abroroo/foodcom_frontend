import { EventDataType } from "@/types/eventTypes/eventTypes"

import { eventIconUrls } from "../EventIcons/eventIconUrls"

export const eventsData: EventDataType[] = [
  {
    key: "business",
    value: "business",
    iconSrc: eventIconUrls.business,
    label: "기업 이벤트",
  },
  {
    key: "public",
    value: "public",
    iconSrc: eventIconUrls.public,
    label: "사회 단체행사",
  },
  {
    key: "festival",
    value: "festival",
    iconSrc: eventIconUrls.festival,
    label: "기관, 축제등",
  },
  {
    key: "birthday",
    value: "birthday",
    iconSrc: eventIconUrls.birthday,
    label: "가족 개인행사",
  },
  {
    key: "wedding",
    value: "wedding",
    iconSrc: eventIconUrls.wedding,
    label: "스몰웨딩, 야외결혼",
  },
  {
    key: "steak",
    value: "steak",
    iconSrc: eventIconUrls.steak,
    label: "스테이크 행사",
  },
  {
    key: "fingerFood",
    value: "fingerFood",
    iconSrc: eventIconUrls.fingerFood,
    label: "핑거푸드",
  },
  {
    key: "otherEvent",
    value: "",
    iconSrc: eventIconUrls.otherEvent,
    label: "도시락.기타 행사",
  },
]
