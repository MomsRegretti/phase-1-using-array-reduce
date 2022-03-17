const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const getTotalBatteries = batteryBatches => {
    let totalBatteries = 0;
    for(const batch of batteryBatches) {
        totalBatteries += batch;
    };
    return totalBatteries
};
let totalBatteries= (getTotalBatteries(batteryBatches))