function formatIndianNumber(num) {
    if (num >= 10000000) {
        return (num / 10000000).toFixed(2).replace(/\.00$/, '') + 'Cr.'; // Crore
    } else if (num >= 100000) {
        return (num / 100000).toFixed(2).replace(/\.00$/, '') + ' Lakh'; // Lakh
    } else if (num >= 1000) {
        return (num / 1000).toFixed(2).replace(/\.00$/, '') + 'k'; // Thousand
    }
    return num.toString();
}
