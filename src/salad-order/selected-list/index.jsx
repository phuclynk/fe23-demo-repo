import { useContext } from 'react';
import { SaladContext } from '../salad-store/contex';
import './style.css';

function SelectedList() {
    const { selectedOptions } = useContext(SaladContext);

    return ( <div className='selected-panel'>
        <div className='selected-label'>Your Salad</div>
        <div className="selected-list">
            {selectedOptions.map(item => {
                return <div key={item.id} className="selected-item">- {item.title}</div>
            })}
        </div>
    </div> );
}

export default SelectedList;