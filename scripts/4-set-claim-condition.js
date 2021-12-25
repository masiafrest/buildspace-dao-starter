import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0x2C4DC0DbA6C7A8cF6302f0035D5ac712801A2840"
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });
    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
