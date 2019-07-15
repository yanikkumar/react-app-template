import React, { Component } from 'react';

const TITLES = [
    'A Software Engineer',
    'A Playing Cards Lover',
    'An Enthusiastic Learner',
    'An Adventure Seeker'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

        this.animateTitle();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitle = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });

            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);   // 4000ms or 4sec
    }

    render() {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;