'use client'

// React Imports
import { useEffect } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

const HomePage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/dashboard/orders')
  }, [router])

  return <p className='p-6 text-sm'>Loading dashboard…</p>
}

export default HomePage
