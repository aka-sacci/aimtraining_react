export default function convertDStoSeconds(ms){
    var convertedValue = ms/100
    return convertedValue.toFixed(2)
}