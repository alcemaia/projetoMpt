import { VideosPageProps } from '@/types/api';
import VideoCard from './videoCard';

export default function Videos(props: VideosPageProps) {
  const {title, description, ytPosts} = props
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{title}</h2>
            <p className="text-xl text-gray-400">{description}</p>
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
