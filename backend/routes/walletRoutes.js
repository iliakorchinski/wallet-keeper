const express = require('express');

const walletController = require('../controllers/wallet');

const router = express.Router();

router.post('/wallet/new', walletController.addWallet);
router.get('/wallets', walletController.getWallets);

module.exports = router;
