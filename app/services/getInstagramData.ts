import { IgPostProps } from "@/types/api";

export const apiInstagram = async () => {
  let response
  const accessToken = process.env.NEXT_PUBLIC_IG_TOKEN
  const fields = 'media_url,media_type,permalink,id,caption'
  const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}`
  
  const receivedData = await fetch(url).then(r=>r.json())
  const data = receivedData.data
  if(data !== undefined) {
    // RESOLVE OS DADOS. 
    const lastSix = receivedData.data.filter((post:any, index: number) => {
        if(index <= 5) return true
        return false
    })
    if(lastSix !== undefined) {
      const postData: IgPostProps = lastSix.map((post: IgPostProps) => {
        const returnPost: IgPostProps = {
          id: post.id, 
          title: post.caption,
          description: 'Está é a descrição da proposta, post do Instagram ou vídeo.', 
          media_type: post.media_type,
          media_url: post.media_url,
          permalink: post.permalink,
          caption: post.caption
        }
        return returnPost
      })
      response = postData
    }
  } else {
    // ESCONDE O COMPONENT E PLOTA O ERRO
  }
  return response
}