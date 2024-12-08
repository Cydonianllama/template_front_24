/* eslint-disable @typescript-eslint/no-unused-vars */
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { Login } from '@/store/auth/index'
import { Navigate } from 'react-router-dom'

export const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPasswod] = useState('')
  const [disabled, setDisabled] = useState(true)

  const dispatch = useAppDispatch()
  const auth = useAppSelector(state => state.auth)

  useEffect(() => {
    if (username.trim().length == 0 || password.trim().length == 0) setDisabled(true)
    else setDisabled(false)
  }, [username, password])

  const OnClickLogin = () => {
    dispatch(Login({ username, password }))
  }

  return (
    <>
      <div className="flex w-full h-[100vh]">
        <div className=" w-[50%] md:w-[50%] lg:w-[50%] xl:w-[40%] hidden sm:hidden md:hidden  lg:flex xl:flex flex-col justify-between h-full bg-gray-800 p-8">
          <div className='text-white text-lg font-semibold'>
            Applicacion de pruebas
          </div>
          <div className='text-white text-sm font-semibold'>
            @cydonianllama 2025
          </div>
        </div>
        <div className="w-full md:w-full lg:w-[50%] xl:w-[60%]   flex items-center justify-center">
          <div className='space-y-4 p-8 w-full sm:90% md:w-[70%] lg:w-[50%]'>
            <div>
              <div className='text-2xl font-semibold'>
                Bienvenidos a Kili app
              </div>
              <div className='text-gray-500'>
                Ingresa tus credenciales
              </div>
            </div>
            <div className='space-y-4'>
              <div className='flex flex-col'>
                <Label className='mb-1'>Username</Label>
                <Input value={username} onChange={(e) => { setUsername(e.target.value) }} type='text' placeholder='Username' />
              </div>
              <div className='flex flex-col'>
                <Label className='mb-1'>Contraseña</Label>
                <Input value={password} onChange={(e) => { setPasswod(e.target.value) }} type='password' placeholder='Password' />
              </div>
              {auth.errorLogin && (<>
              <div className='text-red-500 font-semibold text-sm'>
                {auth.errorLogin}
              </div>
              </>)}
            </div>
            <div>
              <Button onClick={OnClickLogin} disabled={disabled} className='w-full bg-blue-500 hover:bg-blue-600' variant={'default'}>Ingresar</Button>
            </div>
          </div>
        </div>
      </div>

      {auth.user && (<Navigate to = '/home'/>)}
    </>
  )
}