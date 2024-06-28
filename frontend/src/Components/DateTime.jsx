import React, { useState, useEffect } from "react";
import LanguageIcon from '@mui/icons-material/Language';


const DateTime = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

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
            <p className="sans-font display-5">
                <LanguageIcon fontSize="inherit" className="pb-2"/>{formatDate(currentDateTime)} {formatTime(currentDateTime)}
            </p>
        </div>
    );
};

export default DateTime;
