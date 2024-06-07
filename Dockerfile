# Etapa de build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copiar csproj e restaurar dependências
COPY server/TinderCloneBackV2.csproj ./server/
RUN dotnet restore ./server/TinderCloneBackV2.csproj

# Copiar todo o código e publicar a aplicação
COPY server/. ./server/
WORKDIR /app/server
RUN dotnet publish -c Release -o out

# Etapa de runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/server/out ./
ENTRYPOINT ["dotnet", "TinderCloneBackV2.dll"]
