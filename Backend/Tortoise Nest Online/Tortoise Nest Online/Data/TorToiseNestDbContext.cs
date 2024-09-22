using Microsoft.EntityFrameworkCore;
using Tortoise_Nest_Online.Models.Entities;

namespace Tortoise_Nest_Online.Data
{
    public class TorToiseNestDbContext : DbContext
    {
        public TorToiseNestDbContext(DbContextOptions<TorToiseNestDbContext>options):base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Lecturer> Lecturers { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Progress> Progresses { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
        public DbSet<StudentActivity> StudentActivities { get; set; }
    }
}
