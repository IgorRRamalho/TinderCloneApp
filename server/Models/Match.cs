using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace TinderClone.Models
{
    public class Match
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("user1Id")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string User1Id { get; set; } = null!;

        [BsonElement("user2Id")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string User2Id { get; set; } = null!;

        [BsonElement("matchDate")]
        public DateTime MatchDate { get; set; }
    }
}
