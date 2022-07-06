import React, { Component } from 'react';

import { Button, Message, Input, Form, Table } from 'semantic-ui-react';

import { Link, Router } from '../../../routes';

import Layout from '../../../components/Layout';
import RequestRow from '../../../components/RequestRow';

import retrieveCampaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';

import 'semantic-ui-css/semantic.min.css';

export async function getServerSideProps(props)
{
    const accounts = await web3.eth.getAccounts();

    console.log(accounts);

    const campaign = retrieveCampaign(props.query.address);

    const requestCount = parseInt(await campaign.methods.getRequestCount().call());
    const approverCount = parseInt(await campaign.methods.approverCount().call());
    const manager = await campaign.methods.manager().call();

    const isManager = manager == accounts[0];

    const requests = await Promise.all
    (
        Array(requestCount).fill().map
        ( 
            (element, index) => campaign.methods.requests(index).call()
        )
    );

    return { 
        props : 
        {
            address: props.query.address,
            requests: JSON.parse(JSON.stringify(requests)),
            approverCount,
            requestCount,
            isManager
        }
    };
}

class RequestIndex extends Component
{
    render()
    {
        const { Header, HeaderCell, Body, Row } = Table;

        const requestRows = this.props.requests.map
        (
            (request, index) => 
            {
                return (
                    <RequestRow 
                        key = { index }
                        ID = { index }
                        request = { request }
                        address = { this.props.address }
                        approverCount = { this.props.approverCount }
                        isManager = { this.props.isManager }
                        approvalGuarantee = { request.approvalCount > request.disapprovalCount }
                    />
                );
            }
        );

        const lastColumns = [];

        if(this.props.isManager)
        {
            lastColumns.push
            (
                <HeaderCell textAlign = 'center'>Approve</HeaderCell>,
                <HeaderCell textAlign = 'center'>Reject</HeaderCell>
            );
        }
        else
        {
            lastColumns.push(<HeaderCell textAlign = 'center'>Finalise</HeaderCell>);
        }

        return (
            <Layout>
                <Link route = { `/campaigns/${this.props.address}/requests/new` } >
                    <a>
                        <Button primary floated = 'right' style = { { marginBottom: 10 } }>
                            Create Request
                        </Button>
                    </a>
                </Link>

                <Table>
                    <Header>
                        <Row>
                            <HeaderCell textAlign = 'center'>ID</HeaderCell>
                            <HeaderCell textAlign = 'center'>Description</HeaderCell>
                            <HeaderCell textAlign = 'center'>Amount</HeaderCell>
                            <HeaderCell textAlign = 'center'>Recipient</HeaderCell>
                            <HeaderCell textAlign = 'center'>Approval Count</HeaderCell>
                            { lastColumns }
                        </Row>
                    </Header>
                    <Body>
                        { requestRows }
                    </Body>
                </Table>

                <div>Found { this.props.requestCount } request(s).</div>
            </Layout>
        );
    }
}

export default RequestIndex;