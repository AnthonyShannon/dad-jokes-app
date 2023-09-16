import React from 'react';
import {Card, CardTitle, CardText} from 'reactstrap';

interface Props {
    jokes: {
        jokeBody: string,
        punchline: string,
    }[]
}

const Jokes = ({jokes}: Props) => (
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

export default Jokes