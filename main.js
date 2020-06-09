let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const ageRunner = 17;

if (ageRunner > 18 && registeredEarly) {
  raceNumber += 1000;
}  

if (ageRunner > 18 && !registeredEarly) {
  raceNumber += 1000;
} 

if (ageRunner > 18 && registeredEarly) {
  console.log(`Runner - ${raceNumber}: Your race starts at 9:30 am.`);
} else if (ageRunner > 18 && !registeredEarly) {
  console.log(`Runner - ${raceNumber}: Your race starts at 11:00 am.`);
} else if (ageRunner <= 18) {
  console.log(`Runner - ${raceNumber}: Your race starts at 12:30 pm.`);
}
