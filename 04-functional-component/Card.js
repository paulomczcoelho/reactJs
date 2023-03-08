function Card({name, image}){
// function Card(props){
    
    // console.log(props);
    return (
        <div className="row">
            <div className="col">
                <div className="card medium">
                    <div className="card-image">
                        <img src={image} alt=""/>
                        {/* <img src={props.image} alt=""/> */}
                    </div>
                    <div className="card-content">
                        {/* <p>{props.name}</p> */}
                        <p>{name}</p>
                    </div>
                </div>
            </div>    
        </div>
    )

}