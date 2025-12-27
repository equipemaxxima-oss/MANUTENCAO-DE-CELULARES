#!/bin/bash

echo "🚀 Preparando push para GitHub..."
echo ""

# Verificar se está no diretório correto
if [ ! -d ".git" ]; then
    echo "❌ Erro: Este não é um repositório Git"
    exit 1
fi

# Verificar se o remote está configurado
if ! git remote get-url origin &>/dev/null; then
    echo "❌ Erro: Remote origin não configurado"
    exit 1
fi

echo "✅ Repositório Git encontrado"
echo "📍 Remote: $(git remote get-url origin)"
echo ""

# Tentar fazer push
echo "🔄 Tentando fazer push..."
echo ""

# Opção 1: Tentar com GitHub CLI (se autenticado)
if command -v gh &> /dev/null && gh auth status &> /dev/null; then
    echo "✅ GitHub CLI autenticado encontrado"
    git push -u origin main
    exit $?
fi

# Opção 2: Tentar push normal (pode pedir credenciais)
echo "⚠️  GitHub CLI não autenticado. Tentando push direto..."
echo "💡 Se pedir credenciais:"
echo "   - Usuário: equipemaxxima-oss"
echo "   - Senha: Use um Personal Access Token (não sua senha do GitHub)"
echo "   - Criar token: https://github.com/settings/tokens"
echo ""

git push -u origin main

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Push falhou. Opções:"
    echo ""
    echo "1️⃣  Autenticar com GitHub CLI:"
    echo "   gh auth login"
    echo "   git push -u origin main"
    echo ""
    echo "2️⃣  Usar Personal Access Token:"
    echo "   - Crie um token em: https://github.com/settings/tokens"
    echo "   - Use o token como senha quando o Git pedir"
    echo ""
    echo "3️⃣  Configurar SSH:"
    echo "   - Gere uma chave SSH: ssh-keygen -t ed25519 -C 'seu-email@exemplo.com'"
    echo "   - Adicione ao GitHub: https://github.com/settings/keys"
    echo "   - git remote set-url origin git@github.com:equipemaxxima-oss/MANUTENCAO-DE-CELULARES.git"
    echo "   - git push -u origin main"
fi

