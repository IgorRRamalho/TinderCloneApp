using TinderClone.Services;
using TinderClone.Models;

using Microsoft.AspNetCore.Mvc;

namespace TinderClone.Controllers;



[ApiController]
[Route("api/[controller]")]


public class UsersController : ControllerBase
{
    private readonly UserService _usersService;

    public UsersController(UserService usersService) =>
        _usersService = usersService;



    #region "Métodos CRUD API"

    [HttpGet]
    public async Task<List<User>> Get() =>
        await _usersService.GetAsync();
    

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<User>> Get(string id)
    {
        var user = await _usersService.GetAsync(id);

        if (user is null)
        { 
            return NotFound();
        }

        return user;
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