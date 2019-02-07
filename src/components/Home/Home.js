import React, {Component} from 'react';
import axios from '../../axios';
import './Home.css';
import Spinner from "../../components/Spinner/Spinner";

class Home extends Component {

    state = {
        pages: null,
        loading: false
    };

    componentDidMount(){
        console.log(this.props.match.params);
        axios.get('/pages/' + this.props.match.params.name + '.json').then(response => {
            this.setState({pages: response.data})
        });
    }

    componentDidUpdate(prevProps){
        console.log(this.props.match.params.name, "UPDATE");
        if (this.props.match.params.name !== prevProps.match.params.name){
            axios.get('/pages/' + this.props.match.params.name + '.json').then(response => {
                console.log(response.data);
                this.setState({pages: response.data})
            });
        }
    }

    render() {
        if (!this.state.pages) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div className="showTextBlock">
                <h1 style={{fontWeight: 'bold'}}>{this.state.pages.title}</h1>
                <hr/>
                <p>{this.state.pages.content}</p>
                <hr/>
            </div>
        );
    }
}

export default Home;