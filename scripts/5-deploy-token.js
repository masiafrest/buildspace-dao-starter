import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xb47F9941E340888Bf25DF67eDA5dd554863bfd79");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "MusicDAO Governance Token",
      symbol: "MUSIC",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
