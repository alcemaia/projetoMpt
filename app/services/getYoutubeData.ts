export const apiYouTube = async () => {
  let response
  const API_SITE = process.env.NEXT_PUBLIC_API_SITE
  const url = `${API_SITE}/api/hello`
  
  const receivedData = await fetch(url).then(r=>r.json())
  const data = receivedData.data
  if(data !== undefined) {
    // RESOLVE OS DADOS. 
    const lastSix = receivedData.data.filter((post:any, index: number) => {
        if(index <= 5) return true
        return false
    })
    if(lastSix !== undefined) {
      response = lastSix
    }
  } else {
    // ESCONDE O COMPONENT E PLOTA O ERRO
  }
  return response
}
