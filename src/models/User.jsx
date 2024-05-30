class User {
  constructor(
    id,
    username,
    name,
    age,
    email,
    gender,
    bio,
    photos,
    location,
    preferences,
    profile_photo
  ) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.bio = bio;
    this.photos = photos; // Array de URLs de fotos
    this.profile_photo = profile_photo; // URL da foto de perfil
    this.location = location; // Localização como objeto {lat, lng}
    this.preferences = preferences; // Preferências como objeto { genderPreference, ageRange, distance }
  }


  //alterar para nossa API 
  static fromJson(json) {
    return new User(
      json.id,
      json.username,
      json.name,
      json.age,
      json.email,
      json.gender,
      json.bio,
      json.photos,
      json.profilePhoto,
      json.location,
      json.preferences
    );
  }
}

export default User;
