import React from "react";

function CatList({ catPics }) {
    return (
        <ul>
            {catPics.length > 0 ? catPics.map((catPic) => <img alt="Cute cat" key={catPic.id} src={catPics.url}/>) : null}
        </ul>
    )
}

export default CatList