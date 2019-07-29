//taking too long

function sumOfABeach(beach) {
    let test = beach.toLowerCase()
    
    let table = {
      sand: 0,
      water: 0,
      fish: 0,
      sun: 0,
    }

    while (test.length){
      if (test.includes('sand')){
        table.sand ++
      } 
      if (test.includes('water')){
        table.water ++
      } 
      if (test.includes('fish')){
        table.fish ++
      } 
      if (test.includes('sun')){
        table.sun ++
      }
      
      test.slice(3)
    }
    
    return table.sand + table.water + table.fish + table.sun
  }

sumOfABeach("waterslide")
// sumOfABeach('goldensandywaterybeachsun')
// sumOfABeach("gOfIshsunesunFiSh")            
// sumOfABeach("cItYTowNcARShoW")  