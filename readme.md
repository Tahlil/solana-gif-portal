# Solana Giphy DAPP backend
Solana smart contract for a decentralized Giphy app using [Anchor Framework](https://hackmd.io/@ironaddicteddog/solana-anchor-escrow)
<div align="center">
  <img height="170x" src="https://pbs.twimg.com/media/FVUVaO9XEAAulvK?format=png&name=small" />

  <h1>Anchor</h1>

  <p>
    <strong>Solana Sealevel Framework</strong>
  </p>

  <p>
    <a href="https://github.com/project-serum/anchor/actions"><img alt="Build Status" src="https://github.com/project-serum/anchor/actions/workflows/tests.yaml/badge.svg" /></a>
    <a href="https://project-serum.github.io/anchor/"><img alt="Tutorials" src="https://img.shields.io/badge/docs-tutorials-blueviolet" /></a>
    <a href="https://discord.gg/PDeRXyVURd"><img alt="Discord Chat" src="https://img.shields.io/discord/889577356681945098?color=blueviolet" /></a>
    <a href="https://opensource.org/licenses/Apache-2.0"><img alt="License" src="https://img.shields.io/github/license/project-serum/anchor?color=blueviolet" /></a>
  </p>
</div>

## Requirement
```
npm 
node 15+
solana 
anchor 0.25+
```
## Set up
On the root directory:
```
npm i
```

## Instruction

To set network to devnet:
```
solana config set --url devnet
```
To check if url is set to devnet:
```
solana config get
```
To check airdrop sol in devnet:
```
solana airdrop 2 --url devnet
```
To check balance in devnet:
```
solana balance --url devnet
```
To build:
```
anchor build
```
To deploy:
```
anchor deploy
```