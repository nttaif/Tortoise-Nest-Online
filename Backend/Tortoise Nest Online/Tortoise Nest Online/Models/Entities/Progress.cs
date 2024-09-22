namespace Tortoise_Nest_Online.Models.Entities
{
    public class Progress
    {
        public int ProgressId { get; set; }
        public int StudentId { get; set; }
        public int CourseId { get; set; }
        public int LessonId { get; set; }
        public bool CompletedLessons { get; set; }
        public bool MaterialRead { get; set; }
        public bool TestCompleted { get; set; }
        public DateTime CompletionDate { get; set; }
        public float CompletionPercentage { get; set; }
        public string Status { get; set; }

        // Navigation properties
        public Student Student { get; set; }
        public Course Course { get; set; }
        public Lesson Lesson { get; set; }
    }

}
