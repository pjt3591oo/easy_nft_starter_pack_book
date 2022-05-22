module.exports = {
  networks: {
    dev: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    production: {
      host: "메인 네트워크 노드 IP",
      port: 8545,
      network_id: "1",
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.10",
    }
  },
};