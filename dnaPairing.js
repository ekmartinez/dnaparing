function pairElement(str) {

    const dna = {"A": "T", "T": "A",
                "C": "G", "G": "C"}

    let results = [];

    for (let x = 0; x < str.length; x++) {
        results.push(Array(str[x], dna[str[x]]));
    }

    return results;

}

console.log(pairElement("GCG"));