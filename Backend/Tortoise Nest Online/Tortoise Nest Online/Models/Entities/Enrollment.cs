namespace Tortoise_Nest_Online.Models.Entities
{
    public class Enrollment
    {
        public int EnrollmentId { get; set; }
        public int StudentId { get; set; }
        public int CourseId { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public string Status { get; set; }
        public float Progress { get; set; }

        // Navigation properties
        public Student Student { get; set; }
        public Course Course { get; set; }
    }

}
