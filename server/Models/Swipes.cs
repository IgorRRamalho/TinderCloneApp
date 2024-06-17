using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace TinderClone.Models
{
    public class Swipe
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("swiperId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string SwiperId { get; set; } = null!;

        [BsonElement("swipedUserId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string SwipedUserId { get; set; } = null!;

        [BsonElement("swipeChoice")]
        public bool SwipeChoice { get; set; }

  
    }
}
