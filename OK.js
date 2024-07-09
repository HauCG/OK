function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const conversionType = document.getElementById('conversionType').value;
    const rateVNDToUSD = 0.00004347826; // Tỷ giá từ VND sang USD
    const rateUSDToVND = 23000; // Tỷ giá từ USD sang VND
