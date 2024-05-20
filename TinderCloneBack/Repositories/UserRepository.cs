using MongoDB.Driver;
using TinderClone.Models;

namespace TinderClone.Repositories
{
    public class UserRepository
    {
        private readonly IMongoCollection<User> _users;

        public UserRepository(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("TinderDb"));
            var database = client.GetDatabase("TinderDb");
            _users = database.GetCollection<User>("Users");
        }

        public async Task<List<User>> GetAllAsync() => await _users.Find(user => true).ToListAsync();

        public async Task<User> GetByIdAsync(string id) => await _users.Find<User>(user => user.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(User user) => await _users.InsertOneAsync(user);

        public async Task UpdateAsync(string id, User userIn) => await _users.ReplaceOneAsync(user => user.Id == id, userIn);

        public async Task RemoveAsync(string id) => await _users.DeleteOneAsync(user => user.Id == id);
    }
}
