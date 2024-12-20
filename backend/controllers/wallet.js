const Wallet = require('../models/wallet');

exports.addWallet = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    const existingWallet = await Wallet.findOne({ wallet: data.wallet });
    if (existingWallet) {
      res.status(400).send({
        error: `Wallet number already exists! It comes from ${existingWallet.person}`,
      });
    }
    const wallet = new Wallet(data);
    console.log(wallet);

    await wallet.save();
    res.redirect('/wallets');
  } catch (err) {
    console.error(err);

    // Обработка ошибок
    res
      .status(500)
      .send({ error: 'An error occurred while adding the wallet.' });
  }
};

exports.getWallets = async (req, res, next) => {
  return await Wallet.find({})
    .then((wallets) => {
      console.log(wallets);
      res.json(wallets);
    })
    .catch((err) => console.log(err));
};

exports.deleteWallet = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  await Wallet.findByIdAndDelete(id);
  res.redirect('/wallets');
};
