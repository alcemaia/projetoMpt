import { IgPostProps } from "@/types/api";

export const apiInstagram = async () => {
  let response
  
  const  limitarString = (texto: string, limite: number): string => {
  if (texto.length <= limite) {
    return texto;
  }
  return texto.substr(0, limite) + '...'; 
  }

  const accessToken = process.env.NEXT_PUBLIC_IG_TOKEN
  const fields = 'media_url,media_type,permalink,id,caption'
  const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}`
  
  
  const receivedData = await fetch(url).then(r=>r.json())
  const data = receivedData.data
  if(data !== undefined) {
    const filterPosts = receivedData.data.filter((post:any, index: number) => {
        if (post.media_type !== 'IMAGE') return false
        return true
    })
    const lastSix = filterPosts?.filter((post:any, index: number) => {
        if(index <= 5) return true
        return false
    })
    if(lastSix !== undefined) {
      const postData: IgPostProps = lastSix.map((post: IgPostProps) => {

        const newTitle = limitarString(post.caption, 30)
        const returnPost: IgPostProps = {
          id: post.id, 
          title: newTitle,
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
