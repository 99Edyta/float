// Funktion til at beregne beløb med moms
// funktionen hedder beregnMedMoms og tager to parametre: beloeb (beløbet uden moms) og moms (momsprocenten, standard er 25%)
function beregnMedMoms(beloeb, moms = 25) {
  // Her er beregningen der beregner det med moms
  const beloebMedMoms = beloeb * (1 + moms / 100);

  // Her bliver resultatet af beregningen vist på html´en
  console.log(beloebMedMoms);

  //Her bliver resultatet vist på html´en
  return beloebMedMoms;
}
