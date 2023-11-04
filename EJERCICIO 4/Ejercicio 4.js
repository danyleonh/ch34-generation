let student1Courses = ['Math','English', 'Programming'];
let student2Courses = ['Geography','Spanish','Programming'];
function encontrarCursosEnComun(array1,array2) { 
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j <array2.length; j++) {
            if (array1[i]=== array2[j]) {
                console.log("Curso en común encontrado: " + array1[j]);
            }
        }
    }
}
encontrarCursosEnComun(student1Courses, student2Courses);