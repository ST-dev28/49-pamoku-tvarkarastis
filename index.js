// čia pateikti visus required/import metodus
// susikurti pavyzdinius objektus iš class
// parodyti, jog sukurti metodai tikrai veikia, t.y.
// prieš tai suvesta informacija turi įtaką likusiems
// kviečiamiems metodams

const Schedule = require('./Schedule');

const school = new Schedule();

school.intro();
// Lessons begins at 9: 00

school.setNewLessonsBegins([10, 0]);

school.intro();
// Lessons begins at 10: 00

school.addBreak(10);
school.addBreak(15);

school.printSchedule();
// 1. 10:00 - 10:45
// 2. 10:55 - 11:40
// 3: 11:55 - 12:40