import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';



class Stopwatch extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            seconds: 10,
            id: null,
        };
    }
    
    
    startStopwatch() {
        // console.log(this.state.seconds);
        let id = setInterval(() => this.decreaseTime(this.state.seconds), 1000);
        // id();
        // console.log(id);
        this.setState({id});
        // console.log(this.state.id);
    }
    
    decreaseTime(seconds) {
        // console.log(seconds);
        if (seconds > 0) {
            seconds--;
            this.setState({seconds});
            // console.log(this.state.seconds);
        }
        else {
            // console.log("done!");
            alert('DONE!');
            clearInterval(this.state.id);
        }
    }

    stopStopwatch() {
        // console.log(this.state.id);
        if (this.state.id !== null) {
            clearInterval(this.state.id);
        }
    }
    render() {
      return(
            <div className="Stopwatch-item">
            {this.state.seconds}s
                <Form inline>
                    <FormControl
                        placeholder = "seconds"
                        onChange={event => this.setState({seconds: event.target.value})}
                    />
                    <Button onClick={() => this.startStopwatch()}>
                        Start
                    </Button>
                    <Button onClick={() => this.stopStopwatch()}>
                        Stop
                    </Button>
                </Form>
            </div>
        )  
    }
}

export default Stopwatch;