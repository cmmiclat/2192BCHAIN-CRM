function Rainy() {
    return(
        <p>Bring an umbrella :I</p>
    );
}

function RainOrShine(props){
    const isRainy = props.isRainy;
    if (isRainy) {
        return(
            <Rainy />
        )
    }
    return(
        <p>No Rain Today :D</p>
    )

}

export default function IsItRainy(){
    return(
        <div>
            <RainOrShine 
                isRainy={true}
            />
        </div>
    )
}