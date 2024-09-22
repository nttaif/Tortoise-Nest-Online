using System;
using System.Collections.Generic;

namespace Tortoise_Nest_Online.Modelss;

public partial class Lesson
{
    public int LessonId { get; set; }

    public int CourseId { get; set; }

    public string? LessonName { get; set; }

    public string? Content { get; set; }

    public int? Order { get; set; }

    public virtual Course Course { get; set; } = null!;

    public virtual ICollection<Document> Documents { get; set; } = new List<Document>();

    public virtual ICollection<Progress> Progresses { get; set; } = new List<Progress>();

    public virtual ICollection<StudentActivity> StudentActivities { get; set; } = new List<StudentActivity>();
}
