# VPS Setup Guide for vacidkoksal.org

Bu dosya projenizi VPS'e kurmak için gereken tüm adımları içerir.

## 🚀 VPS'e Kurulum Adımları

### 1. VPS'e Bağlanma
```bash
ssh root@your-vps-ip
# veya
ssh your-username@your-vps-ip
```

### 2. Sistem Güncellemesi
```bash
sudo apt update && sudo apt upgrade -y
```

### 3. Node.js 18+ Kurulumu
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 4. PM2 Kurulumu (Process Manager)
```bash
sudo npm install -g pm2
```

### 5. Nginx Kurulumu
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 6. Proje Dosyalarını VPS'e Aktarma

#### GitHub'dan clone'lama:
```bash
cd /var/www
sudo git clone https://github.com/vacidtaha/vacidkoksal.org.git
cd vacidkoksal.org
```

#### Dosya sahipliğini düzenleme:
```bash
sudo chown -R $USER:$USER /var/www/vacidkoksal.org
```

### 7. Environment Variables Ayarlama
```bash
# env.example dosyasını .env.local olarak kopyalayın
cp env.example .env.local

# Gerekli değişkenleri düzenleyin
nano .env.local
```

### 8. Proje Kurulumu
```bash
# Dependencies kurulumu
npm ci --only=production

# Proje build'i
npm run build

# Logs klasörü oluşturma
mkdir -p logs
```

### 9. PM2 ile Uygulamayı Başlatma
```bash
# Uygulamayı başlat
pm2 start ecosystem.config.js --env production

# PM2 konfigürasyonunu kaydet
pm2 save

# Sistem başlangıcında otomatik çalışmasını sağla
sudo pm2 startup systemd -u $USER --hp $HOME
```

### 10. Nginx Konfigürasyonu

#### Nginx site konfigürasyonu:
```bash
sudo nano /etc/nginx/sites-available/vacidkoksal.org
```

nginx.conf dosyasının içeriğini buraya kopyalayın ve kaydedin.

#### Site'ı etkinleştirme:
```bash
sudo ln -s /etc/nginx/sites-available/vacidkoksal.org /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 11. SSL Sertifikası (Let's Encrypt)
```bash
# Certbot kurulumu
sudo apt install certbot python3-certbot-nginx -y

# SSL sertifikası alma
sudo certbot --nginx -d vacidkoksal.org -d www.vacidkoksal.org
```

### 12. Firewall Ayarları
```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw enable
```

## 🔧 Uygulama Yönetimi

### PM2 Komutları:
```bash
# Durum kontrolü
pm2 status

# Logları görme
pm2 logs vacidkoksal-org

# Uygulamayı yeniden başlatma
pm2 restart vacidkoksal-org

# Uygulamayı durdurma
pm2 stop vacidkoksal-org

# Uygulamayı silme
pm2 delete vacidkoksal-org
```

### Otomatik Deployment Script'i:
```bash
# deploy.sh dosyasını çalıştırılabilir yapın
chmod +x deploy.sh

# Script'i çalıştırın
./deploy.sh
```

## 🔍 Sorun Giderme

### Logları Kontrol Etme:
```bash
# PM2 logları
pm2 logs vacidkoksal-org

# Nginx logları
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Sistem logları
sudo journalctl -u nginx
```

### Port Kontrolü:
```bash
# Port 3000'in dinlenip dinlenmediğini kontrol edin
sudo netstat -tlnp | grep :3000

# Port 80 ve 443'ün durumu
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

## 📊 Performans İzleme

### PM2 Monitoring:
```bash
# PM2 web dashboard
pm2 web

# Detaylı monitoring
pm2 monit
```

### Sistem Kaynakları:
```bash
# CPU ve Memory kullanımı
htop

# Disk kullanımı
df -h

# Nginx durumu
sudo systemctl status nginx
```

## 🔄 Güncelleme İşlemleri

Proje güncellemesi için:
```bash
cd /var/www/vacidkoksal.org
git pull origin main
npm ci --only=production
npm run build
pm2 restart vacidkoksal-org
```

## 🛡️ Güvenlik Tavsiyeleri

1. **Düzenli güncelleme yapın:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **SSH key kullanın** (şifre yerine)

3. **Firewall'ı aktif tutun:**
   ```bash
   sudo ufw status
   ```

4. **SSL sertifikasını yenileyin:**
   ```bash
   sudo certbot renew --dry-run
   ```

5. **Backup alın:**
   ```bash
   # Database backup (eğer varsa)
   # File backup
   tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/vacidkoksal.org
   ```

## 📞 Destek

Herhangi bir sorun yaşarsanız:
- PM2 loglarını kontrol edin: `pm2 logs`
- Nginx loglarını kontrol edin: `sudo tail -f /var/log/nginx/error.log`
- Sistem durumunu kontrol edin: `sudo systemctl status nginx` 