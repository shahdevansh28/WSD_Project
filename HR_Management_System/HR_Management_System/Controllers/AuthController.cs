using HR_Management_System.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HR_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly HRMContext _context;
        public AuthController(HRMContext context)
        {
            _context = context;
        }
        /*public IActionResult Index()
        {
            return View();
        }*/
        [HttpPost("Login")]
        public async Task<ActionResult> Login(EmployeeLoginDTO empDTO)
        {
            //var res = await _authRepo.Login(userDTO.Username, userDTO.Password);
            var user = await _context.Employees.FirstOrDefaultAsync(u => u.Username.ToLower() == empDTO.Username.ToLower());

            if (user == null)
            {
                return BadRequest($"Incorrect username or password!");
            }/*
            else if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }*/
            /*else
            {
                //Console.WriteLine(user);
                return CreateToken(user);
            }*/
            Console.WriteLine(user);
            /*if (res == null)
            {
                return BadRequest($"Incorrect username or password!");
            }*/
            return Ok(new { token = user.Id, status = 200 });
        }
    }
}
