import { mailOptions, transporter } from '@/app/services/nodemailer'
import { MailProps } from '@/types/api'
import { htmlConstructor } from './helpers'
export async function GET(request: Request) {
  // ESTÁ COMENTADA REQUEST REAL PARA ECONOMIZAR FREE TOKEN
  const ytToken = process.env.NEXT_PUBLIC_YT_TOKEN
  const playlist = process.env.NEXT_PUBLIC_PLAYLIST
  let responseHandler
  const youtubeURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist}&key=${ytToken}&maxResults=6&part=snippet`
  const data = await fetch(youtubeURL).then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error(error);
    });
  if (data !== undefined) {
    if(data.items !== undefined) {
      const dataArr = data.items
      const dataInResponsePattern = dataArr.map((itemVideo: any) => {
        console.log(itemVideo)
        const data = itemVideo.snippet
        const videoId = data.resourceId
        const thumbnails = data.thumbnails.medium.url !== undefined ? data.thumbnails.medium.url : data.thumbnails.standard.url
        const retorno = {
          title: data.title,
          description: data.description,
          video_url: `https://www.youtube.com/watch?v=${videoId.videoId}`,
          media_url: thumbnails,
        }
        console.log(retorno)
        return retorno
      })
      // console.log()
      responseHandler = dataInResponsePattern
    }
  }
  const response = { data: responseHandler }
  return new Response(JSON.stringify(response))
}


export async function POST(request: Request) {
  const req = await request.json()
  const { values } = req
  const html = htmlConstructor(values)
  const mailOpt: MailProps = mailOptions as MailProps
  try {
    await transporter.sendMail(
      {
        ...mailOpt,
        subject: `Mensagem de ${values.name}`,
        html: html
      }
    )
    const resposta = JSON.stringify({ 
      success: true,
      data: []
    })
    return new Response(resposta)
  } catch (err) {
    const resposta = JSON.stringify({ 
      error: true,
      data: err
    })
    return new Response(resposta)
  }
}