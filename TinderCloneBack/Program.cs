using System.Dynamic;
using TinderClone.Models;
using TinderClone.Services;


var builder = WebApplication.CreateBuilder(args);

// Adiciona serviços no container.
builder.Services.Configure<TinderCloneDataBaseSettings>(
    builder.Configuration.GetSection("TinderCloneDB"));

builder.Services.AddSingleton<UserService>();