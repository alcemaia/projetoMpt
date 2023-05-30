"use client"; // This is a client component 👈🏽
import { useState, useEffect } from 'react';

export const metadata = {
  title: 'Sign In - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'
const initValues = {
  email: '',
  name: '',
  subject: '',
  msg: '',
  sendCopy: false,
}
const initState = {
  values: initValues
}

export default function SignIn() {

  
  console.log('____________________________')
  const [formData, setFormData] = useState(initState);
  const [state, setState] = useState(initState);
  const [check, setCheck] = useState(false);
  const { values } = state
  const handleSubmit = async (event) => {
    console.log('aaaaaaaaaaaaaaaaaaaaaa')
    event.preventDefault();

    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response, 'rrrr')
      // if (response.ok) {
      //   // Handle successful response
      //   console.log('Request succeeded!');
      // } else {
      //   // Handle error response
      //   console.error('Request failed!');
      // }
    } catch (error) {
      // Handle network error
      console.error('Request error:', error);
    }
  };
  useEffect(() => {
    // console.log(state)
    // const fakeEvent = {
    //   target: {
    //     name: 'sendCopy',
    //     value: false
    //   }
    // }
    // handlerChange(fakeEvent)
    // console.log(state)
  }, [])
  // const handleChange = (event) => {
  //   console.log('handlerChange', event)
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };

  const handlerCheck = () => {
    let newCheck = false 
    if(check) {
      newCheck = false
    } else {
      newCheck = true
    }
    setCheck(newCheck)
    const fakeEvent = {
      target: {
        name: 'sendCopy',
        value: newCheck
      }
    }
    handlerChange(fakeEvent)
  }
  const handlerChange = ({target}: any) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))
  }
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Sua opinião é muito importante para nos. </h1>
          </div>

          {/* Form */}
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
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Seu Email</label>
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
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Assunto</label>
                  <input 
                    onChange={handlerChange} 
                    id="subject" 
                    name="subject" 
                    type="text" 
                    className="form-input w-full text-gray-300" 
                    placeholder="Assunto" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Mensagem</label>
                    <textarea 
                      id="w3review" 
                      onChange={handlerChange} 
                      name="msg" 
                      className="form-input w-full text-gray-300" 
                      placeholder="Digite aqui sua mensagem"
                      rows="4" 
                      cols="50"
                    />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input 
                        onChange={handlerCheck} 
                        name="sendCopy"
                        type="checkbox"
                        checked={check}
                        className="form-checkbox" />
                      <span className="text-gray-400 ml-2">Receber cópia</span>
                    </label>
                    {/* <Link href="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link> */}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button type="submit" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Enviar</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
{/*  */}