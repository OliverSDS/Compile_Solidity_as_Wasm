const fs = require('fs');
const solc = require('solc');

const input = fs.readFileSync('contract.sol', 'utf8');
const output = solc.compile(input, 1);
const bytecode = output.contracts[':ContractName'].bytecode;
const abi = JSON.parse(output.contracts[':ContractName'].interface);

fs.writeFileSync('contract.wasm', new Uint8Array(Buffer.from(bytecode, 'hex')));
fs.writeFileSync('contract.abi', JSON.stringify(abi));