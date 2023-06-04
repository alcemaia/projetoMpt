const datamock = {data:[
  {
    title: 'Márcio Amazonas - Por um MPT mais forte',
    description: '',
    video_url: 'https://www.youtube.com/watch?v=TWrizVQmiEQ',
    media_url: 'https://i.ytimg.com/vi/TWrizVQmiEQ/sddefault.jpg'
  },
  {
    title: 'Márcio Amazonas - Orçamento',
    description: '',
    video_url: 'https://www.youtube.com/watch?v=ERZkbpFUY9s',
    media_url: 'https://i.ytimg.com/vi/ERZkbpFUY9s/sddefault.jpg'
  },
  {
    title: 'Márcio Amazonas - Eixo Articulação',
    description: '',
    video_url: 'https://www.youtube.com/watch?v=lbqVHNF3EPk',
    media_url: 'https://i.ytimg.com/vi/lbqVHNF3EPk/sddefault.jpg'
  },
  {
    title: 'Márcio Amazonas - Eixo TI e Inovação',
    description: '',
    video_url: 'https://www.youtube.com/watch?v=P36z6MHHf-Y',
    media_url: 'https://i.ytimg.com/vi/P36z6MHHf-Y/sddefault.jpg'
  },
  {
    title: 'Márcio Amazonas - Eixo Estrutura de Trabalho (Teletrabalho)',
    description: '',
    video_url: 'https://www.youtube.com/watch?v=aH0TCWPonD0',
    media_url: 'https://i.ytimg.com/vi/aH0TCWPonD0/sddefault.jpg'
  },
  {
    title: 'Márcio Amazonas - Eixo Estrutura de Trabalho',
    description: '',
    video_url: 'https://www.youtube.com/watch?v=5oS0HH1DzX0',
    media_url: 'https://i.ytimg.com/vi/5oS0HH1DzX0/sddefault.jpg'
  }
]}
import { mailOptions, transporter } from '@/app/services/nodemailer'
import { MailProps } from '@/types/api'
import { htmlConstructor } from './helpers'
export async function GET(request: Request) {
  console.log('GET')
  // ESTÁ COMENTADA REQUEST REAL PARA ECONOMIZAR FREE TOKEN
  // const ytToken = process.env.NEXT_PUBLIC_YT_TOKEN
  // const playlist = process.env.NEXT_PUBLIC_PLAYLIST
  // const youtubeURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist}&key=${ytToken}&maxResults=6&part=snippet`
  // const data = await fetch(youtubeURL).then(response => response.json())
  //   .then(data => data)
  //   .catch(error => {
  //     console.error(error);
  //   });
  // if (data !== undefined) {
  //   if(data.items !== undefined) {
  //     const dataArr = data.items
  //     const aaa = dataArr.map((e) => {
  //       const data = e.snippet
  //       const videoId = data.resourceId
  //       const thumbnails = data.thumbnails.standard.url
  //       const retorno = {
  //         title: data.title,
  //         description: data.description,
  //         link: `https://www.youtube.com/watch?v=${videoId.videoId}`,
  //         thumbnails,
  //       }
  //       console.log(retorno)
  //       return retorno
  //     })
  //     // console.log(dataArr)
      
  //   }
  // }
    // console.log(data)
    // // return new Response(resposta)
    return new Response(JSON.stringify(datamock))

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
        // text: "testa é uma string",
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