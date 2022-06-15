import './App.css';
import SaladMenu from './salad-order';
import { useState } from 'react';
import { v4 } from 'uuid';
import { SaladContext } from './salad-order/salad-store/contex';
import { Home } from './custom-hook';
import RouterDemo from './router/RouterDemo';
import RoutedApp from './router-demo/RoutedApp';
import { BrowserRouter } from 'react-router-dom';
import { TodoApp } from './redux/TodoApp/TodoApp';
import { Provider } from 'react-redux';
import { todoStore } from './redux/store/todoStore';

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
      // Tìm kiếm vị trí của item được click chọn ( nếu có ) trong mảng
      const itemIndex = selectedOptions.findIndex(item => item.id === selectedItem.id);

      // Nếu hàm findIndex tìm ko ra thì nó trả về -1 còn không thì sẽ trả về vị trí index của item muốn tìm
      // itemIndex > -1 tức là đã có trong mảng nên ta thực hiện xóa nó khỏi mảng bằng cách tìm vị trí của nó bằng find index và xóa nó bằng hàm splice
      if(itemIndex > -1) {
        // phải copy ra 1 mảng mới vì hàm splic sẽ thay đổi giá trị mảng cũ 
        const newSelectedOptionList = [...selectedOptions]
        // Xóa bằng hàm splice ở mảng đã được copy
        newSelectedOptionList.splice(itemIndex, 1);
        setSelectedOptionIds([...selectedOptions]);
        return;
      }

      setSelectedOptionIds([...selectedOptions, selectedItem]);
    }

  return (
    <div className="App">
      {/* <BrowserRouter>
        <RoutedApp/>  
      </BrowserRouter> */}
      <Provider store={todoStore}>
        <TodoApp/>
      </Provider>
    </div>
  );
}

export default App;
