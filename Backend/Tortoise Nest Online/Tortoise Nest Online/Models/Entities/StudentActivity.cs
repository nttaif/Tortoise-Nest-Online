using System.ComponentModel.DataAnnotations;

namespace Tortoise_Nest_Online.Models.Entities
{
    public class StudentActivity
    {
        [Key]
        public int ActivityId { get; set; }
        public int StudentId { get; set; }
        public int LessonId { get; set; }
        public string ActivityType { get; set; }
        public bool CompletionStatus { get; set; }
        public DateTime Timestamp { get; set; }
        // Navigation properties
        public Student Student { get; set; }
        public Lesson Lesson { get; set; }
    }

}
