function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase().replace(/[\W_]/g, '');
    str2 = str2.toLowerCase().replace(/[\W_]/g, '');

    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

const word1 = "listen";
const word2 = "silent";

if (areAnagrams(word1, word2)) {
    console.log(`${word1} and ${word2} are anagrams.`);
} else {
    console.log(`${word1} and ${word2} are not anagrams.`);
}
