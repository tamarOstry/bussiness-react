import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { context } from "../api/serviceContext";


export function Meetings() {
    const [meetings, setMeetings] = useState();
    const location = useLocation();
    const { getMeetings } = useContext(context);
    const form = location.state;
    useEffect(() => {
        getServicesFromContext();
    }, [])

    const getServicesFromContext = async () => {
        const meetingsFromContext = await getMeetings(form.business.id);
        setMeetings(meetingsFromContext);
    }
    return (
        <div>meetingsssss</div>
    )}
