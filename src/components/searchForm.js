import React from 'react';
import { Card, Button, CardTitle, CardText,Form, FormGroup, Label, Input } from 'reactstrap';

const SearchForm = (props) =>{
    return(
        <Card body className="search-form">
            <CardTitle>Welcome to Distance</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Form>
                <FormGroup>
                <Label for="adress">Adress</Label>
                <Input type="textarea" name="adress" id="adress" placeholder="Enter your adress here" />
                </FormGroup>
                </Form>
            <Button>Go somewhere</Button>
        </Card>
    )
}

export default SearchForm;