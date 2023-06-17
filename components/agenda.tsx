


import { agendaData } from '@/app/(default)/data';
import React from 'react';


export default function Agenda() {
  const dataAtual = new Date();
  const today = dataAtual.getDate();
  const toMouth = dataAtual.getMonth() + 1; // Os meses são indexados de 0 a 11, então é necessário adicionar 1


  // filtra os dados importados de agendaData
  const filteredAgenda = agendaData.filter(item => {
    if (Number(item.mouth) >= Number(toMouth)) {
      const newDay = Number(item.mouth) > Number(toMouth) ? '01' : today
      if (Number(item.day) >= Number(newDay)) return true
    }
    return false
  })

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl text-vermelho-900 mx-auto text-center pb-14 md:pb-16">
            <h1 className="h2 mb-4">AGENDA</h1>
            {/* retorna o render do array filtrado */}
            { filteredAgenda.map((item, index) => {
              const arrSize = filteredAgenda.length
              const isLast = (arrSize - 1) === index
              return (<>
                {!isLast && (
                  <p key={item.day + item.mouth + item.place}className="text-sm mb-4 text-custom-200">{`${item.day}/${item.mouth}`} - {item.place}</p>
                )}
                {isLast && (
                  <p key={item.day + item.mouth + item.place}className="text-xl mb-4 text-custom-200">{`${item.day}/${item.mouth}`} - {item.place}</p>
                )}
              </>
                )
              })
            }
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