using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TinderClone.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("email")]
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        public string Email { get; set; } = null!;

        [BsonElement("name")]
        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; } = null!;

        [BsonElement("age")]
        [Range(18, 120, ErrorMessage = "Age must be between 18 and 120.")]
        public int Age { get; set; }

        [BsonElement("gender")]
        [Required(ErrorMessage = "Gender is required.")]
        public string Gender { get; set; } = null!;

        [BsonElement("photos")]
        public List<string> Photos { get; set; } = new List<string>();

        [BsonElement("profile_photo")]
        [Required(ErrorMessage = "Profile photo is required.")]
        [Url(ErrorMessage = "Invalid URL.")]
        public string Profile_photo { get; set; } = null!;

        [BsonElement("interests")]
        [BsonRepresentation(BsonType.ObjectId)]
        public List<string> Interests { get; set; } = new List<string>();
    }
}
