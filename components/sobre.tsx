import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import Proposta from '@/components/proposta'
import MarcioImg01 from '@/public/images/marcio01.jpg'
import MarcioImg02 from '@/public/images/marcio02.jpg'
import MarcioImg03 from '@/public/images/marcio03.jpg'

export default function Sobre() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl text-vermelho-900 mx-auto text-justify pb-14 md:pb-16">
            <h1 className="h2 mb-4">MÁRCIO AMAZONAS</h1>
            
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={MarcioImg01} width={540} height={405} alt="Features 02" />
      </div>
            <p className="text-xl text-gray-400">
            
            Márcio Amazonas é procurador do Trabalho desde 2010, tendo oficiado no Amapá, na Bahia, no Distrito Federal e em Sergipe.
            Ele fez parte da administração superior da Procuradoria-Geral do Trabalho entre 2015 e 2021, como Secretário Jurídico e Secretário de Relações Institucionais, atuações que fizeram de Márcio o candidato mais votado na última eleição para PGT.
            Movido pelo desejo de fazer o Ministério Público do Trabalho avançar e pelo orgulho de ser MPT, Márcio é novamente candidato em 2023, com uma campanha propositiva e a defesa de um programa de gestão sólido intitulado de MPT+.
            Márcio acredita num MPT de todas e de todos, mais democrático, estruturado e forte, com foco nas ações finalísticas, capaz de projetar e engrandecer a instituição.
            </p>
            <div className="flex-row" data-aos="fade-up">
        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={MarcioImg02} width={400} height={350} alt="Features 02" />
        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={MarcioImg03} width={400} height={350} alt="Features 02" />
      </div>
          </div>
        </div>
      </div>
    </section>
  )
}