import * as React from 'react';

class Home extends React.Component {
    public renderHome = () => <h1>Home</h1>;

    public render() {
        return <div className="home-page">{this.renderHome()}</div>;
    }
}

export default Home;
