using Microsoft.AspNetCore.Mvc;
using TinderClone.Models;
using TinderClone.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TinderClone.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SwipesController : ControllerBase
    {
        private readonly SwipeService _swipeService;

        public SwipesController(SwipeService swipeService)
        {
            _swipeService = swipeService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Swipe>>> Get() =>
            await _swipeService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Swipe>> Get(string id)
        {
            var swipe = await _swipeService.GetAsync(id);

            if (swipe == null)
            {
                return NotFound();
            }

            return swipe;
        }

        [HttpPost]
        public async Task<IActionResult> Create(Swipe newSwipe)
        {
            await _swipeService.CreateAsync(newSwipe);

            return CreatedAtAction(nameof(Get), new { id = newSwipe.Id }, newSwipe);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Swipe updateSwipe)
        {
            var swipe = await _swipeService.GetAsync(id);

            if (swipe == null)
            {
                return NotFound();
            }

            updateSwipe.Id = swipe.Id;

            await _swipeService.UpdateAsync(id, updateSwipe);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var swipe = await _swipeService.GetAsync(id);

            if (swipe == null)
            {
                return NotFound();
            }

            await _swipeService.RemoveAsync(id);

            return NoContent();
        }
    }
}
