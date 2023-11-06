import { NavBar } from "./Components/NavBar/NavBar"
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"

export const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Welcome to the Samsung store"} />
    </>
  )
}

export default App