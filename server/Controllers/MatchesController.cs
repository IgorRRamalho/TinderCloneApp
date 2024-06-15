using TinderClone.Services;
using TinderClone.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TinderClone.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MatchesController : ControllerBase
    {
        private readonly MatchService _matchService;

        public MatchesController(MatchService matchService) =>
            _matchService = matchService;

        [HttpGet]
        public async Task<ActionResult<List<Match>>> Get()
        {
            var matches = await _matchService.GetAsync();
            return Ok(matches);
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Match>> Get(string id)
        {
            var match = await _matchService.GetAsync(id);

            if (match is null)
            {
                return NotFound();
            }

            return Ok(match);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Match newMatch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _matchService.CreateAsync(newMatch);
            return CreatedAtAction(nameof(Get), new { id = newMatch.Id }, newMatch);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Match updateMatch)
        {
            var match = await _matchService.GetAsync(id);

            if (match is null)
            {
                return NotFound();
            }

            updateMatch.Id = match.Id;

            await _matchService.UpdateAsync(id, updateMatch);

            return NoContent();
        }


        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var match = await _matchService.GetAsync(id);

            if (match is null)
            {
                return NotFound();
            }

            await _matchService.RemoveAsync(id);

            return NoContent();
        }

        [HttpGet("user/{userId:length(24)}")]
        public async Task<ActionResult<List<Match>>> GetMatchesByUserId(string userId)
        {
            var matches = await _matchService.GetMatchesByUserIdAsync(userId);

            if (matches == null || matches.Count == 0)
            {
                return NotFound();
            }

            return matches;
        }
    }
}
