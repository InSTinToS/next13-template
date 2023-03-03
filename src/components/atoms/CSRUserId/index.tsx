'use client'

import { useEffect, useState } from 'react'

export default function CSRUserId() {
  const [userId, setUserId] = useState(0)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(user => {
        setUserId(user.id)
        setLoading(false)
      })
  }, [])

  return (
    <main>
      <h2>CSR: {isLoading ? 'Carregando' : userId}</h2>
    </main>
  )
}
