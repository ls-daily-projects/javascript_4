class Person {
    constructor({ name, age, location, gender }) {
        this.name = name
        this.age = age
        this.location = location
        this.gender = gender
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${location}`
    }
}

class Instructor extends Person {
    constructor({ specialty, favLanguage, catchPhrase, ...rest }) {
        super(rest)
        this.specialty = specialty
        this.favLanguage = favLanguage
        this.catchPhrase = catchPhrase
    }

    demo(subject = "nothing at all") {
        return `Today we are learning about ${subject}`
    }

    grade({ name }, subject) {
        return `${name} recieved a perfect score on ${subject}`
    }

    trollStudentGrades(students) {
        const randomGrade = () => Math.floor(Math.random() * 101)

        return students.map(({ grade, ...rest }) => ({
            grade: randomGrade(),
            rest
        }))
    }
}

class Student extends Person {
    constructor({
        grade = 87,
        previousBackground,
        className,
        favSubjects = [],
        ...rest
    }) {
        super(rest)
        this.previousBackground = previousBackground
        this.className = className
        this.favSubjects = favSubjects
        this.grade = grade
    }

    listsSubjects() {
        return (
            `${this.name}'s Favorite Subjects:` +
            this.favSubjects.join(`\n${this.name}`)
        )
    }

    PRAssignment(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }

    graduate() {
        return grade > 70
    }
}

class ProjectManager extends Instructor {
    constructor({ gradClassName, favInstructor, ...rest }) {
        super(rest)
        this.gradClassName = gradClassName
        this.favInstructor = favInstructor
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`
    }

    debugsCode({ name }) {
        return `${this.name} debugs ${name}'s code on ${this.gradClassName}`
    }
}
