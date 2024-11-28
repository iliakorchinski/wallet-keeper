const Wallet = require('../models/wallet');

exports.addWallet = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const wallet = new Wallet(data);
  await wallet
    .save()
    .then((wallet) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};

exports.getWallets = async (req, res, next) => {
  return await Wallet.find({})
    .then((wallets) => {
      console.log(wallets);
      res.json(wallets);
    })
    .catch((err) => console.log(err));
};
