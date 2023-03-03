import CSRUserId from '@/components/atoms/CSRUserId'
import SSRUserId from '@/components/atoms/SSRUserId'

export default async function Home() {
  return (
    <main className='bg-black text-white h-screen'>
      <h1>Next 13</h1>
      <p>
        Next 13 use SSG as default render method, if somewhere in page fetch API
        with cache: no-store , then the page will be rendered by SSR.
        <br /> For use CSR need add use client before all imports.
      </p>

      <CSRUserId />

      {/* @ts-expect-error Server Component */}
      <SSRUserId />
    </main>
  )
}
