'use client'

// React Imports
import { useEffect } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

const UsersPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/apps/users/list')
  }, [router])

  return <p className='p-6 text-sm'>Loading users…</p>
}

export default UsersPage
