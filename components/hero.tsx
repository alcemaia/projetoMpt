import VideoThumb from '@/public/images/ma_hero.jpg'
import ModalVideo from '@/components/modal-video'
import { colorTheme } from '@/app/colors'

export interface HeroProps {
  title: string
  description: string
}
export default function Hero(props: HeroProps) {
  const {title, description } = props
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
        </div>

        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/teste.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}
