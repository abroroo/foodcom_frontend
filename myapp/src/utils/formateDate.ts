export const formatDate = (dateString: string, locale: string = "ko-KR") => {
  const eventDate = new Date(dateString)
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(eventDate)
}
