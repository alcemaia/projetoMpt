import Card from '@/components/card'

export default function Propostas() {
  const mockUrl = "https://scontent.cdninstagram.com/v/t51.2885-15/82318333_470935963599832_2235932132522600038_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4nskLHruwT8AX8FgAN1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDNxRiWTFhhxKbFiobovQffrWn-CW5QqyqD18Jm8B_KGA&oe=647039A1"
  const data = [
    {
      title: "Cidade Amarela",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      img: mockUrl
    },
    {
      title: "Mobilidade Urbana",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      img: mockUrl
    },
    {
      title: "Lei de Incetivo a Cultura",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      img: mockUrl
    },
    {
      title: "Assistência Social",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      img: mockUrl
    },
    {
      title: "Reajuste Salarial",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      img: mockUrl
    },
    {
      title: "Programas sociais",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      img: mockUrl
    },

  ]
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Conheça minhas propostas de governo.</h2>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {data?.map((card) => {
              return (
                <Card
                  title={card.title}
                  description={card.description}
                  img={card.img}
                  />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
