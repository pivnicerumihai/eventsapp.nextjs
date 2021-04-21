import { getAllEvents } from "../../dummy-data";
import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventsSearch from "../../components/events/events-search";

function EventsPage(){

    const router = useRouter();
   
    const events = getAllEvents();

    const findEventsHandler = (year,month) => {

        const fullPath = `/events/${year}/${month}`

        router.push(fullPath);
    }

    return(
        <div>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList events={events}/>
        </div>
    )
}

export default EventsPage;