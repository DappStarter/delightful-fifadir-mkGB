require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad grid enroll obscure similar'; 
let testAccounts = [
"0xbee837bf85ed9c8267579aa4131c7ddd404826082acb0314b00207167ff9c45e",
"0x9d263783b0d9c58d7ba32e1b888370e8096bc363438d75bbcd25c52850c09888",
"0xbbe3c04af06a2f3b771d0b798cae4d29b5f6f25469cc18974538e8d683139612",
"0xb273c67ddcd6f1862c12db8374efc454ad5727f6f3f445b9e44920b8e6abcf8d",
"0xb219c8fae9679c904d4b37c9d6ecaa719f7a6ae0f8caec6c2d2009ae888b2506",
"0xf3ebb76ff1f47b9584389a3b2371548f03a69e1df80d358e909c433a71fd5ae7",
"0x1c56e33e44b80c58a29509b961a0b54d880a45f9f370d10bc690cce06cab56c1",
"0xc4993e44c55e699553f0e9bf490b5d34a78839dc99942d7715a6c52385e203f2",
"0xd80530887fa0a7d864f369ce39a2c78ca2354758554803e04ce1a5ece9e2cdbe",
"0x8c9e6427d3a735c4be0aaa4cdda605d728a83f968fee5facb751529eef80057e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

