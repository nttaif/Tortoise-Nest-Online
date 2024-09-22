using System;
using System.Collections.Generic;

namespace Tortoise_Nest_Online.Modelss;

public partial class Feedback
{
    public int FeedbackId { get; set; }

    public int CourseId { get; set; }

    public int StudentId { get; set; }

    public int? Rating { get; set; }

    public string? Comment { get; set; }

    public DateTime? SubmittedDate { get; set; }

    public virtual Course Course { get; set; } = null!;

    public virtual Student Student { get; set; } = null!;
}
