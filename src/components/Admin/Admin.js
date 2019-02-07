import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import './Admin.css';
import {CATEGORIES} from "../../menu";
import axios from '../../axios';

class Admin extends Component {

    state = {
        category: Object.keys(CATEGORIES)[0],
        title: '',
        content: '',
    };

    pagesId = this.props.match.params.id;

    componentDidMount(){
        axios.get('/pages/' + this.state.category + '.json').then(response => {
            this.setState({
                title: response.data.title,
                content: response.data.content
            })
        }).catch(error => {
            console.log(error);
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState.category);
        console.log(this.state.category, "THIS STATE");
        if (this.state.category !== prevState.category){
            axios.get('/pages/' + this.state.category + '.json').then(response => {
                this.setState({
                    title: response.data.title,
                    content: response.data.content
                })
            })
        }
    }


    onClickSave = (event) => {
        event.preventDefault();
        axios.put('/pages/' + this.state.category + '.json', this.state).then(() => {
            this.props.history.push('/pages/' + this.state.category)
        })

    };

    onValueChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    };

    render() {
        if (!this.state){
            return (
                <div>Loading...</div>
            )
        }

        return (
            <Fragment>
                <div className="form-block">
                    <h2>Edit component</h2>
                    <Form>
                        <FormGroup row>
                            <Label for="category" sm={2}>Select</Label>
                            <Col sm={10}>
                                <Input className="select" type="select" name="category" id="category"
                                    value={this.state.category} onChange={this.onValueChange}
                                >
                                    {Object.keys(CATEGORIES).map(pagesId => (
                                        <option key={pagesId} value={pagesId}>
                                            {CATEGORIES[pagesId]}
                                        </option>
                                    ))}
                                </Input>
                            </Col>
                        </FormGroup>


                        <FormGroup row>
                            <Label for="title" sm={2}>Title</Label>
                            <Col sm={10}>
                                <Input className="inputs" type="text" name="title" id="title"
                                    value={this.state.title} onChange={this.onValueChange}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="content" sm={2}>Contact</Label>
                            <Col sm={10}>
                                <Input className="inputs" type="textarea" name="content" id="content" cols="30" rows="10"
                                       value={this.state.content} onChange={this.onValueChange}
                                />
                            </Col>
                        </FormGroup>

                        <Col sm={{size: 10, offset: 8}}>
                            <Button onClick={this.onClickSave} color="warning" type="Submit" >Save</Button>
                        </Col>
                    </Form>
                </div>
            </Fragment>
        );
    }
}

export default Admin;