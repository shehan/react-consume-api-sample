import React, {Component} from "react";

class DogPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dog_image: ''
        }
    }

    render() {
        return (
            <div>
                <button type='button' onClick={this.get_dog_photo}>Get Dog Pic</button>
                <div style={this.state.dog_image.length > 0 ? {} : {display: 'none'}}>
                    <img src={this.state.dog_image}/>
                </div>
            </div>
        )
    }

    get_dog_photo = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then((data) => {
                this.setState({dog_image: data.message})
            })
            .catch(console.log)
    }
}

export default DogPic;
