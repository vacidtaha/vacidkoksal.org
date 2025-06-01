#!/bin/bash

# VPS Deployment Script for vacidkoksal.org
echo "🚀 Starting deployment process..."

# Update system packages
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+ if not installed
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    sudo npm install -g pm2
fi

# Install dependencies
echo "📦 Installing project dependencies..."
npm ci --only=production

# Build the application
echo "🔨 Building the application..."
npm run build

# Create logs directory
mkdir -p logs

# Stop existing PM2 processes
echo "🔄 Stopping existing processes..."
pm2 stop vacidkoksal-org || true
pm2 delete vacidkoksal-org || true

# Start the application with PM2
echo "🚀 Starting application with PM2..."
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Setup PM2 startup script
sudo pm2 startup systemd -u $USER --hp $HOME

echo "✅ Deployment completed!"
echo "🌐 Application is running on http://localhost:3000"
echo "📊 Check logs with: pm2 logs vacidkoksal-org"
echo "📊 Check status with: pm2 status" 