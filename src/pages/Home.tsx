import { HomeProps } from "../types/types"

const Home = ({username}: HomeProps) => {
  return (
    <div>
      {username && <h2>Welcome {username}!</h2>}
    </div>
  )
}

export default Home