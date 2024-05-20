using System;
using MongoDB.Driver;
using MongoDB.Bson;

class Program
{
    static void Main(string[] args)
    {
        string connectionString = "mongodb+srv://igorrosa:IGOR1010@tinder-clone.eqgoimh.mongodb.net/?retryWrites=true&w=majority&appName=Tinder-Clone";
        string databaseName = "TinderCloneDB";

        MongoDBConnector connector = new MongoDBConnector(connectionString, databaseName);

        try
        {
            var collection = connector.GetCollection<BsonDocument>("sers");

            // Recuperar todos os documentos na coleção "users"
            var documents = collection.Find(new BsonDocument()).ToList();

            // Verificar se há documentos retornados
            if (documents.Count > 0)
            {
                // Iterar sobre os documentos e imprimir suas informações
                foreach (var document in documents)
                {
                    Console.WriteLine(document.ToJson()); // Utiliza ToJson() para imprimir o documento
                }
            }
            else
            {
                Console.WriteLine("Nenhum documento encontrado na coleção 'users'.");
            }

            Console.WriteLine("Conexão com o MongoDB Atlas estabelecida com sucesso!");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Erro ao conectar ao MongoDB Atlas: {ex.Message}");
        }
    }

}
