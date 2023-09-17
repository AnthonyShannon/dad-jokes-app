import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import API from '../../utils/API'

const NewJokeModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [newJoke, setNewJoke] = useState<string>('');
    const [newPunchline, setNewPunchline] = useState<string>('');

    const handleSubmit = (jokeBody: string, punchline: string) => {
        if (jokeBody.length > 0) {
            API.addJoke({ jokeBody, punchline })
                .then(() => setNewJoke(''))
                .then(() => setNewPunchline(''))
                .then(toggle)
        }
    }

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Button onClick={toggle} outline color='light'>Add New Joke</Button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add a new joke</ModalHeader>
                <ModalBody>
                    <Label for='jokeBodyEnter'>Joke</Label>
                    <Input id='jokeBodyEnter' type="textarea" name="Joke" required onChange={e => setNewJoke(e.target.value)} />
                    <Label for='PunchlineEnter'>Punchline</Label>
                    <Input id='PunchlineEnter' type="textarea" name="Punchline" required onChange={e => { setNewPunchline(e.target.value) }} />
                </ModalBody>
                <ModalFooter>
                    <Button disabled={newJoke.length === 0 || newPunchline.length === 0} color="primary" onClick={() => handleSubmit(newJoke, newPunchline)}>
                        Add joke
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default NewJokeModal;