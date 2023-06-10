export interface IgPostProps { 
    id:string 
    title?:string 
    description?:string 
    media_type: string
    media_url: string
    permalink: string
    caption: string
}

export interface InstagramPageProps{
    title: string
    description?: string
    igPosts: IgPostProps[]
}

export interface VgaPostProps { 
  title?:string 
  description?:string 
  media_url?: string
  video_url?: string
}
export interface VideosPageProps {
  title: string,
  description?: string
  ytPosts: VgaPostProps[]
}
export interface MailProps {
  from: string
  to: string
  cc: string
}
export interface ContactFormProps {
  email: string
  name: string
  subject: string
  msg: string
}
export interface InitValuesForm {
  values: ContactFormProps
}

export interface AccessValuesProps {
  password: string
}

export interface InitAccessValuesForm {
  values: AccessValuesProps
}