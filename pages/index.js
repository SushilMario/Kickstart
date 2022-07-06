import React, { Component } from 'react';

import Layout from '../components/Layout';
import { Link } from '../routes';
import { Card, Button } from 'semantic-ui-react';

import factory from '../ethereum/factory';

import 'semantic-ui-css/semantic.min.css';

export async function getServerSideProps()
{
    const campaigns = await factory.methods.getCampaigns().call();

    return { props: { campaigns: campaigns } };
}

class LandingPage extends Component
{
    renderCampaigns()
    {
        const campaignItems = this.props.campaigns.map
        (
            campaign => 
            { 
                return { 
                    header: <a href = { `https://rinkeby.etherscan.io/address/${campaign}` }>
                                <h3>{ campaign }</h3>
                            </a>,
                    description: (
                        <Link route = { `/campaigns/${campaign}` }>
                            <a className = 'link'>View Campaign</a>
                        </Link>
                    ),
                    fluid: true
                }; 
            }
        );

        return <Card.Group items = { campaignItems } />;
    }

    render()
    {
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>

                    <Link route = "/campaigns/new">
                        <a>
                            <Button 
                                floated = 'right'
                                content = "Create Campaign"
                                icon = "add"
                                primary
                            />
                        </a>
                    </Link>

                    { this.renderCampaigns() }
                </div>
            </Layout>
        );
    }
}

export default LandingPage;