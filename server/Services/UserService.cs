using TinderClone.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace TinderClone.Services;

public class UserService
{

    #region "Inicializa DataBase"
    private readonly IMongoCollection<User> _Users;

    //Este é o construtor da classe UserService.
    //Ele recebe as configurações do banco de dados como um parâmetro
    //Ele usa essas configurações para conectar-se ao banco de dados e obter a coleção de usuários.
    public UserService(IOptions<TinderCloneDataBaseSettings> tinderCloneDataBaseSettings)
    {
        var mongoClient = new MongoClient(tinderCloneDataBaseSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(tinderCloneDataBaseSettings.Value.DataBaseName);
        _Users = mongoDatabase.GetCollection<User>(tinderCloneDataBaseSettings.Value.UserCollectionName);
    }

    #endregion


    #region "Métodos CRUD(Create, Read, Update, and Delete)"


    //Este método insere um novo usuário na coleção.(CREATE)
    public async Task CreateAsync(User newUser) =>
        await _Users.InsertOneAsync(newUser);



    //Este método retorna todos os usuários no banco de dados.(READ)
    //Ele usa a função Find para encontrar todos os documentos (neste caso, usuários) na coleção que satisfazem a condição fornecida.
    //A condição _ => true significa que todos os documentos serão retornados.
    public async Task<List<User>> GetAsync() =>
        await _Users.Find(_ => true).ToListAsync();




    //Este método retorna um único usuário com base em seu id.(READ)
    //Ele usa a função Find para encontrar o primeiro documento na coleção que satisfaz a condição fornecida.
    public async Task<User?> GetAsync(string id) =>
        await _Users.Find(x => x.Id == id).FirstOrDefaultAsync();




    //Este método atualiza um usuário existente na coleção.(UPDATE)
    //Ele usa a função ReplaceOneAsync para substituir o documento que satisfaz a condição fornecida pelo novo usuário.
    public async Task UpdateAsync(string id, User updateUser) =>
        await _Users.ReplaceOneAsync(x => x.Id == id, updateUser);

    //Este método retornar um usuário ao fornecer email
    public async Task<User> GetByEmailAsync(string email) =>
           await _Users.Find<User>(user => user.Email == email).FirstOrDefaultAsync();

    //Este método remove um usuário da coleção com base em seu id.(DELETE)
    public async Task RemoveAsync(string id) =>
        await _Users.DeleteOneAsync(x => x.Id == id);
    
    #endregion


}


