using System;
using System.Collections.Generic;

namespace Tortoise_Nest_Online.Modelss;

public partial class StudentActivity
{
    public int ActivityId { get; set; }

    public int StudentId { get; set; }

    public int LessonId { get; set; }

    public string? ActivityType { get; set; }

    public bool? CompletionStatus { get; set; }

    public DateTime? Timestamp { get; set; }

    public virtual Lesson Lesson { get; set; } = null!;

    public virtual Student Student { get; set; } = null!;
}
