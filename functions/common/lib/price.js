"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceConfigs = void 0;
const GOERLI = {
    nativeCurrencyInUsd: "1500.0",
    gasPrice: "10000000000", // 10 gwei
};
const POLYGON = {
    nativeCurrencyInUsd: "1.0",
    gasPrice: "100000000000", // 100 gwei
};
const MUMBAI = {
    nativeCurrencyInUsd: "1.0",
    gasPrice: "2000000000", // 2 gwei
};
exports.PriceConfigs = {
    "goerli": GOERLI,
    "polygon": POLYGON,
    "mumbai": MUMBAI,
};
