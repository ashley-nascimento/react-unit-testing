import { useState } from "react"

type ListProps = {
    initialItems: string[]
}

function List({initialItems}: ListProps) {
    
  const [list, setList] = useState(initialItems)

  const [newItem, setNewItem] = useState('')

  function handleAddToList(){
    setTimeout(() =>{      
      setList(state => [...state, newItem])
      setNewItem('')
    }, 500)
  }

  function handleRemoveFromList(item :string){
    setTimeout(() =>{      
      setList(state => state.filter(item => item !== item))
    }, 500)
  }
  return (
    <>
      <input 
        type="text"
        placeholder="Novo Item"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button
        onClick={handleAddToList}
      >
        Adicionar
      </button>

      <ul>
        {
          list.map((item) =>
            <li key={item}>
              {item}
              <button onClick={() => handleRemoveFromList(item)}>Remover</button>
            </li>          
          )
        }
      </ul>
    </>
  )
}

export default List
