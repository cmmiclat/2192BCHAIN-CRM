function Rainy(){
    return(
        <h3>Bring your umbrella!</h3>
    )
}

function Sunny(){
    return(
        <h3>Bring your sunglassses!</h3>
    )
}

const isRainy = true;

function RainOrShine(props) {
    const isRainy = props.isRainy;
    return isRainy ? <Rainy /> : <Sunny />;
}

export default function Ternary_RorS() {
    return (
        <div className={`${isRainy === true ? 'dark' : 'light'}`}>
            <RainOrShine />
        </div>
    )
}