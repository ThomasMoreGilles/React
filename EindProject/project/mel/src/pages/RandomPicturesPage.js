import {useEffect, useState} from "react";
import {MyButton} from "../components/MyButton";

function Picture(props) {
    const { picture } = props;
    return <img className="m-1" src={picture.url} alt="picture" />
}

export function RandomPicturesPage() {
    const [pictures, setPictures] = useState([]);
    console.log(pictures);

    const loadRandomPicture = async () => {
        const URL = "https://picsum.photos/200/300";
        const response = await fetch(URL);
        if (response.ok) {
            setPictures([...pictures, response]);
        }
    }

    useEffect(() => loadRandomPicture, []);

    return <>
        <MyButton onClick={loadRandomPicture}>add picture</MyButton>
        <div>
            {pictures.map((p, n) => <Picture key={n} picture={p} />)}
        </div>
        </>;
}