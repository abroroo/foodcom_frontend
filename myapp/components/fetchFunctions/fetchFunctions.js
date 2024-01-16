// Fetch functions

export const createNewCustomer = async () => {
  try {
    const res = await fetch("https://api.food-c.co.kr/api/new_customer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch new customer.");
    }

    const data = await res.json();
    return data.ticket_number; // return ticket number
  } catch (error) {
    console.log("Error in createNewCustomer:", error);
    throw error; // Propagate the error for handling in the component
  }
};

export const saveFormData = async (ticket_number, formData) => {
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
    );
    // console.log('Sent data to backedn: ', formData)
    if (!res.ok) {
      throw new Error("Failed to save form data.");
    }

    const data = await res.json();
    //console.log("Response from backend:", data);
  } catch (error) {
    console.log("Error in saveFormData:", error);
    throw error;
  }
};

export const generatePdf = async (ticket_number) => {
  try {
    const res = await fetch(
      `https://api.food-c.co.kr/api/generatepdf/${ticket_number}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to generate PDF.");
    }


  } catch (error) {
    console.log("Error in generatePdf:", error);
    throw error;
  }
};
