import React from 'react';

//Photo component to set the image source for each photo
const Photo = (props) => {

    return (
    // dynamically add the props data the the image source attribute using template literals 
    <li>
        <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
    </li>

    );
}

export default Photo;
