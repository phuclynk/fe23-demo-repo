import { SADLAD_OPTION_LIST } from '../../App';
import SaladOption from './salad-option';
import './style.css';

function SaladList() {
    return ( <div className="salad-list">
        {SADLAD_OPTION_LIST.map((item) => {
            return <SaladOption key={item.id} {...item}/>
        })}
    </div> );
}

export default SaladList;
