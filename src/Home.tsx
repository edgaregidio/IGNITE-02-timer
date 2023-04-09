import {useState, useContext, createContext} from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {

  const {activeCycle, setActiveCycle} = useContext(CyclesContext)
  return(
    <div>
      <h1>NewCycleForm: {activeCycle}</h1>
      <button
        onClick={() => {
          setActiveCycle(2)
        }}
      >
        Alterar ciclo ativo
      </button>
    </div>
  )
}
function Countdown() {
  const {activeCycle, setActiveCycle} = useContext(CyclesContext)

  return(
    <h1>Countdown: {activeCycle}</h1>
  )
}

export function Home() {
 
  const [activeCycle, setActiveCycle ] = useState(0)
  return (
    <CyclesContext.Provider value={{activeCycle, setActiveCycle}}>
      <NewCycleForm />
      <Countdown />
    </CyclesContext.Provider>
  )
}
