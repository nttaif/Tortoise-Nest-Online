using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tortoise_Nest_Online.Data;

namespace Tortoise_Nest_Online.Controllers
{
    //localhost:xxxx/api/student
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly TorToiseNestDbContext dbContext;
        public StudentController(TorToiseNestDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetAllStudent()
        {
            var allStudent = dbContext.Students.ToList();
            return Ok(allStudent);
        }
    }
}
