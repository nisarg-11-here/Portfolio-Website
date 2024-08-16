import React, { useState, useEffect } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import { useMediaQuery } from "react-responsive";


const DateTime = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const phoneScreen = useMediaQuery({ minWidth: 576 }); 

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
            }, 1000);

            return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        const options = {
        hour: "2-digit",
        minute: "2-digit",
        };
        return date.toLocaleTimeString(undefined, options);
    };

    const formatDate = (date) => {
        return date.toLocaleDateString("en-GB");
    };

    return (
        <div>
           <p className={`sans-font ${phoneScreen ? 'display-5' : 'h6'}`}>
                <LanguageIcon fontSize="inherit" className={`${phoneScreen ? 'pb-2' : 'pb-1'}`} />{formatDate(currentDateTime)} {formatTime(currentDateTime)}
            </p>
        </div>
    );
};

export default DateTime;
