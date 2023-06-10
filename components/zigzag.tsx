import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import Proposta from '@/components/proposta'

const mockPropostas = [
  {
    key: 'unique_key_a',
    isLeft: true, 
    points: [
      'Estreitar o diálogo entre a administração superior e a base;', 
      'Promover encontros regulares nas sedes das PRTs;',
      'Assegurar o acesso pleno ao PGT',
      'Tornar a administração superior mais plural e representativa;',
      'Instituir o Colégio de PChefes como instância deliberativa;',
      'Criar o Colégio de Gestores com PChefes e coordenadores de PTM;',
      'Criar o Comitê da Diversidade na administração superior.'
    ], 
    //topTitle: 'Este é o complemento superior',
    title: 'MPT+ Democrático',
    //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: FeatImage01,
  }, 
  {
    key: 'unique_key_b',
    isLeft: false, 
    points: [
      'Assegurar a estrutura física necessária a gabinetes;', 
      'Assegurar o quantitativo de servidores necessário a gabinetes;',
      'Aprimorar a gestão orçamentária;',
      'Tornar o orçamento participativo;',
      'Priorizar a atividade finalística;',
      'Lutar pela paridade remuneratória entre os ramos do MPU e os demais ramos do MP Nacional;',
      ' Fortalecer a segurança institucional;',
      'Fortalecer as Tecnologias de Informação;',
      'Criar os Ofícios Digitais;',
      'Desenvolver a Assistência Virtual para peças complexas'
    ], 
    //topTitle: 'Este é o complemento superior',
    title: 'MPT+ Estruturado',
    //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: FeatImage02,
  }, 
  {
    key: 'unique_key_c',
    isLeft: true, 
    points: [
      'Retomar o protagonismo na defesa de Direitos Sociais', 
      'Aperfeiçoar a Comunicação Social;',
      'Tornar o MPT mais transparente;',
      'Promover campanhas de mobilização social;',
      'Aproximar o MPT da sociedade',
    ], 
   // topTitle: 'Este é o complemento superior',
    title: 'MPT+ Forte',
    //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: FeatImage03,
  }, 
]
export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl text-vermelho-900 mx-auto text-justify pb-12 md:pb-16">
            <h1 className="h2 mb-4">MPT+</h1>
            <p className="text-xl text-gray-400">
              A palavra de ordem na gestão pública deve ser planejamento. É o que pensa e defende Márcio Amazonas, candidato a Procurador-Geral do Trabalho. 
              Por isso mesmo, ele criou, a partir do diálogo com colegas e especialistas, o programa de gestão MPT+, baseado em três eixos estratégicos, que reúnem metas a serem cumpridas pela próxima gestão do Ministério Público do Trabalho. São eles: +MPT+ democrático, MPT+ estruturado e MPT+ forte*. 
              A ideia do programa é permitir que as diretrizes pensadas para o biênio 2023-2025 possam ser conhecidas em profundidade pelos demais procuradores e procuradoras do Trabalho, bem como os meios para serem executadas e os reflexos positivos que terão para o fortalecimento da instituição.
            </p>
          </div>

          <div className="max-w-3xl text-vermelho-900 mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">PROPOSTAS</h1>
          </div>
          <div className="grid gap-20">
            {
              mockPropostas.map((proposta:any)=>{
                return (          
                  <Proposta
                    key={proposta.key}
                    isLeft={proposta.isLeft}
                    points={proposta.points} 
                    topTitle={proposta.topTitle}
                    title={proposta.title}
                    description={proposta.description}
                    img={proposta.img}
                  />)
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}