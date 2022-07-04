import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

export default new web3.eth.Contract
(
    JSON.parse(CampaignFactory.interface),
    '0x9f66838B5Ada4B577e7d22D7cd3613121Da73b86'
);