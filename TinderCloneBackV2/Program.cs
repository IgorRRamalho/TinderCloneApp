﻿using TinderClone.Models;
using TinderClone.Services;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Register configuration settings
builder.Services.Configure<TinderCloneDataBaseSettings>(
    builder.Configuration.GetSection("TinderCloneDB"));

// Register UserService with the dependency injection container
builder.Services.AddScoped<UserService>();

// Add support for Swagger for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        policyBuilder =>
        {
            policyBuilder.SetIsOriginAllowed(_ => true)
                         .AllowAnyHeader()
                         .AllowAnyMethod();
        });
});

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

// Enable CORS with the specified policy
app.UseCors("AllowAllOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
