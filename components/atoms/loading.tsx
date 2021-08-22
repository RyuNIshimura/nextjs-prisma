import { useRecoilState } from 'recoil'
import { isLoadingState } from '@/recoil/atoms'

export default function Loading() {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState)

  return(
    <>
      {isLoading && <div className="fixed top-0 left-0 z-50 block w-full h-full bg-white opacity-75">
        <div className="relative block mx-auto my-0 border-l-8 border-blue-600 rounded-full opacity-75 w-36 h-36 top-1/3 animate-spin"></div>
      </div>}
    </>
  )
}