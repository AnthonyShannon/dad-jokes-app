import React, { useEffect } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import API from '../../utils/API'

interface Props {
    jokes: {
        jokeBody: string,
        punchline: string,
    }[]
}

const Jokes = ({ jokes }: Props) => {
    useEffect(() => {
        API.getJokes().then(res => console.log(res.data))
        
    }, []) 

    return (
        <>
            {jokes.map(joke => (
                <Card className='joke-card'>
                    <CardTitle tag='h5'>
                        {joke.jokeBody}
                    </CardTitle>
                    <CardText>
                        {joke.punchline}
                    </CardText>
                </Card>
            ))}
        </>
    )
}

export default Jokes