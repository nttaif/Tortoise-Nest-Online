using System;
using System.Collections.Generic;

namespace Tortoise_Nest_Online.Modelss;

public partial class Role
{
    public int RoleId { get; set; }

    public string NameRole { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
