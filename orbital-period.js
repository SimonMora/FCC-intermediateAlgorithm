function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    
    let newArr = [];

    for(let orb of arr){
        let alt = orb.avgAlt;
        let orbitalPeriod = 2 * Math.PI * (Math.sqrt(Math.pow(earthRadius+alt,3)/GM));
        newArr.push({'name':orb.name,'orbitalPeriod':Math.round(orbitalPeriod)});
    }
   
    return newArr;
  }

  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])

  