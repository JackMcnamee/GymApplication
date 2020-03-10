  import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Alert } from 'reactstrap';
import { viewBooking } from '../../actions/booking';
import { PageHeader } from 'react-bootstrap';

// Possible booking success page for the user to see
// when they have booked a p.t session

// may use alert function instead

export class BookingSuccessPage extends React.Component {

    viewBooking = () => {
        const details = {
            time: this.props.time,
            date: this.props.date
        };
        this.props.viewBooking(details).then(() => {
            this.props.history.push('../../components/personTrainer');
        });
    }

    render(){
        return (
            <div>
                <PageHeader title='Booking Successful' />
                <Container>
                    <Alert color="success">
                        You have successfully booked a P.T for <span>{this.props.time}</span> on the <span>{this.props.date}</span>.
                    </Alert>
                </Container>
            </div>
        )
    }
}

export default BookingSuccessPage;