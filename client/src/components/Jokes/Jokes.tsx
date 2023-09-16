import React, { useEffect, useState } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import API from '../../utils/API'

const Jokes = () => {
    const [jokes, setJokes] = useState([{jokeBody: '', punchline: ''}])

    useEffect(() => {
        API.getJokes()
            .then(res => setJokes(res.data))
    }, []) 

    return (
        <>
            {jokes.map(joke => (
                <Card className='joke-card'>
                    <CardTitle tag='h5'>
                        {joke?.jokeBody}
                    </CardTitle>
                    <CardText>
                        {joke?.punchline}
                    </CardText>
                </Card>
            ))}
        </>
    )
}

export default Jokes