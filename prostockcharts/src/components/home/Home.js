import { Component } from 'react'


class Home extends Component {

	render() {
		return (
            <div className="main-home-container">
              <div className="home-container-light">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  className="home-image"
                  alt="home"
                />
                <h1 className="home-heading-light">Home!!</h1>
              </div>
            </div>
		)
	}
}

export default Home;