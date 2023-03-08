class Card extends React.Component{
    
    render(){
        
        //variable declaration 
        // const x = "1"
        // const name ="Rottweiler"
        // const imageURL = "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2222.jpg"
        
        console.log(this.props);
        
        return (
            <div className="row">
                <div className="col">
                    <div className="card medium">
                        <div className="card-image">
                            {/* <img src={imageURL} alt=""/> */}
                            <img src={this.props.image} alt=""/>
                        </div>
                        <div className="card-content">
                            {/* <p>{name}</p> */}
                            <p>{this.props.name}</p>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}