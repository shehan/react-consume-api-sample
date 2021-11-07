import React, {Component} from "react";

class DogBreedDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bred_for: '',
            life_span: '',
            temperament: '',
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.breed_id !== this.props.breed_id) {
            fetch('https://api.thedogapi.com/v1/breeds/' + this.props.breed_id)
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        bred_for: data.bred_for,
                        life_span: data.life_span,
                        temperament: data.temperament,
                    })
                })
                .catch(console.log)
        }
    }


    render() {
        return (
            <div style={this.props.breed_id !== '' ? {} : {display: 'none'}}>
                <ul>
                    <li>Bred For: {this.state.bred_for}</li>
                    <li>Life Span: {this.state.life_span}</li>
                    <li>Temperament: {this.state.temperament}</li>
                </ul>
            </div>
        )
    }


}

export default DogBreedDetails;
