using System;
using System.Collections.Generic;

namespace Tortoise_Nest_Online.Modelss;

public partial class Lecturer
{
    public int LecturerId { get; set; }

    public int UserId { get; set; }

    public DateOnly? HireDate { get; set; }

    public virtual ICollection<Course> Courses { get; set; } = new List<Course>();

    public virtual User User { get; set; } = null!;
}
