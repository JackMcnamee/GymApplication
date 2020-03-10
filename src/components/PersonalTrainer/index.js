import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,
    Alert,FormText } from 'reactstrap';

import '../../index.css';

// Here the user can book a personal training session

// to do: store details in database so the selected time and p.t
// cannot be picked by other users

class PersonalTrainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            personalTrainer: '',
            time: '',
            error: ''
        };

        // this.onSubmit = this.onSubmit.bind(this);
    }

    onPersonalTrainerChange = event => {
        //const personalTrainer = e.target.value;
        this.setState({ personalTrainer: event.target.value });
    };

    onTimeChange = event => {
        //const time = e.target.value;
        this.setState({ time: event.target.value });
    };

    onSubmit = () => {

        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth()+1)+'-'+ today.getFullYear();
        alert("You have booked " + this.state.personalTrainer + " at " + this.state.time + " on the " + date);

        this.props.onSubmit(this.state.personalTrainer, this.state.time);
        //e.preventDefault();
    };

    render(){
        return (
            <div id="inner">
                <h1>Book a Personal Training Session here</h1>
                <Form onSubmit={this.onSubmit}>
                    {/* Pick a personal trainer */}
                    <FormGroup > 
                        <Label for="personalTrainer">Personal Trainer: </Label>
                        <Input type="select" name="personalTrainer" id="personalTrainer"
                            value={this.state.personalTrainer} 
                            onChange={this.onPersonalTrainerChange} 
                            required>
                                <option value=""> Select a P.T </option>
                                <option>John - Cardio</option>
                                <option>Mary - Weight Lifting</option>
                        </Input>
                    </FormGroup >
                    <br />
                    {/* Pick a time */}
                    <FormGroup>
                        <Label for="time">Time: </Label>
                        <Input type="select" name="time" id="time"
                            value={this.state.time} 
                            onChange={this.onTimeChange} 
                            required>
                                <option value=""> Select a time </option>
                                <option>8:00am - 9:00am</option>
                                <option>9:00am - 10:00am</option>
                                <option>10:00am - 11:00am</option>
                                <option>11:00am - 12:00pm</option>
                                <option>12:00pm - 13:00pm</option>
                                <option>12:00pm - 13:00pm</option>
                                <option>13:00pm - 14:00pm</option>
                                <option>14:00pm - 15:00pm</option>
                                <option>15:00pm - 16:00pm</option>
                                <option>16:00pm - 17:00pm</option>
                                <option>17:00pm - 18:00pm</option>
                                <option>18:00pm - 19:00pm</option>
                                <option>19:00pm - 20:00pm</option>
                        </Input>
                    </FormGroup>
                    {this.props.message == "You have already booked this time." ?
                        <Alert color="success">{this.props.message}</Alert>:
                        <p>{this.props.message}</p>}
                    <div>
                        <Button color="primary" className="mt-3">Book Personal Trainer</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default PersonalTrainer;
