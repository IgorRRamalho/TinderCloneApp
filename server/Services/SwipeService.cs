using TinderClone.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace TinderClone.Services
{
    public class SwipeService
    {
        private readonly IMongoCollection<Swipe> _Swipes;
        private readonly IMongoCollection<Match> _Matches;

        public SwipeService(IOptions<TinderCloneDataBaseSettings> tinderCloneDataBaseSettings)
        {
            var mongoClient = new MongoClient(tinderCloneDataBaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(tinderCloneDataBaseSettings.Value.DataBaseName);
            _Swipes = mongoDatabase.GetCollection<Swipe>("Swipes");
            _Matches = mongoDatabase.GetCollection<Match>("Matches");
        }

        public async Task CreateAsync(Swipe newSwipe)
        {
            // Insere o novo swipe
            await _Swipes.InsertOneAsync(newSwipe);

            // Verifica por match recíproco
            if (newSwipe.SwipeChoice)
            {
                var reciprocalSwipe = await _Swipes.Find(s =>
                    s.SwiperId == newSwipe.SwipedUserId &&
                    s.SwipedUserId == newSwipe.SwiperId &&
                    s.SwipeChoice).FirstOrDefaultAsync();

                if (reciprocalSwipe != null)
                {
                    // Insere um novo match
                    var newMatch = new Match
                    {
                        User1Id = newSwipe.SwiperId,
                        User2Id = newSwipe.SwipedUserId,
                        MatchDate = DateTime.UtcNow
                    };

                    await _Matches.InsertOneAsync(newMatch);
                }
            }
        }

        public async Task<List<Swipe>> GetAsync() =>
            await _Swipes.Find(_ => true).ToListAsync();

        public async Task<Swipe?> GetAsync(string id) =>
            await _Swipes.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task UpdateAsync(string id, Swipe updateSwipe) =>
            await _Swipes.ReplaceOneAsync(x => x.Id == id, updateSwipe);

        public async Task RemoveAsync(string id) =>
            await _Swipes.DeleteOneAsync(x => x.Id == id);
    }
}
