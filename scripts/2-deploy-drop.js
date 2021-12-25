import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xb47F9941E340888Bf25DF67eDA5dd554863bfd79");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "MusicDao Membership",
      description: "a Dao for music following buildspace tutorial",
      image: readFileSync("scripts/assets/2.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata()
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})();
