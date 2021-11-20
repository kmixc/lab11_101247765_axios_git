import React from 'react'
import axios from 'axios'
import { Card, ListGroup } from 'react-bootstrap';

export default class PersonList extends React.Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons })
            })
    }

    render() {
        return (
            <Card className="text-dark">
                <Card.Header>Axios API</Card.Header>
                <ListGroup>
                    {this.state.persons.map(person => <ListGroup.Item>{JSON.stringify(person.name)}</ListGroup.Item>)}
                </ListGroup>
            </Card>
        )
    }
}
