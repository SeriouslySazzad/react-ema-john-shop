import React, { useEffect, useState } from 'react';
import './Persons.css'

const Persons = () => {
    const [businessPersons, setBusinessPersons] = useState([]);

    useEffect( () => {
        fetch('../../fakedata/buisnessman.JSON')
            .then(res => res.json())
            .then(data => setBusinessPersons(data))
    } , [])
    return (
        <div>
            <p>This is persons : {businessPersons.length}</p>
        </div>
    );
};

export default Persons;