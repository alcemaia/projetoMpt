import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import Proposta from '@/components/proposta'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Um candidato, diferentes propostas</h1>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div>
          <div className="grid gap-20">
          <Proposta
            isLeft={false} 
            itemA={'Duis aute irure dolor in reprehenderit'}
            itemB={'Excepteur sint occaecat'}
            itemC={'Amet consectetur adipiscing elit'}
            topTitle={'Este é o complemento superior'}
            title={'Essa é a primeira proposta'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            img={FeatImage01}
          />
          <Proposta
            isLeft={true} 
            itemA={'Duis aute irure dolor in reprehenderit'}
            itemB={'Excepteur sint occaecat'}
            itemC={'Amet consectetur adipiscing elit'}
            topTitle={'Este é o complemento superior'}
            title={'Essa é a primeira proposta'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            img={FeatImage01}
          />
          </div>
        </div>
      </div>
    </section>
  )
}
