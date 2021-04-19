import Button from '../UI/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRight from '../icons/arrow-right-icon';

import styles from './event-item.module.css'

function EventItem({title, image, date, location, id}){

    const readableDate = new Date(date).toLocaleDateString('en-GB',
    {
        day:'numeric',
        month:'long',
        year:'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

    return(
        <li className={styles.item}>
            <img src={'/' + image} alt={title}/>
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon/>
                    <time>{readableDate}</time>
                    </div>
                </div>
                <div className={styles.address}>
                    <AddressIcon/>
                    <address>{formattedAddress}</address>
                </div>
                <div className={styles.actions}> 
                    <Button link={exploreLink}><span>Explore Event</span><span className={styles.icon}><ArrowRight/></span></Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;