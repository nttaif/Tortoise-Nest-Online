using System;

namespace Tortoise_Nest_Online.Models.Entities
{
    public class Student
    {
        public int StudentId { get; set; }
        public int UserId { get; set; }
        public DateTime EnrollmentDate { get; set; }

        // Navigation properties
        public User User { get; set; }
        public ICollection<Enrollment> Enrollments { get; set; }
        public ICollection<Feedback> Feedbacks { get; set; }
        public ICollection<Progress> Progresses { get; set; }
    }

}
