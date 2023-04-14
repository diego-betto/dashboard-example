import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendario = () => {
    return (
        <div>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
            />
        </div>
    );
}

export default Calendario;