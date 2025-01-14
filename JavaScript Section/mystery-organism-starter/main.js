// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const mutatedStrand = [];
      let i = 0;
      while (mutatedStrand.length < 15) {
        const mutatedBase = returnRandBase();
        if (mutatedBase !== this.dna[i]) {
          mutatedStrand.push(mutatedBase);
          // console.log(this.dna[i], mutatedBase);
          i++;
        }
      }
      this.dna = mutatedStrand;
    },
    compareDNA(anotherpAequor) {
      let identicalDnaBase = 0;
      for (let i = 0; i < anotherpAequor.dna.length; i++) {
        if (anotherpAequor.dna[i] === this.dna[i]) identicalDnaBase++;
      }
      return `Specimen ${this.specimenNum} and speciment ${
        anotherpAequor.specimenNum
      } have ${identicalDnaBase} DNA which is ${(
        100 *
        (identicalDnaBase / this.dna.length)
      ).toFixed(2)}% DNA in common.`;
    },
    willLikelySurvive() {
      let survivalGene = 0;
      let survivalRate;
      for (let i = 0; i < this.dna.length; i++) {
        if (dna[i] === "C" || dna[i] === "G") {
          survivalGene++;
        }
      }
      survivalRate = (survivalGene / this.dna.length).toFixed(1) * 100;
      console.log(`The survival rate of this specimen is ${survivalRate}%.`);
      if (survivalRate >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());
// console.log(pAequor1.compareDNA(pAequor2));
// console.log(pAequor1.willLikelySurvive());

const species = [];
for (let i = 0; i < 30; i++) {
  species.push(pAequorFactory(i, mockUpStrand()));
}
// console.log(species);
species[29].mutate();
console.log(species[22].compareDNA(species[23]));
