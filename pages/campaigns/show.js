import React, { Component } from 'react';

import Layout from '../../components/Layout';
import ContributeForm from '../../components/ContributeForm';
import { Card, Grid, GridColumn, Button, GridRow } from 'semantic-ui-react';

import { Link } from '../../routes';

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
                header: <a href = { `https://rinkeby.etherscan.io/address/${manager}` }>
                            <h3>{ manager }</h3>
                        </a>,
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
                meta: "Requests",
                description: "The number of unresolved withdraw funds requests created by the manager"
            }
        ];

        return <Card.Group items = { items } />;
    }

    render()
    {
        return (
            <Layout>
                <Grid>
                    <GridRow>
                        <GridColumn width = { 10 }>
                            { this.renderCards() }
                        </GridColumn>

                        <GridColumn width = { 6 }>
                            <h2>Contribute to Campaign</h2>
                            
                            <ContributeForm address = { this.props.address } />
                        </GridColumn>
                    </GridRow>
                   
                    <GridRow>
                        <GridColumn width = { 10 }>
                            <Link route = { `/campaigns/${this.props.address}/requests` } >
                                <a>
                                    <Button primary>
                                        View Requests
                                    </Button>
                                </a>
                            </Link>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Layout>
        );
    }
}

export default ShowCampaign;