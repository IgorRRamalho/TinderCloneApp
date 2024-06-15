using TinderClone.Services;
using TinderClone.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TinderClone.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserService _usersService;
        private readonly SwipeService _swipeService;

        public UsersController(UserService userService, SwipeService swipeService)
        {
            _usersService = userService;
            _swipeService = swipeService;
        }

        #region "Métodos CRUD API"

        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            var users = await _usersService.GetAsync();
            return Ok(users);
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
        public async Task<IActionResult> Post([FromBody] User newUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

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


        [HttpGet("{userId:length(24)}/matchesPotenciais")]
        public async Task<ActionResult<List<User>>> GetPotentialMatches(string userId)
        {
            var user = await _usersService.GetAsync(userId);

            if (user == null)
            {
                return NotFound();
            }

            var swipedUserIds = (await _swipeService.GetAsync())
                .Where(s => s.SwiperId == userId || s.SwipedUserId == userId)
                .Select(s => s.SwiperId == userId ? s.SwipedUserId : s.SwiperId)
                .ToHashSet();

            var users = await _usersService.GetAsync();

            var potentialMatches = users
                .Where(u => u.Id != userId &&
                            !swipedUserIds.Contains(u.Id) &&
                            u.Interests.Any(i => user.Interests.Contains(i)))
                .ToList();

            return Ok(potentialMatches);
        }

        #endregion
    }
}
