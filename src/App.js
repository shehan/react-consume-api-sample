import React, {Component} from "react";
import DogBreeds from "./DogBreeds";
import DogBreedDetails from "./DogBreedDetails";
import DogBreedImages from "./DogBreedImages";

class App extends Component {
    constructor(props) {
        super(props);
        this.breed = React.createRef();
        this.state={
            selected:''
        }
    }

    onClick = () =>{
       this.setState({selected: this.breed.current.getSelectedBreed()})
    }

    handleCallback = (childData) =>{
        this.setState({selected: childData})
    }

    render() {
        return (
            <div>
                <DogBreeds ref={this.breed} parentCallback = {this.handleCallback} />
                <button onClick={this.onClick}>Click</button>
                <DogBreedDetails breed_id={this.state.selected} />
                <DogBreedImages breed_id={this.state.selected}/>
            </div>
        )
    }

}

export default App;
