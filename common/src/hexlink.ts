"use strict";

import { ethers, Contract } from "ethers";
import type { Provider } from "@ethersproject/providers";
import HEXLINK_ABI from "./abi/HEXLINK_ABI.json";
import ADDRESSES from "./addresses.json";
import { type Chain, getChainFromProvider } from "./chain";

export function hexlAddress(chain: Chain) : string {
    return (ADDRESSES as any)[chain.name].hexlink as string;
}

export function hexlInterface() : ethers.utils.Interface {
    return new ethers.utils.Interface(HEXLINK_ABI);
}

export async function hexlContract(provider: Provider) : Promise<Contract> {
    return new ethers.Contract(
        hexlAddress(await getChainFromProvider(provider)),
        HEXLINK_ABI,
        provider
    )
}