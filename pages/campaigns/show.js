import React, { Component } from 'react';

import Layout from '../../components/Layout';
import { Card, Button, Input, Form, Message } from 'semantic-ui-react';

import { Router } from '../../routes';

import retrieveCampaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';

import 'semantic-ui-css/semantic.min.css';

export async function getServerSideProps(props)
{
    const campaign = retrieveCampaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return { 
        props: 
        { 
            minimumContribution: summary['0'], 
            balance: summary['1'], 
            requestCount: summary['2'], 
            approverCount: summary['3'], 
            manager: summary['4'],
            address: props.query.address
        } 
    };
}

class ShowCampaign extends Component
{
    state = 
    { 
        contribution: '',
        errorMessage: '',
        loading: false,
        processed: false
    };

    onInputChange = evt =>
    {
        this.setState({ contribution: evt.target.value });
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
                .contribute()
                .send (
                    {
                        from: accounts[0],
                        value: this.state.contribution
                    }
                )// Wait for transaction to confirm
                .on('confirmation', (confirmationNumber, receipt) => 
                {
                    // If first confirmation...
                    if (confirmationNumber === 1)
                    {
                        this.setState({ loading: false, processed: true });
                        // ... navigate to root URL
                        Router.pushRoute(`/campaigns/${this.props.address}`);
                    }
                });
        }
        catch(err)
        {
            this.setState({ errorMessage: err.message, loading: false });
        }
    }
    
    renderCards()
    {
        const 
        {
            minimumContribution,
            balance,
            requestCount,
            approverCount,
            manager
        } = this.props;

        const items = 
        [
            {
                header: manager,
                meta: "Address of Manager",
                description: "This is the account address of the creator of the campaign, who is responsible for making requests to withdraw funds",
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: "Minimum Contribution (wei)",
                description: "The minimum amount of ether required to enter as a contributor to this campaign"
            },
            {
                header: approverCount,
                meta: "Number of Approvers",
                description: "The number of individuals who have contributed to this campaign"
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: "Funds Raised (ether)",
                description: "The total amount of ether raised so far for this campaign"
            },
            {
                header: requestCount,
                meta: "Pending Requests",
                description: "The number of unresolved withdraw funds requests created by the manager"
            }
        ];

        return <Card.Group items = { items } />;
    }

    render()
    {
        return (
            <Layout>
                { this.renderCards() }

                <h2>Contribute to Campaign</h2>
                
                <Form onSubmit = { this.onSubmit } error = { this.state.errorMessage ? true : false }>
                    <Form.Field>
                        <label>Enter Contribution Amount</label>
                        <Input 
                            label = 'wei' 
                            labelPosition = 'right'
                            placeholder = '100' 
                            onChange = {this.onInputChange} 
                            value = { this.state.contribution }
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
                        { this.state.processed ? 'Success!' : 'Contribute' }
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default ShowCampaign;