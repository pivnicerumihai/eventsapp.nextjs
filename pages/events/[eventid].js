import { useRouter } from 'next/router';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

import { getEventById } from '../../dummy-data';
import ErrorAlert from '../../components/UI/error-alert';
import Button from '../../components/UI/button';

function EventDetailPage(){

    const router = useRouter();
    const eventId = router.query.eventid;
    const event = getEventById(eventId);

    if(!event){
    
        return (
        <ErrorAlert>
            <p> No event found!</p>
            <Button link="/events">Show All Events</Button>
            </ErrorAlert>
        )
    }
    else{
    return(
        <>
        <EventSummary title={event.title}/>
        <EventLogistics 
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}/>
        
        <EventContent>
        <p>{event.description}</p>
        </EventContent>
        </>
    )
    }
}

export default EventDetailPage;