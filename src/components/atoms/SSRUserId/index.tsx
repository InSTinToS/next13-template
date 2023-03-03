export default async function SSRUserId() {
  // (default) force-cache: SSG

  // no-store: SSR

  // for CSR need 'use client' and hooks

  // for ISR need to add next: {revalidate: number} option in fetch
  // or export const revalidate: number

  const user = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
    cache: 'force-cache'
  }).then(res => res.json())

  return (
    <main>
      <h2>SSR: {user.id}</h2>
    </main>
  )
}
