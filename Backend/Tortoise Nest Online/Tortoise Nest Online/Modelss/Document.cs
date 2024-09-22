using System;
using System.Collections.Generic;

namespace Tortoise_Nest_Online.Modelss;

public partial class Document
{
    public int DocumentId { get; set; }

    public int LessonId { get; set; }

    public string? DocumentName { get; set; }

    public string? FileType { get; set; }

    public string? FileUrl { get; set; }

    public DateTime? UploadedAt { get; set; }

    public virtual Lesson Lesson { get; set; } = null!;
}
