const express = require('express');
const CoinKey = require('coinkey');
// const Web3 = require('web3');
const ethers = require('ethers');
const crypto = require('crypto');
const router = express.Router();

router.get('/createCryptoWallet', async (req, res) => {
  var btcWallet = new CoinKey.createRandom();
  var btcPrivateKey = btcWallet.privateKey.toString('hex');
  var btcPublicAddress = btcWallet.publicAddress;
  console.log('Create New BTC Wallet');
  console.log('Private Key', btcPrivateKey);
  console.log('Wallet Address(Public Key)',btcPublicAddress);

  var id = crypto.randomBytes(32).toString('hex');
  var ethPrivateKey = "0x" + id;
  var wallet = new ethers.Wallet(ethPrivateKey);
  var ethPublicAddress = wallet.address;
  console.log('Create New Ether Wallet');
  console.log('Private Key', ethPrivateKey);
  console.log('Wallet Address(Public Key)',ethPublicAddress);
  data = {
    'btc':{
      'privateKey': btcPrivateKey,
      'publicAddress': btcPublicAddress
    },
    'eth':{
      'privateKey': ethPrivateKey,
      'publicAddress': ethPublicAddress
    }
  }
  return res.status(200).json(data);
});

module.exports = router;
