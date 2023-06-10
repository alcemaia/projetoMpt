"use client"; // This is a client component 👈🏽
import { useState, useEffect } from 'react';

import { sendContactForm } from '@/app/services/sendContactForm';
import { ContactFormProps, InitValuesForm } from '../../../types/api';

const initValues: ContactFormProps = {
  email: '',
  name: '',
  subject: '',
  msg: '',
}

const initState: InitValuesForm = {
  values: initValues
}

export default function SignIn() {
  const [statePage, setStatePage] = useState<string>('clear');
  const [stateMsgText, setStateMsgText] = useState<string>('Enviando...');
  const [state, setState] = useState<InitValuesForm>(initState);
  const { values } = state
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setStatePage('loading')
    const response = await sendContactForm(state)
    if (response) {
      setStateMsgText('Mensagem enviada com sucesso')
        setTimeout(()=> {
          setStatePage('clear')
        }, 2000)
    } else {
      setStateMsgText('Um erro aconteceu, tente novamente')
        setTimeout(()=> {
          setStatePage('clear')
        }, 2000)
    }
  };
  const handlerChange = ({target}: any) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))
  }

  useEffect(() => {
  }, [statePage])

  return (
    <>
    {
      statePage === 'clear' && (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center text-vermelho-900 pb-12 md:pb-20">
              <h1 className="h1">Manifeste também o seu orgulho de ser MPT</h1>
            </div>
            <div className="max-w-sm mx-auto">
              <div className="flex items-center my-6">
                <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                <div className="text-gray-400">Preencha o formulário</div>
                <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Nome</label>
                    <input 
                      onChange={handlerChange} 
                      id="subject" 
                      name="name" 
                      type="text" 
                      className="form-input w-full text-gray-300" 
                      placeholder="Nome" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">E-mail</label>
                    <input
                      value={values.email}
                      onChange={handlerChange}
                      id="email" 
                      name="email" 
                      type="email" 
                      className="form-input w-full text-gray-300" 
                      placeholder="seuemail@gmail.com" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Ação proposta</label>
                    <input 
                      onChange={handlerChange} 
                      id="subject" 
                      name="subject" 
                      type="text" 
                      className="form-input w-full text-gray-300" 
                      placeholder="Digite aqui" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Como você pode ter ainda mais orgulho de ser MPT</label>
                      <textarea 
                        id="w3review" 
                        onChange={handlerChange} 
                        name="msg" 
                        className="form-input w-full text-gray-300" 
                        placeholder="Digite aqui sua mensagem"
                        rows={4} 
                        cols={50}
                      />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button type="submit" className="btn text-white bg-vermelho-900 hover:bg-custom-200 w-full">Enviar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )}
    {statePage === 'loading' && (
    <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h3 mt-200">{stateMsgText}</h1>
              </div>
          </div>
      </div>
    </section>
    )}
    </>
  )
}


