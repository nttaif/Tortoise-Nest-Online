namespace Tortoise_Nest_Online.Models.Entities
{
    public class Account
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
}
