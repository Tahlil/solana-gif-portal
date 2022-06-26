const anchor = require('@project-serum/anchor')

const main = async() =>  {
  console.log("Starting tests...");

  const provider = anchor.getProvider()
  anchor.setProvider(provider)
  const baseAccount = anchor.web3.Keypair.generate()
  const program = anchor.workspace.Gifportal;
  const tx = await program.rpc.startStuffOff({
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    },
    signers: [baseAccount]
  });
  console.log("Your tx signature", tx);

  let account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log("GIF count", account.totalGifs.toString());

  await program.rpc.addGif(
    "https://media1.giphy.com/media/10LKovKon8DENq/200w.webp?cid=ecf05e477orjj2rm2g7eg66hsdb2qezm5uourx19v3etv0u9&rid=200w.webp&ct=g",
    {
      accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey
    }
  });
  account = await program.account.baseAccount.fetch(baseAccount.publicKey)
  console.log("GIF count", account.totalGifs.toString());
  console.log("GIF count", account.gifList);
}

const runMain = async() => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
runMain()