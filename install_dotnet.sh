#!/usr/bin/env bash

# Baixe e instale o .NET SDK
wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
chmod +x dotnet-install.sh
./dotnet-install.sh --install-dir ~/.dotnet --version 8.0  # ou a versão que você precisa
export PATH="$HOME/.dotnet:$HOME/.dotnet/tools:$PATH"
