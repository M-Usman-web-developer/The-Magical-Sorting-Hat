let students = ['bhai' ,'usman', 'shahzaib', 'Osaf_Ahmed' , 'Muhammadzain', 'hassan_rahman', 'abdullah', 'faizan']

let houses = [];
for (const student of students) {
    if(student.length < 6){
        houses.push('Gryffindor --> ' + student)
    }
    else if(student.length < 8){
        houses.push('Hufflepuff --> ' + student)
    }
    else if(student.length < 12){
        houses.push('Ravenclaw --> ' + student)
    }
    else{
        houses.push('Slytherin --> ' + student)
    }
}

console.log(houses)

