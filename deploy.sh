#!/bin/bash

# Portfolio Deployment Script - Ubuntu VPS
# Nikola Kremić - izradi-sajt.com

echo "🚀 Portfolio Deployment Script"
echo "================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running on Ubuntu
if [[ ! -f /etc/lsb-release ]]; then
    echo -e "${RED}❌ This script is designed for Ubuntu${NC}"
    exit 1
fi

echo -e "${GREEN}✓${NC} Ubuntu detected"

# Check if running as root or with sudo
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}❌ This script must be run as root or with sudo${NC}"
   exit 1
fi

echo -e "${GREEN}✓${NC} Running with sudo privileges"
echo ""

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Node.js
echo "📦 Installing Node.js 20 LTS..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt install -y nodejs
fi

NODE_VERSION=$(node -v)
echo -e "${GREEN}✓${NC} Node.js ${NODE_VERSION} installed"

# Install PM2
echo "📦 Installing PM2..."
npm install -g pm2
echo -e "${GREEN}✓${NC} PM2 installed"

# Install Nginx
echo "📦 Installing Nginx..."
apt install -y nginx
systemctl enable nginx
echo -e "${GREEN}✓${NC} Nginx installed"

# Install Certbot
echo "📦 Installing Certbot..."
apt install -y certbot python3-certbot-nginx
echo -e "${GREEN}✓${NC} Certbot installed"

# Install Git
echo "📦 Installing Git..."
apt install -y git
echo -e "${GREEN}✓${NC} Git installed"

# Create project directory
echo "📁 Creating project directory..."
mkdir -p /var/www/izradi-sajt
echo -e "${GREEN}✓${NC} Directory created at /var/www/izradi-sajt"

echo ""
echo -e "${GREEN}✅ Server preparation complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Upload your project to /var/www/izradi-sajt/"
echo "2. Create .env.local with your RESEND_API_KEY"
echo "3. Run: cd /var/www/izradi-sajt && npm install && npm run build"
echo "4. Start with PM2: pm2 start npm --name portfolio -- start"
echo "5. Configure Nginx (see DEPLOYMENT.md)"
echo "6. Setup SSL with: sudo certbot --nginx -d izradi-sajt.com -d www.izradi-sajt.com"
echo ""
echo "For detailed instructions, read DEPLOYMENT.md"
