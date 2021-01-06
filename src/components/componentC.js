import { useSelector } from "react-redux";
import './component.css'

function ComponentC() {
    const text = useSelector(state => state.text);
    return (
        <div className="componentC">
            <div className="result">
                <p>{text}</p>
            </div>            
        </div>
    );
}

export default ComponentC;