import { useContext } from 'react';
import { SaladContext } from '../../salad-store/contex';
import './style.css';

export default function SaladOption(props) {
    // Lấy data và callback từ context để xử lý context
    const { updateSelectedOption, selectedOptions } = useContext(SaladContext)
    // Kiểm tra xem option có đang được select không
    const selected = selectedOptions.findIndex(item => item.id === props.id) > -1;

    return ( <div className="salad-option" onClick={() => updateSelectedOption(props)}>
        <h3 className="salad-title">{props.title}</h3>
        <div className="salad-img">
            {props.img}
        </div>
        <div className="selected-symbol">{selected ? '😋' : ''}</div>
    </div> );
}