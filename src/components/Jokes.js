import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')         // api from https://github.com/15Dkatz/official_joke_api
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));
    }

    //For ten random jokes
    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message));
    }

    render() {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <hr />
                <h3>More Jokes ?</h3>
                <button onClick={this.fetchJokes} className='btnClick'>Here!</button>
                {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
            </div>
        )
    }
}

export default Jokes;