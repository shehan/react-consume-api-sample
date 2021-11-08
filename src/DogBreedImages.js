import React, {useEffect, useState} from "react";

function DogBreedImages(props) {

    const [urls, setUrls] = useState([]);

    useEffect(() => {
        console.log('prop has changed.')
        fetch_images()
    }, [props.breed_id]);

    const fetch_images = () => {
        setUrls([])
        let search_api = 'https://api.thedogapi.com/v1/images/search?random&limit=4&breed_ids=' + props.breed_id;
        fetch(search_api)
            .then(res => res.json())
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    let url = data[i].url;
                    setUrls(urls => [...urls, url])
                }
            })
            .catch(console.log)
    }

    const refreshButtonHandler = () => {
        fetch_images()
    }
    return (
        <div style={props.breed_id.length > 0 ? {} : {display: 'none'}}>
            <ul>
                {urls.map(item => {
                    return <li><img src={item} width='10%'/></li>;
                })}
            </ul>
            <button type='button' onClick={refreshButtonHandler}>Refresh Images</button>
        </div>
    );
}

export default DogBreedImages;