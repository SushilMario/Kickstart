// SPDX-License-Identifier: MIT

pragma solidity ^0.4.17;

contract CampaignFactory
{
    address[] public campaigns;

    function createCampaign(uint minimum) public 
    {
        address newCampaign = new Campaign(minimum, msg.sender);
        campaigns.push(newCampaign);
    }

    function getCampaigns() public view returns(address[])
    {
        return campaigns;
    }
}

contract Campaign
{
    struct Request 
    {
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address => bool) voted;
        uint approvalCount;
        uint disapprovalCount;
    }

    uint public minimumContribution;

    address public manager;
    mapping(address => bool) public approvers;
    uint public approverCount;

    Request[] public requests;

    modifier restricted()
    {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public
    {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable
    {
        require(msg.value >= minimumContribution);
        approvers[msg.sender] = true;
        approverCount += 1;
    }

    function createRequest(string description, uint value, address recipient) 
        public restricted
    {
        Request memory newRequest = Request
        (
            {
                description: description, 
                value: value, 
                recipient: recipient,
                complete: false,
                approvalCount: 0,
                disapprovalCount: 0
            }
        );

        requests.push(newRequest);
    }

    function getRequestCount() public view returns(uint)
    {
        return requests.length;
    }
    
    function approveRequest(uint requestNo, uint vote) public 
    {
        Request storage request = requests[requestNo];

        require(approvers[msg.sender]);
        require(!request.voted[msg.sender]);

        request.voted[msg.sender] = true;

        if(vote == 1)
        {
            request.approvalCount++;
        }
        else
        {
            request.disapprovalCount++;
        }
    }

    // Not required if you intend to keep archived requests using 'complete' attribute

    function deleteRequest(uint requestNo) private
    {
        Request memory temp = requests[requestNo];
        requests[requestNo] = requests[requests.length - 1];
        requests[requests.length - 1] = temp;

        delete requests[requests.length - 1];
    }

    function finaliseRequest(uint requestNo) public restricted
    {
        Request storage request  = requests[requestNo];

        require(request.approvalCount > request.disapprovalCount);
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(
        uint, uint, uint, uint, address
    )
    {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approverCount,
            manager
        );
    }
}