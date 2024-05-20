using TinderClone.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace TinderClone.Services;

public class UserService
{
    private readonly IMongoCollection<User> _Users;

    public UserService(
        IOptions<TinderCloneDataBaseSettings> tinderCloneDataBaseSettings)
    {
        var mongoClient = new MongoClient(
            TinderCloneDataBaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            TinderCloneDataBaseSettings.Value.DataBaseName);

        _Users = mongoDatabase.GetCollection<Users>(
            TinderCloneDataBaseSettings.Value.UserCollectionName);
    }

    public async Task<List<Book>> GetAsync() =>
        await _booksCollection.Find(_ => true).ToListAsync();

    public async Task<Book?> GetAsync(string id) =>
        await _booksCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Book newBook) =>
        await _booksCollection.InsertOneAsync(newBook);

    public async Task UpdateAsync(string id, Book updatedBook) =>
        await _booksCollection.ReplaceOneAsync(x => x.Id == id, updatedBook);

    public async Task RemoveAsync(string id) =>
        await _booksCollection.DeleteOneAsync(x => x.Id == id);
}


/* https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-mongo-app?view=aspnetcore-6.0&tabs=visual-studio */