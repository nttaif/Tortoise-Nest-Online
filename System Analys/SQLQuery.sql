use [master]
Go
create database [TortoiseNestOnline]
Go
use [TortoiseNestOnline]
Go
CREATE TABLE Role (
    RoleID INT PRIMARY KEY IDENTITY(1,1),
    NameRole NVARCHAR(50) NOT NULL
);
Go
CREATE TABLE [User] (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    FullName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100),
    PhoneNumber NVARCHAR(20),
    RoleID INT NOT NULL,
    DateOfBirth DATE,
    CreatedDate DATETIME DEFAULT GETDATE(),
    UpdatedDate DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_User_Role FOREIGN KEY (RoleID) REFERENCES Role(RoleID)
);
Go
CREATE TABLE Students (
    StudentID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT NOT NULL,
    EnrollmentDate DATE,
    CONSTRAINT FK_Students_User FOREIGN KEY (UserID) REFERENCES [User](UserID)
);
Go
CREATE TABLE Lecturers (
    LecturerID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT NOT NULL,
    HireDate DATE,
    CONSTRAINT FK_Lecturers_User FOREIGN KEY (UserID) REFERENCES [User](UserID)
);
Go
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY IDENTITY(1,1),
    CourseName NVARCHAR(100) NOT NULL,
    Description TEXT,
    CreatedAt DATETIME DEFAULT GETDATE(),
    LecturerID INT NOT NULL,
    CONSTRAINT FK_Courses_Lecturers FOREIGN KEY (LecturerID) REFERENCES Lecturers(LecturerID)
);
Go
CREATE TABLE Lesson (
    LessonID INT PRIMARY KEY IDENTITY(1,1),
    CourseID INT NOT NULL,
    LessonName NVARCHAR(100),
    Content TEXT,
    [Order] INT,
    CONSTRAINT FK_Lesson_Courses FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
Go
CREATE TABLE Documents (
    DocumentID INT PRIMARY KEY IDENTITY(1,1),
    LessonID INT NOT NULL,
    DocumentName NVARCHAR(100),
    FileType NVARCHAR(50),
    FileURL NVARCHAR(255),
    UploadedAt DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_Documents_Lesson FOREIGN KEY (LessonID) REFERENCES Lesson(LessonID)
);
Go
CREATE TABLE Enrollments (
    EnrollmentID INT PRIMARY KEY IDENTITY(1,1),
    StudentID INT NOT NULL,
    CourseID INT NOT NULL,
    EnrollmentDate DATE,
    Status NVARCHAR(20),
    Progress FLOAT DEFAULT 0,
    CONSTRAINT FK_Enrollments_Students FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    CONSTRAINT FK_Enrollments_Courses FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
Go
CREATE TABLE Progress (
    ProgressID INT PRIMARY KEY IDENTITY(1,1),
    StudentID INT NOT NULL,
    CourseID INT NOT NULL,
    LessonID INT NOT NULL,
    CompletedLessons BIT DEFAULT 0,
    MaterialRead BIT DEFAULT 0,
    TestCompleted BIT DEFAULT 0,
    CompletionDate DATETIME,
    CompletionPercentage FLOAT DEFAULT 0,
    Status NVARCHAR(20) DEFAULT 'In Progress',
    CONSTRAINT FK_Progress_Students FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    CONSTRAINT FK_Progress_Courses FOREIGN KEY (CourseID) REFERENCES Courses(CourseID),
    CONSTRAINT FK_Progress_Lesson FOREIGN KEY (LessonID) REFERENCES Lesson(LessonID)
);
Go
CREATE TABLE Feedback (
    FeedbackID INT PRIMARY KEY IDENTITY(1,1),
    CourseID INT NOT NULL,
    StudentID INT NOT NULL,
    Rating INT CHECK (Rating >= 1 AND Rating <= 5),
    Comment TEXT,
    SubmittedDate DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_Feedback_Students FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    CONSTRAINT FK_Feedback_Courses FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
Go
CREATE TABLE StudentActivities (
    ActivityID INT PRIMARY KEY IDENTITY(1,1),
    StudentID INT NOT NULL,
    LessonID INT NOT NULL,
    ActivityType NVARCHAR(20),
    CompletionStatus BIT DEFAULT 0,
    Timestamp DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_StudentActivities_Students FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    CONSTRAINT FK_StudentActivities_Lesson FOREIGN KEY (LessonID) REFERENCES Lesson(LessonID)
);
Go


--insert data
INSERT INTO [Role] (NameRole) VALUES ('Student');
-- Insert data into [User] table (assuming role ID 1 is for students)
INSERT INTO [User] (Username, PasswordHash, FullName, Email, PhoneNumber, RoleID, DateOfBirth)
VALUES 
('student1', 'hashed_password_1', 'Nguyen Van A', 'nguyenvana@example.com', '0123456789', 1, '2000-01-15'),
('student2', 'hashed_password_2', 'Tran Thi B', 'tranthib@example.com', '0987654321', 1, '2001-05-20'),
('student3', 'hashed_password_3', 'Le Van C', 'levanc@example.com', '0167890123', 1, '1999-12-01');

-- Insert data into Students table (linking to UserID from the [User] table)
INSERT INTO Students (UserID, EnrollmentDate)
VALUES
((SELECT UserID FROM [User] WHERE Username = 'student1'), '2023-09-01'),
((SELECT UserID FROM [User] WHERE Username = 'student2'), '2023-09-01'),
((SELECT UserID FROM [User] WHERE Username = 'student3'), '2023-09-01');
GO

select * from students
