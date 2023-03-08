class Card extends React.Component{
    
    render(){
        
        //variable declaration 
        // const x = "1"
        const name ="Rottweiler"
        const imageURL = "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2222.jpg"
        return (
            <div className="row">
                <div className="col">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={imageURL} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{name}</p>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}