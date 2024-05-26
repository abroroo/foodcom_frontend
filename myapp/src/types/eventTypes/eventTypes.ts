// Define the interface for an event type
export interface EventDataType {
  id: EventKeysType
  value: string
  iconSrc: string
  label: string
  color: string
}

// Define the type for the keys of the eventTypes object
export type EventKeysType =
  | "business"
  | "public"
  | "festival"
  | "birthday"
  | "wedding"
  | "steak"
  | "fingerFood"
  | "otherEvent"
