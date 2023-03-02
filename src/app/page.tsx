const getUser = async () => {
  const res = await fetch('https://api.github.com/users/InSTinToS')

  return await res.json()
}

export default async function Home() {
  const user = await getUser()

  return (
    <main>
      <h1>{user.login}</h1>
    </main>
  )
}
