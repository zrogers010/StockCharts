import { Component } from 'react';
import { withRouter } from '../util/withRouter';
import { Link } from 'react-router-dom';

class Search extends Component {

     constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);    
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        window.location.reload(true);
    }

    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" name="keyword" placeholder="Search Stock" />
                        <Link to={`/stocks/${this.state.value}`} >
                            <button className="btn btn-primary">Search</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Search);