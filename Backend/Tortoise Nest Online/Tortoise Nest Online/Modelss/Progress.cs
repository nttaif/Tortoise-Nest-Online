using System;
using System.Collections.Generic;

namespace Tortoise_Nest_Online.Modelss;

public partial class Progress
{
    public int ProgressId { get; set; }

    public int StudentId { get; set; }

    public int CourseId { get; set; }

    public int LessonId { get; set; }

    public bool? CompletedLessons { get; set; }

    public bool? MaterialRead { get; set; }

    public bool? TestCompleted { get; set; }

    public DateTime? CompletionDate { get; set; }

    public double? CompletionPercentage { get; set; }

    public string? Status { get; set; }

    public virtual Course Course { get; set; } = null!;

    public virtual Lesson Lesson { get; set; } = null!;

    public virtual Student Student { get; set; } = null!;
}
