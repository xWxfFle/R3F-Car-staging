import { Suspense } from 'react'
import { Loading } from './components/loading'
import { Stage } from './components/stage'

export const App = () => {
  return (
    <div className='bg-violet-950 overflow-hidden'>
      <Suspense fallback={<Loading />}>
        <Stage />
      </Suspense>
    </div>
  )
}
