"use client"; // This is a client component 👈🏽
import { useState, useEffect } from 'react';
import { useQRCode } from 'next-qrcode';
import Qrcodes from '@/components/qrcodes'


export const metadata = {
  title: 'Controle de Acesso',
  description: 'Page description',
}

import Link from 'next/link'
import { AccessValuesProps, InitAccessValuesForm } from '@/types/api';

const initValues: AccessValuesProps = {
  password: '',
}

const initState: InitAccessValuesForm = {
  values: initValues
}

export default function ResetPassword() {
  const { Image } = useQRCode();

  const [statePage, setStatePage] = useState<string>('dirty');
  const [state, setState] = useState<InitAccessValuesForm>(initState);
  const { values } = state
  const key = process.env.NEXT_PUBLIC_ACCESS
  const time = process.env.NEXT_PUBLIC_ACCESS_TIME

  const handlerAccess = () => {
    const useInput = state.values.password
    if(key === useInput) {
      setStatePage('clean')
      setTimeout(() => {
        setStatePage('dirty')
      }, Number(time))
    }

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
    <>
    { statePage === 'dirty' && (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Controle de acesso</h1>
            <p className="text-xl text-gray-400">Forneça a senha informada na apresentação.</p>
          </div>
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Senha</label>
                  <input
                    value={values.password}
                    onChange={handlerChange} 
                    name="password"
                    id="password" 
                    type="password" 
                    className="form-input w-full text-gray-300" 
                    placeholder="insira a senha aqui" 
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    onClick={handlerAccess}
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                    >Acessar Dados</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              <Link 
                href="/" 
                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                Página inicial</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    )}
    { statePage === 'clean' && (<Qrcodes />)}
    </>
  )
}
