import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.jpg'

class App extends Component {
    state = { displayBio: false };

    // constructor() {
    //     super();
    //     this.state = { displayBio: false };

    //     console.log('Component  this', this)

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={profile} alt="profile" className="profile" />
                <h1>Hello World!</h1>
                <p>My Name Is Yanik Kumar</p>
                <Title />
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I Live in India. I code everyday</p>
                            <p>I am better cardist</p>
                            <p>React is cool</p>
                            <button onClick={this.toggleDisplayBio} className="btnClick">Show Less</button>
                        </div>
                    ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio} className="btnClick">Read More</button>
                            </div>
                        )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;                                                                         