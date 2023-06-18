import { agendaData } from '@/app/(default)/data';
import React from 'react';

export default function Agenda() {
  const dataAtual = new Date();
  const today = dataAtual.getDate();
  const toMonth = dataAtual.getMonth() + 1; // Os meses são indexados de 0 a 11, então é necessário adicionar 1

  // Filtra os dados importados de agendaData
  const filteredAgenda = agendaData.filter(item => {
    const itemMonth = Number(item.mouth);
    const itemDay = Number(item.day);
    return (itemMonth >= toMonth) || (itemMonth === toMonth && itemDay >= today);
  });

  const halfLength = Math.ceil(filteredAgenda.length / 2);
  const firstHalf = filteredAgenda.slice(0, halfLength);
  const secondHalf = filteredAgenda.slice(halfLength);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl text-vermelho-900 mx-auto text-center pb-14 md:pb-16">
            <h1 className="h2 mb-4">AGENDA</h1>

            <div className="grid grid-cols-2 gap-4">
              <div className="col">
                {firstHalf.map((item, index) => (
                  <p
                    key={item.day + item.mouth + item.place}
                    className="text-x text-gray-400 mt-4 font-bold"
                  >
                    {`${item.day}/${item.mouth}`} - {item.place}
                  </p>
                ))}
              </div>

              <div className="col">
                {secondHalf.map((item, index) => (
                  <p
                    key={item.day + item.mouth + item.place}
                    className="text-x text-gray-400 mt-4 font-bold"
                  >
                    {`${item.day}/${item.mouth}`} - {item.place}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex-row" data-aos="fade-up">
              <div className="flex flex-wrap"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
