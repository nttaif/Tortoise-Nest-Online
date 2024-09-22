using System;

namespace Tortoise_Nest_Online.Models.Entities
{
    public class Course
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public int LecturerId { get; set; }

        // Navigation properties
        public Lecturer Lecturer { get; set; }
        public ICollection<Lesson> Lessons { get; set; }
        public ICollection<Enrollment> Enrollments { get; set; }
        public ICollection<Feedback> Feedbacks { get; set; }
        public ICollection<Progress> Progresses { get; set; }
    }

}
