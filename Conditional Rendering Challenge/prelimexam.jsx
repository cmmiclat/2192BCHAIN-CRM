//  Miclat, Chadle Rei M.

function toggleColors() {
    return false;
}

function PrelimExam() {
    return (
        <div>
        <h2>Things to Bring</h2>
            <div className={`${toggleColors() === true ? 'green' : ''}`}>    
                My Strawhat
            </div>
            <div className={`${toggleColors() === true ? 'green' : ''}`}>   
                Gum Gum Fruit
            </div>
            <div className={`${toggleColors() === true ? 'red' : ''}`}>   
                The Red Vest
            </div>

        </div>
    );
}
export default PrelimExam;