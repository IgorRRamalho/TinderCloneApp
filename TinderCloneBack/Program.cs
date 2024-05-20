using System.Dynamic;
using TinderClone.Models;

var builder = WebApplication.CreateBuilder(args);

var build = 

// Add services to the container.
builder.Services.Configure<TinderCloneDataBaseSettings>(
    builder.Configuration.GetSection("TinderCloneDatabase"));