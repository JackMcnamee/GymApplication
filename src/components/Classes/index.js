import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import '../../index.css';

const localizer = momentLocalizer(moment);

export default class Classes extends Component {

  // allows user to set times for training sessions
  // setDates = () => {
  //   const events = []
  //   this.props.events.map(event => {
  //     return events.push({
  //       start: new Date(event.start),
  //       end: new Date(event.end),
  //       title: '${event.name} with ${event.person}',
  //       allDay: false
  //     })
  //   })
  //   return events;
  // }

  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  
    const now = new Date();
    //const EventCalendar = require('react-event-calendar');
    const events = [
      {
        id: 1,
        title: 'Weightlifting Session',
        start: new Date(2020, 1, 26, 19, 30, 0),
        end: new Date(2020, 1, 26, 20, 30, 0),
      },
      {
        id: 2,
        title: 'Cardio Session',
        start: new Date(2020, 1, 27, 19, 30, 0),
        end: new Date(2020, 1, 27, 20, 30, 0),
        description: 'This is a test description of an event',
      },
      {
        id: 3,
        title: 'Weightlifting Session',
        start: new Date(2020, 1, 12, 19, 30, 0),
        end: new Date(2020, 1, 12, 20, 30, 0),
      },
      {
        id: 4,
        title: 'Cardio Session',
        start: new Date(2020, 1, 13, 19, 30, 0),
        end: new Date(2020, 1, 13, 20, 30, 0),
        description: 'This is a test description of an event',
      },
      {
        id: 5,
        title: 'Weightlifting Session',
        start: new Date(2020, 1, 5, 19, 30, 0),
        end: new Date(2020, 1, 5, 20, 30, 0),
      },
      {
        id: 6,
        title: 'Cardio Session',
        start: new Date(2020, 1, 6, 19, 30, 0),
        end: new Date(2020, 1, 6, 20, 30, 0),
        description: 'This is a test description of an event',
      },
      {
        id: 7,
        title: 'Cardio Session',
        start: new Date(2020, 1, 7, 19, 30, 0),
        end: new Date(2020, 1, 7, 20, 30, 0),
        description: 'This is a test description of an event',
      },
    ]

    this.state = {
      name: 'React',
      events
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return(
      <div style={{ height: '500pt' }}>
        <Calendar localizer={localizer}
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            onEventClick={(target, eventData, day) => console.log(eventData)}/>
      </div>
      
    );
  }
}
 
//export default Classes;
render(<Classes />, document.getElementById('root'));

//export default Classes;