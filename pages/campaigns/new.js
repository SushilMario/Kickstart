import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button, Input, Form, Message } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import { Router } from '../../routes';

import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class NewCampaign extends Component
{
    state = 
    { 
        minContribution: '',
        errorMessage: '',
        loading: false,
        processed: false
    };

    onInputChange = evt =>
    {
        this.setState({ minContribution: evt.target.value });
    }

    onSubmit = async (evt) =>
    {
        evt.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try
        {
            const accounts = await web3.eth.getAccounts();

            await factory.methods
                .createCampaign(this.state.minContribution)
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
                        Router.pushRoute('/');
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
                <h2>Create a new campaign</h2>
                
                <Form onSubmit = { this.onSubmit } error = { this.state.errorMessage ? true : false }>
                    <Form.Field>
                        <label>Minimum Contribution Amount</label>
                        <Input 
                            label = 'wei' 
                            labelPosition = 'right'
                            placeholder = '100' 
                            onChange = {this.onInputChange} 
                            value = { this.state.minContribution }
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

export default NewCampaign;