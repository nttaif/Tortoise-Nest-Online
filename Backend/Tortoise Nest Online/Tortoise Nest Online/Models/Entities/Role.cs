namespace Tortoise_Nest_Online.Models.Entities
{
    public class Role
    {
        public int RoleId { get; set; }
        public string NameRole { get; set; }

        // Navigation property
        public ICollection<User> Users { get; set; }
    }

}
