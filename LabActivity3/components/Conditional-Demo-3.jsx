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

function RainOrShine(props){
    const isRainy = props.isRainy;
    if (isRainy){
        return(
            <Rainy />
        );
    }
    return(
        <Sunny />
    )
}

export default function RorS(){
    return(
        <RainOrShine
            isRainy={false}
        />
    )
}