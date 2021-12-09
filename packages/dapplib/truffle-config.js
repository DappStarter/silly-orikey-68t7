require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture street rice pizza hole junior light army gate'; 
let testAccounts = [
"0x809014d5e9440eb6b358b7dbdff69659a3f917c5ad1ddfcf822cb137a23bcc3c",
"0x7800c0b6080bd2faf29d474d85496d5f55d33b101ebfa89046781fa1c32c1b51",
"0x783fc63932d283448eb73859d1c730e975bc3af8d94b25c1c8d14d0e4423397d",
"0x31fd53f417da34611bb0779cf3843694bd48d4fe43266a4638ce39b35efd2772",
"0x7f40bd994af3c90502915cdd43350e0646ccaa5012da834c2c393d5e49d24fd9",
"0x47ba6136719ce0af4a6c3b7c39811e1f739c75915a6c299ee6376e05a5ee9424",
"0x4d33e3717f94dc07e9081b4789959d929f8e77a18c4fece865572c3fde37efaa",
"0xd895a1003f746718e4c25750314a4f4265fb64e36bcdcc696ca4a24c10175e71",
"0xcadccc3017a7d6c695df9b3e35619ac237cb3944120bab2fa238f185a2ec4193",
"0x23e180466fa90487334d80aea93a66407ddf0e3f05a08870eb472c1142532b4e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


