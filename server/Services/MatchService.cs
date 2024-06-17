using TinderClone.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace TinderClone.Services
{
    public class MatchService
    {
        private readonly IMongoCollection<Match> _Matches;
        private readonly IMongoCollection<User> _Users;

        public MatchService(IOptions<TinderCloneDataBaseSettings> tinderCloneDataBaseSettings)
        {
            var mongoClient = new MongoClient(tinderCloneDataBaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(tinderCloneDataBaseSettings.Value.DataBaseName);
            _Matches = mongoDatabase.GetCollection<Match>("Matches");
            _Users = mongoDatabase.GetCollection<User>("Users");
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

        public async Task<List<User>> GetMatchedUsers(string userId)
        {
            var filter = Builders<Match>.Filter.Eq(x => x.User1Id, userId) |
                         Builders<Match>.Filter.Eq(x => x.User2Id, userId);

            var matches = await _Matches.Find(filter).ToListAsync();

            // Lista para armazenar os IDs dos usuários com quem houve match
            var matchedUsers = new List<User>();

            foreach (var match in matches)
            {
                // Determina o ID do outro usuário com quem houve match
                string matchedUserId = (match.User1Id == userId) ? match.User2Id : match.User1Id;

                // Busca o objeto User correspondente ao matchedUserId
                var matchedUser = await _Users.Find(Builders<User>.Filter.Eq(u => u.Id, matchedUserId)).FirstOrDefaultAsync();

                if (matchedUser != null)
                {
                    matchedUsers.Add(matchedUser);
                }
            }

            return matchedUsers;
        }

    }
}
