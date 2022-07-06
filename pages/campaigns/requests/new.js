import React, { Component } from 'react';

import { Button, Message, Input, Form } from 'semantic-ui-react';

import { Router } from '../../../routes';

import Layout from '../../../components/Layout';

import retrieveCampaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';

export function getServerSideProps(props)
{
    return { 
        props: 
        { 
            address: props.query.address
        } 
    };
}

class NewRequest extends Component
{
    state = 
    { 
        description: '',
        value: '',
        recipient: '',
        errorMessage: '',
        loading: false,
        processed: false
    };

    onInputChange = evt =>
    {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    onSubmit = async (evt) =>
    {
        evt.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try
        {
            const accounts = await web3.eth.getAccounts();

            const campaign = retrieveCampaign(this.props.address);

            await campaign.methods
                .createRequest(
                    this.state.description,
                    this.state.value,
                    this.state.recipient
                )
                .send (
                    {
                        from: accounts[0]
                    }
                )// Wait for transaction to confirm
                .on('confirmation', (confirmationNumber, receipt) => 
                {
                    // If first confirmation...
                    if (confirmationNumber === 1)
                    {
                        this.setState({ loading: false, processed: true });
                        // ... navigate to root URL
                        Router.pushRoute(`/campaigns/${this.props.address}/requests`);
                    }
                });
        }
        catch(err)
        {
            this.setState({ errorMessage: err.message, loading: false });
        }
    }

    render()
    {
        return (
            <Layout>
                <Link route = { `/campaigns/${this.props.address}/requests` }>
                    <a>
                        Back
                    </a>
                </Link>

                <h2>Create a new payment request</h2>
                
                <Form onSubmit = { this.onSubmit } error = { this.state.errorMessage ? true : false }>
                    <Form.Field>
                        <label>Description of request</label>
                        <Input
                            onChange = {this.onInputChange} 
                            value = { this.state.description }
                            name = 'description'
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Value of request</label>
                        <Input 
                            label = 'wei' 
                            labelPosition = 'right'
                            onChange = {this.onInputChange} 
                            value = { this.state.value }
                            name = 'value'
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Recipient</label>
                        <Input 
                            onChange = {this.onInputChange} 
                            value = { this.state.recipient }
                            name = 'recipient'
                        />
                    </Form.Field>

                    <Message 
                        error
                        header = "There was an error"
                        content = { this.state.errorMessage }
                    />

                    <Button 
                        loading = { this.state.loading } 
                        primary = { !this.state.processed } 
                        positive = { this.state.processed } 
                        type = "submit"
                    >
                        { this.state.processed ? 'Success!' : 'Submit' }
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default NewRequest;