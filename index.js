function wakeDog(dogName, dogBreed) {
  const gret = `Wake ${dogName} the ${dogBreed}`
  console.log(gret);
  return gret;
}

function leashDog(dogName, dogBreed) {
  const gret = `Leash ${dogName} the ${dogBreed}`
  console.log(gret);
  return gret;
}

function walkToPark(dogName, dogBreed) {
  const gret = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(gret);
  return gret;
}

function throwFrisbee(dogName, dogBreed) {
  const gret = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(gret);
  return gret;
}

function walkHome(dogName, dogBreed) {
  const gret = `Walk home with ${dogName} the ${dogBreed}`
  console.log(gret);
  return gret;
}

function unleashDog(dogName, dogBreed) {
  const gret = `Unleash ${dogName} the ${dogBreed}`
  console.log(gret);
  return gret;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
  let exercises = []
  routine.forEach((ex) => {
    exercises.push(ex(dogName, dogBreed))
  })
  return exercises;
}