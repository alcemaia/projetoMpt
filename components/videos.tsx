import { VideosPageProps } from '@/types/api';
import VideoCard from './videoCard';

export default function Videos(props: VideosPageProps) {
  const {title, ytPosts} = props
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-left pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-vermelho-900">{title}</h2>
          </div>
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {ytPosts?.map((card: any) => {
              return (
                <VideoCard
                  key={card.media_url}
                  title={card.title}
                  video_url={card.video_url}
                  media_url={card.media_url}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
