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