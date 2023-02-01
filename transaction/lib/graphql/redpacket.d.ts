import type { RedPacketClaimInput } from "../types";
import type { RedPacketDBMetadata, HexlinkUserInfo } from "../../../functions/redpacket";
export declare function insertRedPacketClaim(data: RedPacketClaimInput[]): Promise<{
    id: string;
}[]>;
export declare function insertRedPacket(uid: string, data: {
    id: string;
    userId: string;
    creator: HexlinkUserInfo;
    metadata: RedPacketDBMetadata;
    opId: number;
    deposit: any;
}[]): Promise<{
    id: string;
}[]>;
