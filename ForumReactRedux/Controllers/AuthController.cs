using ForumReactRedux.Data;
using ForumReactRedux.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ForumReactRedux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
       // private readonly SignInManager<IdentityUser> _signInManager;
       // private readonly UserManager<IdentityUser> _userManager;
        private readonly ForumReactReduxContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(
            //UserManager<IdentityUser> userManager,
            //SignInManager<IdentityUser> signInManager, 
            ForumReactReduxContext context,
            IConfiguration configuration)
        {
           // _userManager = userManager;
           // _signInManager = signInManager;
            _configuration = configuration;
            _context = context;

        }

        [HttpPost("login")]
        public async Task<object> Login([FromBody] User user)
        {
            // var result = await _signInManager.PasswordSignInAsync(model.Login, model.Password, false, false);

            var result = await _context.User.FirstOrDefaultAsync(u=> u.Login == user.Login && u.Password == user.Password);

            if (result != null)
            {
                //var appUser = _userManager.Users.FirstOrDefault(u => u.UserName == model.Login);
                var token = await GenerateJwtToken(result.Id);
                return new { user = new { id = result.Id, login = result.Login }, token = "Bearer " + token };
            }

            return NotFound();
        }

        [HttpPost("register")]
        public async Task<object> Register([FromBody]  User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try {
                var result = await _context.AddAsync(user);
                await _context.SaveChangesAsync();

                //var result = await _userManager.CreateAsync(user, model.Password);

                if (result != null)
                {
                    // await _signInManager.SignInAsync(user, false);
                    var token = await GenerateJwtToken(result.Entity.Id);
                    // return Ok(new { user = result, token = "Bearer " + token }) 
                    return new { user = new { id=result.Entity.Id, login = result.Entity.Login }, token = "Bearer " + token };
                }

                throw new ApplicationException("UNKNOWN_ERROR");
            }
            catch (DbUpdateException)
            {
                return BadRequest();
            }
        }


        

        private async Task<object> GenerateJwtToken(int id)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, id.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddMinutes(Convert.ToDouble(_configuration["JwtExpire"]));

            var token = new JwtSecurityToken(
                _configuration["JwtIssuer"],
                _configuration["Audience"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
}