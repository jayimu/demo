class Person:
    name = None
    def walk(self):
        print("walk")
class Teacher(Person):
    def getField(self):
        print("我教的是化学")
class Student(Person):
    def test(self):
        print("我最讨厌考试")

teacher = Teacher()
teacher.walk()
teacher.getField()

student = Student()
student.walk()
student.test()