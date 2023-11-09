import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class StudentGradebook {
    private static class Student {
        private String name;
        private int id;
        private Map<String, Integer> grades;

        public Student(String name, int id) {
            this.name = name;
            this.id = id;
            this.grades = new HashMap<>();
        }

        public void addGrade(String subject, int grade) {
            grades.put(subject, grade);
        }

        public double calculateAverageGrade() {
            if (grades.isEmpty()) {
                return 0.0;
            }
            int sum = 0;
            for (int grade : grades.values()) {
                sum += grade;
            }
            return (double) sum / grades.size();
        }

        public String getName() {
            return name;
        }

        public int getId() {
            return id;
        }

        public Map<String, Integer> getGrades() {
            return grades;
        }
    }

    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();

        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Add a student");
            System.out.println("2. Add grades for a student");
            System.out.println("3. Show student information");
            System.out.println("4. Generate grade report");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();

            if (choice == 1) {
                System.out.print("Enter student name: ");
                String name = scanner.nextLine();
                System.out.print("Enter student ID: ");
                int id = scanner.nextInt();
                students.add(new Student(name, id));
            } else if (choice == 2) {
                System.out.print("Enter student ID: ");
                int id = scanner.nextInt();
                scanner.nextLine();
                Student currentStudent = null;
                for (Student student : students) {
                    if (student.getId() == id) {
                        currentStudent = student;
                        break;
                    }
                }
                if (currentStudent == null) {
                    System.out.println("Student not found!");
                } else {
                    System.out.print("Enter subject: ");
                    String subject = scanner.nextLine();
                    System.out.print("Enter grade: ");
                    int grade = scanner.nextInt();
                    currentStudent.addGrade(subject, grade);
                }
            } else if (choice == 3) {
                for (Student student : students) {
                    System.out.println("Name: " + student.getName() + ", ID: " + student.getId());
                    Map<String, Integer> grades = student.getGrades();
                    if (!grades.isEmpty()) {
                        System.out.println("Grades:");
                        for (Map.Entry<String, Integer> entry : grades.entrySet()) {
                            System.out.println(entry.getKey() + ": " + entry.getValue());
                        }
                        System.out.println("Average grade: " + student.calculateAverageGrade());
                    } else {
                        System.out.println("No grades available.");
                    }
                    System.out.println();
                }
            } else if (choice == 4) {
                for (Student student : students) {
                    System.out.println("Name: " + student.getName() + ", ID: " + student.getId());
                    Map<String, Integer> grades = student.getGrades();
                    if (!grades.isEmpty()) {
                        System.out.println("Grades:");
                        for (Map.Entry<String, Integer> entry : grades.entrySet()) {
                            System.out.println(entry.getKey() + ": " + entry.getValue());
                        }
                        System.out.println("Average grade: " + student.calculateAverageGrade());
                    } else {
                        System.out.println("No grades available.");
                    }
                    System.out.println();
                }
            } else if (choice == 5) {
                break;
            } else {
                System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
