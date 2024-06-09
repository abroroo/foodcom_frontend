import { useMemo } from "react"
import { useGlobalForm } from "@/context/GlobalFormContext"
import { toolConfig } from "@/data/Accessories/AccessoriesConfig"
import { EventsConfig } from "@/data/Event/EventData/EventsConfig"
import { formatDate } from "@/utils/formateDate"

export const useEventDetails = () => {
  const { formData } = useGlobalForm()

  const eventConfig = useMemo(() => {
    return EventsConfig.find((event) => event.value === formData.event_type)
  }, [formData.event_type])

  const eventLabel = useMemo(() => {
    return eventConfig?.value === "otherEvent"
      ? formData.event_other_value
      : eventConfig?.label
  }, [eventConfig, formData.event_other_value])

  const toolLabels = useMemo(() => {
    return formData.tool
      .map((toolValue: any) => {
        const tool = toolConfig.find((tool) => tool.value === toolValue.trim())
        return tool ? tool.label : toolValue
      })
      .join(", ")
  }, [formData.tool])

  const venue = useMemo(() => {
    return formData.event_place === "기타"
      ? formData.custom_event_place
      : formData.event_place
  }, [formData.event_place, formData.custom_event_place])

  const formattedDate = useMemo(() => {
    return formatDate(formData.event_date)
  }, [formData.event_date])

  return {
    eventLabel,
    toolLabels,
    venue,
    formattedDate,
  }
}
