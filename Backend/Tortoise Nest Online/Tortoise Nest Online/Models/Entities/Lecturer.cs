namespace Tortoise_Nest_Online.Models.Entities
{
    public class Lecturer
    {
        public int LecturerId { get; set; }
        public int UserId { get; set; }
        public DateTime HireDate { get; set; }

        // Navigation properties
        public User User { get; set; }
        public ICollection<Course> Courses { get; set; }
    }

}
