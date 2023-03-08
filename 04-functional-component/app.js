function App(){
    return (
        <div>
            <Card name={dogs[0].name} image={dogs[0].image}/>
            <Card name={dogs[1].name} image={dogs[1].image}/>
            <Card name={dogs[2].name} image={dogs[2].image}/>
        </div>
    )
}
    

ReactDOM.render(
   <App />,
   document.getElementById("root"));