import { agendaData } from '@/app/(default)/data';
import React from 'react';

export default function Agenda() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl text-vermelho-900 mx-auto text-justify pb-14 md:pb-16">
            <h1 className="h2 mb-4">AGENDA</h1>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <div className="text-justify ml-45">
                  {agendaData.slice(0, Math.ceil(agendaData.length / 2)).map((item, index) => (
                    <p
                      key={item.day + item.mouth + item.place}
                      className={`text-lg mb-4 text-custom-200 ${index === agendaData.length - 1 ? "font-bold" : ""}`}
                    >
                      {`${item.day}/${item.mouth}`} - {item.place}
                    </p>
                  ))}
                </div>
              </div>

              <div className="col-span-1">
                <div className="text-justify ml-25">
                  {agendaData.slice(Math.ceil(agendaData.length / 2)).map((item, index) => (
                    <p
                      key={item.day + item.mouth + item.place}
                      className={`text-lg mb-4 text-custom-200 ${index === agendaData.length - 1 ? "font-bold" : ""}`}
                    >
                      {`${item.day}/${item.mouth}`} - {item.place}
                    </p>
                  ))}
                </div>
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
