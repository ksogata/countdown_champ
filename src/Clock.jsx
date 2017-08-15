import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }
    
    // componentWillMount() {
    //     this.getTimeUntil(this.props.deadline);
    // }
    
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
        // setInterval(function() {
        //     this.getTimeUntil(this.props.deadline)
        // }.call(this), 1000);
    }
    
    leadingZero(num) {
        // console.log(num);
        
        return num < 10 ? '0' + num : num;
    }
    
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        let cur = ~~(time / 1000);
        const seconds = cur % 60;
        cur = ~~(cur / 60);
        const minutes = cur % 60;
        cur = ~~(cur / 60);
        const hours = cur % 24;
        cur = ~~(cur / 24);
        const days = cur;
        // console.log('days', days, 'hours', hours, 'minutes', minutes, 'seconds', seconds);
        this.setState({days, hours, minutes, seconds});
    }
    
    render() {
        return(
            <div>
                <div className="Clock-days">{this.leadingZero(this.state.days)} days</div>
                <div className="Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
                <div className="Clock-minutes">{this.leadingZero(this.state.minutes)} minutes</div>
                <div className="Clock-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
            </div>
        )
    }
}

export default Clock;