using TinderClone.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace TinderClone.Services
{
    public class SwipeService
    {
        private readonly IMongoCollection<Swipe> _Swipes;

        public SwipeService(IOptions<TinderCloneDataBaseSettings> tinderCloneDataBaseSettings)
        {
            var mongoClient = new MongoClient(tinderCloneDataBaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(tinderCloneDataBaseSettings.Value.DataBaseName);
            _Swipes = mongoDatabase.GetCollection<Swipe>("Swipes");
        }

        public async Task CreateAsync(Swipe newSwipe) =>
            await _Swipes.InsertOneAsync(newSwipe);

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
