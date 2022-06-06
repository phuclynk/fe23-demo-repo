import SaladList from "./salad-list";
import SelectedList from "./selected-list";

function SaladMenu() {
    return ( 
        <div className="salad-menu">
            <h1 className="salad-menu-title">
                <span className="salad-menu-title-icon">🥗 </span>
                <span className="salad-menu-label">Build Your Custom Salad!</span>
                <span className="salad-menu-title-icon"> 🥗</span>
            </h1>
            <SaladList 
            />
            <SelectedList/>
        </div>
    ); 
}

export default SaladMenu;