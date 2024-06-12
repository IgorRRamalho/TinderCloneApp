using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace TinderClone.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("email")]
        public string Email { get; set; } = null!;

        [BsonElement("name")]
        public string Name { get; set; } = null!;

        [BsonElement("age")]
        public int Age { get; set; }

        [BsonElement("gender")]
        public string Gender { get; set; } = null!;

        [BsonElement("photos")]
        public List<string> Photos { get; set; } = new List<string>();

        [BsonElement("profile_photo")]
        public string ProfilePhoto { get; set; } = null!;

        [BsonElement("interests")]
        [BsonRepresentation(BsonType.ObjectId)]
        public List<string> Interests { get; set; } = new List<string>();
    }
}
