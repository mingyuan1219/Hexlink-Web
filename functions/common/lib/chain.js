"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refunder = exports.getChain = exports.getChainFromProvider = exports.SUPPORTED_CHAINS = exports.MUMBAI = exports.POLYGON = exports.GOERLI = void 0;
exports.GOERLI = {
    chainId: "5",
    name: "goerli",
    fullName: "Goerli Test Network",
    rpcUrls: ["https://goerli.infura.io/v3/"],
    nativeCurrency: {
        name: "Goerli ETH",
        symbol: "gETH",
        decimals: 18,
    },
    blockExplorerUrls: ["https://goerli.etherscan.io"],
    logoUrl: "https://token.metaswap.codefi.network/assets/networkLogos/ethereum.svg",
};
exports.POLYGON = {
    chainId: "137",
    rpcUrls: ["https://polygon-rpc.com"],
    name: "polygon",
    fullName: "Polygon Network",
    nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
    },
    blockExplorerUrls: ["https://polygonscan.com"],
    logoUrl: "https://token.metaswap.codefi.network/assets/networkLogos/polygon.svg",
};
exports.MUMBAI = {
    chainId: "80001",
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    name: "mumbai",
    fullName: "Polygon Test Network",
    nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
    },
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    logoUrl: "https://token.metaswap.codefi.network/assets/networkLogos/polygon.svg",
};
exports.SUPPORTED_CHAINS = [exports.GOERLI, exports.MUMBAI];
function getChainFromProvider(provider) {
    return __awaiter(this, void 0, void 0, function* () {
        const network = yield provider.getNetwork();
        return getChain(network.chainId);
    });
}
exports.getChainFromProvider = getChainFromProvider;
function getChain(chain) {
    chain = chain.toString();
    if (chain == "goerli" || chain == "5") {
        return exports.GOERLI;
    }
    else if (chain == "polygon" || chain == "137") {
        return exports.POLYGON;
    }
    else if (chain == "mumbai" || chain == "80001") {
        return exports.MUMBAI;
    }
    throw new Error("Unsupported chain");
}
exports.getChain = getChain;
function refunder(_chain) {
    return "0x1A811678eEEDF16a1D0dF4b12e290F78a61A28F9";
}
exports.refunder = refunder;
