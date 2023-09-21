import React, { useEffect, useState } from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import API from '../../utils/API'

const UnapprovedJokes = () => {
    const [jokes, setJokes] = useState([{ jokeBody: '', punchline: '' }])

    useEffect(() => {
        API.getUnapprovedJokes()
            .then(res => setJokes(res.data))
    }, [])

    return (
        <>
            {jokes.map(joke => (
                <Card className='joke-card'>
                    <>
                        <CardTitle tag='h5'>
                            {joke?.jokeBody}
                        </CardTitle>
                        <CardText>
                            {joke?.punchline}
                        </CardText>
                    </>
                    <div id='adminButtons'>
                        <Button color='success'>Approve</Button>
                        <Button color='danger'>Deny</Button>
                    </div>
                </Card>
            ))}
        </>
    )
}

export default UnapprovedJokes