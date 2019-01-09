const rna = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
};

export default function translate(input) {
  if (!input) return [];
  const arr = input.match(/.{3}/g);
  let cont = true;
  return arr
    .filter(item => {
      if (!rna[item]) throw new Error("Invalid codon");
      if (rna[item] === "STOP") {
        cont = false;
      }
      return cont;
    })
    .map(item => rna[item]);
}
