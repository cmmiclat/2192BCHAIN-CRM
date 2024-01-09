//  Miclat, Chadle Rei M.

import ChildComponent from './ChildComponent';

function ParentComponent() {
    const dataToPass = "Hello from parent!"; 
    return(
        <ChildComponent message={dataToPass} />
    );
}
export default ParentComponent