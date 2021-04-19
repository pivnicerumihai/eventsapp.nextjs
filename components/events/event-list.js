import EventItem from "./event-item";

import styles from './event-list.module.css'

function EventList({ events }) {
  return (
    <ul className={styles.list}> 
      {events.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
