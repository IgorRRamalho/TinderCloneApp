using TinderClone.Models;
using TinderClone.Services;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

<<<<<<< HEAD
// Register configuration settings
builder.Services.Configure<TinderCloneDataBaseSettings>(
    builder.Configuration.GetSection("TinderCloneDB"));

// Register UserService with the dependency injection container
builder.Services.AddScoped<UserService>();

=======
>>>>>>> 3a5f1d5543c87bf81fd585f4191b6c28af2c27cc
// Add support for Swagger for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register the settings configuration
builder.Services.Configure<TinderCloneDataBaseSettings>(
    builder.Configuration.GetSection(nameof(TinderCloneDataBaseSettings)));

// Register UserService
builder.Services.AddSingleton<UserService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
