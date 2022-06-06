import './App.css';
import SaladMenu from './salad-order';
import { useState } from 'react';
import { v4 } from 'uuid';
import { SaladContext } from './salad-order/salad-store/contex';

export const SADLAD_OPTION_LIST = [
  { id: v4(), title: 'Apple', img: '🍎' },
  { id: v4(), title: 'Avocado', img: '🥑' },
  { id: v4(), title: 'Broccoli', img: '🥦' },
  { id: v4(), title: 'Carrot', img: '🥕' },
  { id: v4(), title: 'Red Wine Dressing', img: '🍷' },
  { id: v4(), title: 'Seasoned Rice', img: '🍚' }
]

function App() {
  const [selectedOptions, setSelectedOptionIds] =  useState([]);

    const handleSelect = (selectedItem) => {
        const itemIndex = selectedOptions.findIndex(item => item.id === selectedItem.id)

        if(itemIndex > -1) {
            const newSelectedOptionIds = selectedOptions.splice(itemIndex, 1);
            setSelectedOptionIds([...selectedOptions])
            return;
        }

        setSelectedOptionIds([...selectedOptions, selectedItem]);
    }

  return (
    <div className="App">
      <SaladContext.Provider value={{
        selectedOptions,
        updateSelectedOption: handleSelect
      }}>
        <SaladMenu/>
      </SaladContext.Provider>
    </div>
  );
}

export default App;
