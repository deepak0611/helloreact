import ComponentB from './componentB';
import ComponentC from './componentC';
import './component.css'

function ComponentA() {
    return (
        <div className="componentA">
            <ComponentB/>
            <ComponentC/>
        </div>
    );
}

export default ComponentA;