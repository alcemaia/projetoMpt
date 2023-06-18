import { InitValuesForm } from "@/types/api"
export const sendContactForm = async (data: InitValuesForm) => {
    let response = false
    const url = '/api/hello'
        const requestData = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    }).then(requestResponse=> requestResponse.json())
    if (requestData.success !== undefined) response = true
    return response
}