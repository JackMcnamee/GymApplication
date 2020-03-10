import database from '../components/Firebase/firebase';


export const setBooking = (booking) => ({
    type: 'SET_BOOKING',
    booking
});

export const successBooking = (message) => ({
    type: 'SUCCESS_BOOKING',
    message
});

export const failedBooking = (message) => ({
    type: 'FAILED_BOOKING',
    message
});

export const startBooking = (userDetails = ({}) => {
    return(dispatch, getState) => {
        const email = getState().auth.email;
        const {
            personalTrainer = '',
            time = '',
            date = ''
        } = userDetails;

        return database.ref('bookings/${time}/${email}').orderByChild('date').equalTo(date).once('value').then((snapshot) => {
            if (snapshot.exists()) {
                const message = 'You have already booked room.';
                dispatch(failedBooking(message));
        
              } 
              else {
                return database.ref('bookings/${time}/${email}').orderByChild('date').equalTo(date).once('value').then((snapshot) => {
                    if (snapshot.exists()) {
                        let user = {};
                        snapshot.forEach((childSnapshot) => {
                            user = {
                                ...user,
                                ...childSnapshot.val()
                            }
                        })
                    }
                })

              }
        });
    }
})

export const viewBooking = ( userDetails = {}) => {
    return (dispatch, getState) => {

        const email = getState().auth.email;
        const {
            date = '', 
            time = ''
        } = userDetails;

        return database.ref('bookings/${time}/${email}').orderByChild('date').equalTo(date).once('value').then((snapshot) => {
            if (snapshot.exists()) 
            {
                const booking = [];
                snapshot.forEach((childSnapshot) => {
                  booking.push({
                    bookingId: childSnapshot.key,
                    ...childSnapshot.val()
                    
                  });
        
                });
                dispatch(setBooking(booking));
            } 
            else {
                const booking = [];
                dispatch(setBooking(booking));
            }
        });
    }
}