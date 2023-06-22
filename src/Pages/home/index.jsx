import {useRef, useState} from 'react'
import {v4} from 'uuid'
import {AddButton, Container, Product, TrashButton} from './styles'

function Home() {
  const input = useRef()
  const [produts, setProduts] = useState([])

  function click(){
    setProduts([{id: v4(), nome: input.current.value},...produts]) 
    input.current.value = ''
  } 

  function deleteProduts(id){
    setProduts(produts.filter(produts => produts.id !== id))
  }

  return (
    <Container>
     <h1>Lista de tarefas</h1>
      <input placeholder="Produto..." ref={input}></input>
        <AddButton onClick={click}>Adicionar</AddButton>

        {produts.map( produts => (
          <Product key={produts.id}>
            <p>{produts.nome}</p>
            <TrashButton onClick={() => deleteProduts(produts.id)}>🗑️</TrashButton>
          </Product>
        ))}
    </Container>
  )
}

export default Home
 