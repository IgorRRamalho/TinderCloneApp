using TinderClone.Services;
using TinderClone.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TinderClone.Controllers
{
<<<<<<< HEAD
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
=======
    private readonly UserService _usersService;

    public UsersController(UserService usersService) =>
        _usersService = usersService;



    #region "Métodos CRUD API"

    [HttpGet]
    public async Task<List<User>> Get() =>
        await _usersService.GetAsync();
    

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<User>> Get(string id)
>>>>>>> 3a5f1d5543c87bf81fd585f4191b6c28af2c27cc
    {
        private readonly UserService _usersService;

<<<<<<< HEAD
        public UsersController(UserService usersService) =>
            _usersService = usersService;

        #region "Métodos CRUD API"

        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            var users = await _usersService.GetAsync();
            return Ok(users);
=======
        if (user is null)
        { 
            return NotFound();
>>>>>>> 3a5f1d5543c87bf81fd585f4191b6c28af2c27cc
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<User>> Get(string id)
        {
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> Post(User newUser)
        {
            await _usersService.CreateAsync(newUser);
            return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, User updateUser)
        {
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            updateUser.Id = user.Id;

            await _usersService.UpdateAsync(id, updateUser);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            await _usersService.RemoveAsync(id);

            return NoContent();
        }

        #endregion
    }
}
