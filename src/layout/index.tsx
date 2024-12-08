import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (<>
  <div className='flex w-full h-[100vh]'>
    <div className='w-[300px] border-r h-full'>

    </div>
    <div className='w-[calc(100%-300px)] h-full overflow-auto'>
      {children}
    </div>
  </div>
  </>)
} 