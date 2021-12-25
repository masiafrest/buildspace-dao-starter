import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x2C4DC0DbA6C7A8cF6302f0035D5ac712801A2840"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "music notes",
        description: "this NFT will give you access to musicDAO",
        image: readFileSync("scripts/assets/musicNotes.jpg"),
      },
    ]);
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
