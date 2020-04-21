function wakeDog(dogName, dogBreed){
    const strWakeDog = `Wake ${dogName} the ${dogBreed}`;
    console.log(strWakeDog);
    return strWakeDog;
}

function leashDog(dogName, dogBreed){
    const strLeashDog = `Leash ${dogName} the ${dogBreed}`;
    console.log(strLeashDog);
    return strLeashDog;
}

function walkToPark(dogName, dogBreed){
    const strWalkToPark = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(strWalkToPark);
    return strWalkToPark;
}

function throwFrisbee(dogName, dogBreed){
    const strThrowFrisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(strThrowFrisbee);
    return strThrowFrisbee;
}

function walkHome(dogName, dogBreed){
    const strWalkHome =`Walk home with ${dogName} the ${dogBreed}`;
    console.log(strWalkHome);
    return strWalkHome;
}

function unleashDog(dogName, dogBreed){
    const strUnleashDog = `Unleash ${dogName} the ${dogBreed}`
    console.log(strUnleashDog);
    return strUnleashDog;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dogName, dogBreed){
    let day = []
    for(let i = 0; i < routine.length; i++){
        day.push(routine[i](dogName, dogBreed));
    }
    return day;
}