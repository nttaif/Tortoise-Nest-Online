namespace Tortoise_Nest_Online.Models.Entities
{
    public class Document
    {
        public int DocumentId { get; set; }
        public int LessonId { get; set; }
        public string DocumentName { get; set; }
        public string FileType { get; set; }
        public string FileURL { get; set; }
        public DateTime UploadedAt { get; set; }

        // Navigation property
        public Lesson Lesson { get; set; }
    }

}
