import { useDispatch } from "react-redux";
import addText from "../actions";
import './component.css'


function ComponentB() {
    const dispatch = useDispatch();
    return (
        <div className="componentB">
           
            <div className="input-div">
                <h2>Write Something</h2>
                <div className="underline"></div>
                
                <input 
                className="skill-input" 
                type="text" 
                placeholder="write something here..."
                onChange={(e)=> dispatch(addText(
                e.target.value==="" ?
                "See results here..." :
                e.target.value
                ))}
                />              
                
            </div>

            
        </div>
    );
}

export default ComponentB;