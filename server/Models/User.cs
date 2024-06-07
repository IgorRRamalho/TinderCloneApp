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

        [BsonElement("bio")]
        public string Bio { get; set; } = null!;

        [BsonElement("photos")]
        public List<string> Photos { get; set; } = null!;

        [BsonElement("location")]
        public LocationCoordinates Location { get; set; } = null!;

        [BsonElement("preferences")]
        public Preferences Preferences { get; set; } = null!;

        [BsonElement("interests")]
        [BsonRepresentation(BsonType.ObjectId)]
        public List<string> Interests { get; set; } = null!;
    }

    public class LocationCoordinates
    {
        [BsonElement("type")]
        public string Type { get; set; } = null!;

        [BsonElement("coordinates")]
        public List<double> Coordinates { get; set; } = null!;
    }

    public class Preferences
    {
        [BsonElement("gender")]
        public string Gender { get; set; } = null!;

        [BsonElement("ageRange")]
        public List<int> AgeRange { get; set; } = null!;

        [BsonElement("distance")]
        public int Distance { get; set; }
    }
}
