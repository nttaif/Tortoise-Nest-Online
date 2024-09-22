namespace Tortoise_Nest_Online.Models.Entities
{
    public class Feedback
    {
        public int FeedbackId { get; set; }
        public int CourseId { get; set; }
        public int StudentId { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }
        public DateTime SubmittedDate { get; set; }

        // Navigation properties
        public Student Student { get; set; }
        public Course Course { get; set; }
    }

}
