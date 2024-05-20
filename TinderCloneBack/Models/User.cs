using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver.GeoJsonObjectModel;

namespace TinderClone.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("username")]
        public string Username { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("age")]
        public int Age { get; set; }

        [BsonElement("gender")]
        public string Gender { get; set; }

        [BsonElement("bio")]
        public string Bio { get; set; }

        [BsonElement("photos")]
        public List<string> Photos { get; set; }

        [BsonElement("location")]
        public GeoJsonPoint<GeoJson2DCoordinates> Location { get; set; }

        [BsonElement("preferences")]
        public Preferences Preferences { get; set; }
    }

    public class Preferences
    {
        [BsonElement("gender")]
        public string Gender { get; set; }

        [BsonElement("ageRange")]
        public List<int> AgeRange { get; set; }

        [BsonElement("distance")]
        public int Distance { get; set; }
    }
}
