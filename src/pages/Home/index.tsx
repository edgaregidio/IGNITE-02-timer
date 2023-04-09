import { HandPalm, Play } from 'phosphor-react'

import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
 

import {
  HomeContainer,
  StopCountdownButton,
  StartCountdownButton,
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'



interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  console.log("cycles:", cycles)
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)


  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }
    setCycles(state => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset();
  }

  function handleInterruptCycle() {
    //pegando historico do encerramento do ciclo
    setActiveCycleId(null)

    setCycles(state => 
      state.map(cycle => {
        if(cycle.id === activeCycleId) {
          return {...cycle, interruptedDate: new Date()}
        } else {
          return cycle
        }
      })
    )
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secundsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secundsAmount).padStart(2, '0');

  useEffect(() => {
    if (activeCycle) {
        document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle]);

  

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <NewCycleForm />
        <Countdown
          activeCycle={activeCycle}
          activeCycleId={activeCycleId}
          setCycles={setCycles}

        />

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        )
        : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
        </form>
    </HomeContainer>
  )
}
