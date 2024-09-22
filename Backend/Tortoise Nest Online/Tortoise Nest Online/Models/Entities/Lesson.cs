using System.Reflection.Metadata;
using System;

namespace Tortoise_Nest_Online.Models.Entities
{
    public class Lesson
    {
        public int LessonId { get; set; }
        public int CourseId { get; set; }
        public string LessonName { get; set; }
        public string Content { get; set; }
        public int Order { get; set; }

        // Navigation properties
        public Course Course { get; set; }
        public ICollection<Document> Documents { get; set; }
        public ICollection<Progress> Progresses { get; set; }
    }

}
