var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('50b6bdf3'),
  //addressVersion: 0x3c,
  //privKeyVersion: 0x95,
  addressVersion: 60,
  privKeyVersion: 149,
  //P2SHVersion: 0x3c,
  P2SHVersion: 60,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('288c5be4aee01641c512059af2cfcc508d7df5e24d78c1d766074c0bad500000'),
    merkle_root: hex('536ba95d78fd7e859b6fb97a92a4658ef0cb63cecfc975c1a9883e7add57bc6e'),
    height: 0,
    nonce: 609410,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1488279877,
    bits: 520159231,
  },
  dnsSeeds: [
    '94.176.238.60',
	'94.176.238.61',
	'94.176.238.59'
  ],
  defaultClientPort: 49850
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
