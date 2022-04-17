/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
export type RequestResultParams = {
  permissionBump: number;
  switchboardStateBump: number;
};

/**
 * @category userTypes
 * @category generated
 */
export const requestResultParamsBeet =
  new beet.BeetArgsStruct<RequestResultParams>(
    [
      ["permissionBump", beet.u8],
      ["switchboardStateBump", beet.u8],
    ],
    "RequestResultParams"
  );