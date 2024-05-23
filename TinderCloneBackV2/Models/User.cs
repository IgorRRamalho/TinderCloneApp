using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver.GeoJsonObjectModel;

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
        public GeoJsonPoint<GeoJson2DCoordinates> Location { get; set; } = null!;

        [BsonElement("preferences")]
        public Preferences Preferences { get; set; } = null!;
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
