import { useCallback, useState } from "react"

export const useCustomerAPI = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const createNewCustomer = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("https://api.food-c.co.kr/api/new_customer", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!res.ok) {
        throw new Error("Failed to fetch new customer.")
      }

      const data = await res.json()
      return data.ticket_number
    } catch (error) {
      setError(error as Error)
      console.error("Error in createNewCustomer:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  const saveFormData = useCallback(
    async (ticket_number: string, formData: any) => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(
          `https://api.food-c.co.kr/api/process_data/${ticket_number}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        )

        if (!res.ok) {
          throw new Error("Failed to save form data.")
        }
        const data = await res.json()
        return data
      } catch (error) {
        setError(error as Error)
        console.error("Error in saveFormData:", error)
        throw error
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return {
    createNewCustomer,
    saveFormData,
    loading,
    error,
  }
}
