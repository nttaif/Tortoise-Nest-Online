using System;
using System.Collections.Generic;

namespace Tortoise_Nest_Online.Modelss;

public partial class Student
{
    public int StudentId { get; set; }

    public int UserId { get; set; }

    public DateOnly? EnrollmentDate { get; set; }

    public virtual ICollection<Enrollment> Enrollments { get; set; } = new List<Enrollment>();

    public virtual ICollection<Feedback> Feedbacks { get; set; } = new List<Feedback>();

    public virtual ICollection<Progress> Progresses { get; set; } = new List<Progress>();

    public virtual ICollection<StudentActivity> StudentActivities { get; set; } = new List<StudentActivity>();

    public virtual User User { get; set; } = null!;
}
