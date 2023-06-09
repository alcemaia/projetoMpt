import Image from 'next/image'

import MarcioImg01 from '@/public/images/m1.jpg'
import MarcioImg02 from '@/public/images/m2.jpg'
import MarcioImg03 from '@/public/images/m3.jpg'
import ModalImage from './modal-img'


export default function Sobre() {
  const thumbWidth = 300
  const imageWidth = 900
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl text-vermelho-900 mx-auto text-justify pb-14 md:pb-16">
            <h1 className="h2 mb-4">MÁRCIO AMAZONAS</h1>
            <div className="flex flex-row flex-warp mb-10 mt-10" data-aos="fade-up">
              <div className="flex flex-warp flex-auto  bg-gray-100">
                <ModalImage
                  thumb={MarcioImg01}
                  thumbWidth={thumbWidth}
                  imageWidth={imageWidth}
                  thumbAlt="Márcio Amazonas"
                />
              </div>
              <div className="flex flex-warp flex-auto  bg-custom-100">
                <ModalImage
                  thumb={MarcioImg02}
                  thumbWidth={thumbWidth}
                  imageWidth={imageWidth}
                  thumbAlt="Márcio Amazonas"
                />
              </div>
              <div className="flex flex-warp flex-auto  bg-red">
                <ModalImage
                  thumb={MarcioImg03}
                  thumbWidth={thumbWidth}
                  imageWidth={imageWidth}
                  thumbAlt="Márcio Amazonas"
                />
              </div>
            </div>
            <p className="text-xl text-gray-400 mt-8">
              Márcio Amazonas é procurador do Trabalho desde 2010, tendo oficiado no Amapá, na Bahia, no Distrito Federal e em Sergipe.
              Ele fez parte da administração superior da Procuradoria-Geral do Trabalho entre 2015 e 2021, como Secretário Jurídico e Secretário de Relações Institucionais, atuações que fizeram de Márcio o candidato mais votado na última eleição para PGT.
              Movido pelo desejo de fazer o Ministério Público do Trabalho avançar e pelo orgulho de ser MPT, Márcio é novamente candidato em 2023, com uma campanha propositiva e a defesa de um programa de gestão sólido intitulado de MPT+.
              Márcio acredita num MPT de todas e de todos, mais democrático, estruturado e forte, com foco nas ações finalísticas, capaz de projetar e engrandecer a instituição.
            </p>
            <div className="flex-row" data-aos="fade-up">
            <div className="flex flex-wrap">

            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}