import React, {Component} from "react";

class DogBreeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds: [{
                id: '',
                name: '-- Select a breed --'
            }
            ],
            selected: ''
        }
    }

    getSelectedBreed = () => {
        return this.state.selected
    }

    handleSelection = (event) => {
        let selectedId = event.target.value
        this.setState({selected: selectedId})
        this.props.parentCallback(selectedId);
    }

    render() {
        return (
            <div>
                <label>Dog Breeds </label>
                <select id={'breeds'} onChange={this.handleSelection}>
                    {this.state.breeds.map((breed) => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
                </select>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    let id = data[i].id;
                    let name = data[i].name;
                    this.setState({breeds: [...this.state.breeds, {id: id, name: name}]})
                }
            })
            .catch(console.log)
    }
}

export default DogBreeds;
