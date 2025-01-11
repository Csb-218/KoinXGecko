
const calculateStandardDeviation = (values) => {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const squaredDiffs = values.map(value => Math.pow(value - mean, 2));
    const meanSquaredDiff = squaredDiffs.reduce((a, b) => a + b, 0) / values.length;
    const standardDeviation = Math.sqrt(meanSquaredDiff);
    return parseFloat(standardDeviation.toFixed(3));
};

module.exports = { calculateStandardDeviation }