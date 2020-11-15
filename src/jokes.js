import mainURL from "./settings";
import { useState } from "react";

const ShowJokes = () => {
    const [jokes, setJokes] = useState("");
    const GetJokes = () => {
        fetch(mainURL + "/api/jokes/parallel")
            .then((res) => res.json())
            .then((data) => {
                setJokes(data);
            });
    };
    return (
        <div>
        <h2>Chuck Norris Joke:</h2>
        <ul>
        <li>{jokes.joke1}</li>
        <li><a href={jokes.joke1Reference}>Link</a> </li>
        </ul>
        <h2>Dad Joke:</h2>
        <ul>
        <li>{jokes.joke2}</li>
        <li><a href={jokes.joke2Reference}>Link</a> </li>
        
        </ul>
        <h2>Insult:</h2>
        <ul>
        <li>{jokes.insult}</li>
        <li><a href={jokes.insultReference}>Link</a> </li>
        </ul>
        <br/>
        <button class="btn btn-primary" onClick={() => GetJokes()}>Press for two new jokes and an insult</button>
    </div>
    );
};

export default ShowJokes;
