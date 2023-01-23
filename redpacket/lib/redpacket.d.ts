import { ethers, Contract } from "ethers";
import type { BigNumber as EthBigNumber } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Token, Chain } from "@hexlink/hexlink";
export interface RedPacket {
    id?: string;
    salt: string;
    mode: "random" | "equal";
    split: number;
    balance: string;
    token: Token;
    tokenAmount?: EthBigNumber;
    gasToken: Token;
    gasTokenAmount?: EthBigNumber;
    validator: string;
}
export declare function redPacketInterface(): ethers.utils.Interface;
export declare function redPacketAddress(chain: Chain): string;
export declare function redPacketContract(provider: Provider): Promise<Contract>;
//# sourceMappingURL=redpacket.d.ts.map