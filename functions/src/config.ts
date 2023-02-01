import * as functions from "firebase-functions";

const secrets = functions.config().doppler;

export enum KMS_KEY_TYPE {
  operator,
  validator
}

export interface KMS_CONFIG_TYPE {
  projectId: string,
  locationId: string,
  keyRingId: string,
  keyId: string,
  versionId: string,
  publicAddress: string
}

const identityVerifierOperatorConfig = () : KMS_CONFIG_TYPE => ({
  projectId: secrets.VITE_FIREBASE_PROJECT_ID,
  locationId: secrets.GCP_KEY_LOCATION_GLOBAL,
  keyRingId: secrets.IDENTITY_VERIFIER_OPERATOR_KEY_RING_ID,
  keyId: secrets.IDENTITY_VERIFIER_OPERATOR_KEY_ID,
  versionId: secrets.IDENTITY_VERIFIER_OPERATOR_VERSION_ID,
  publicAddress: secrets.IDENTITY_VERIFIER_OPERATOR_PUB_ADDR,
});

const identityVerifierValidatorConfig = () : KMS_CONFIG_TYPE => ({
  projectId: secrets.VITE_FIREBASE_PROJECT_ID,
  locationId: secrets.GCP_KEY_LOCATION_GLOBAL,
  keyRingId: secrets.IDENTITY_VERIFIER_VALIDATOR_KEY_RING_ID,
  keyId: secrets.IDENTITY_VERIFIER_VALIDATOR_KEY_ID,
  versionId: secrets.IDENTITY_VERIFIER_VALIDATOR_VERSION_ID,
  publicAddress: secrets.IDENTITY_VERIFIER_VALIDATOR_PUB_ADDR,
});

export const kmsConfig = () => new Map<string, KMS_CONFIG_TYPE>([
  [KMS_KEY_TYPE[KMS_KEY_TYPE.operator], identityVerifierOperatorConfig()],
  [KMS_KEY_TYPE[KMS_KEY_TYPE.validator], identityVerifierValidatorConfig()],
]);

export interface PriceConfig {
  nativeCurrencyInUsd: string,
  gasPrice: string,
  updatedAt?: Date,
}

const GOERLI : PriceConfig = {
  nativeCurrencyInUsd: "1500.0",
  gasPrice: "10000000000", // 10 gwei
};

const POLYGON : PriceConfig = {
  nativeCurrencyInUsd: "1.0",
  gasPrice: "100000000000", // 100 gwei
};

const MUMBAI : PriceConfig = {
  nativeCurrencyInUsd: "1.0",
  gasPrice: "2000000000", // 2 gwei
};

export const PriceConfigs : {[key: string]: PriceConfig} = {
  "goerli": GOERLI,
  "polygon": POLYGON,
  "mumbai": MUMBAI,
};

export const priceInfo = functions.https.onCall(
    (data, context) => {
      const uid = context.auth?.uid;
      if (!uid) {
        return {code: 401, message: "Unauthorized Call"};
      }
      return {priceInfo: PriceConfigs[data.chain]};
    }
);

export const Refunders : {[key: string]: string} = {
  "goerli": "0x1A811678eEEDF16a1D0dF4b12e290F78a61A28F9",
  "polygon": "0x1A811678eEEDF16a1D0dF4b12e290F78a61A28F9",
  "mumbai": "0x1A811678eEEDF16a1D0dF4b12e290F78a61A28F9",
};

export const refunder = functions.https.onCall(
    (data, context) => {
      const uid = context.auth?.uid;
      if (!uid) {
        return {code: 401, message: "Unauthorized Call"};
      }
      return {refunder: Refunders[data.chain]};
    }
);
