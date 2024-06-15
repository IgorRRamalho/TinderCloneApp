using TinderClone.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace TinderClone.Services
{
    public class MatchService
    {
        private readonly IMongoCollection<Match> _Matches;

        public MatchService(IOptions<TinderCloneDataBaseSettings> tinderCloneDataBaseSettings)
        {
            var mongoClient = new MongoClient(tinderCloneDataBaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(tinderCloneDataBaseSettings.Value.DataBaseName);
            _Matches = mongoDatabase.GetCollection<Match>("Matches");
        }

        public async Task CreateAsync(Match newMatch) =>
            await _Matches.InsertOneAsync(newMatch);

        public async Task<List<Match>> GetAsync() =>
            await _Matches.Find(_ => true).ToListAsync();

        public async Task<Match?> GetAsync(string id) =>
            await _Matches.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task UpdateAsync(string id, Match updateMatch) =>
            await _Matches.ReplaceOneAsync(x => x.Id == id, updateMatch);

        public async Task RemoveAsync(string id) =>
            await _Matches.DeleteOneAsync(x => x.Id == id);
    }
}