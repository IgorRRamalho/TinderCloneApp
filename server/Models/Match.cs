using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Match
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("user1Id")]
    public string User1Id { get; set; }

    [BsonElement("user2Id")]
    public string User2Id { get; set; }

    [BsonElement("matchDate")]
    public DateTime MatchDate { get; set; }
}
