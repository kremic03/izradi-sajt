# 🚀 DEPLOYMENT INSTRUKCIJE - Ubuntu VPS

Portfolio sajt Nikola Kremić - izradi-sajt.com

---

## ✅ PRE-DEPLOYMENT CHECKLIST

- [x] Build prolazi bez grešaka
- [x] Svi prevodi kompletni (SR/EN)
- [x] CV.pdf postoji u /public/
- [x] .env.local u .gitignore
- [x] Sitemap konfigurisano za izradi-sajt.com
- [x] API email konfigurisano za kontakt@izradi-sajt.com
- [x] Security headers konfigurisani
- [x] Slike optimizovane

---

## KORAK 1: PRIPREMA SERVERA

SSH u svoj Ubuntu VPS:

```bash
ssh root@YOUR_SERVER_IP
```

### Instaliraj potrebne pakete:

```bash
# Ažuriraj sistem
sudo apt update && sudo apt upgrade -y

# Instaliraj Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Proveri verzije
node -v  # v20.x
npm -v   # v10.x

# Instaliraj PM2 (process manager)
sudo npm install -g pm2

# Instaliraj Nginx
sudo apt install -y nginx

# Instaliraj Certbot (za SSL)
sudo apt install -y certbot python3-certbot-nginx

# Instaliraj Git (ako već nije)
sudo apt install -y git
```

---

## KORAK 2: DEPLOY PROJEKAT

### Opcija A: Git Clone (preporučeno)

```bash
# Napravi folder
sudo mkdir -p /var/www/izradi-sajt
sudo chown -R $USER:$USER /var/www/izradi-sajt
cd /var/www/izradi-sajt

# Inicijalizuj git ako već nisi
# Na lokalnoj mašini:
cd /Users/nikolakremic/Sajt/sajt
git init
git add .
git commit -m "Initial commit - Portfolio ready for production"

# Dodaj remote (GitHub/GitLab)
# git remote add origin <tvoj-repo-url>
# git push -u origin main

# Na serveru:
git clone <tvoj-repo-url> /var/www/izradi-sajt
cd /var/www/izradi-sajt
```

### Opcija B: SCP transfer

```bash
# Sa lokalne mašine:
scp -r /Users/nikolakremic/Sajt/sajt/* root@YOUR_SERVER_IP:/var/www/izradi-sajt/
```

---

## KORAK 3: KONFIGURIŠI ENVIRONMENT

```bash
cd /var/www/izradi-sajt

# Napravi .env.local
nano .env.local
```

Dodaj:
```env
RESEND_API_KEY=re_TVOJ_NOVI_API_KLJUC
```

**VAŽNO:** Generiši NOVI API ključ na https://resend.com/api-keys

Sačuvaj: `Ctrl+X`, `Y`, `Enter`

---

## KORAK 4: BUILD APLIKACIJU

```bash
cd /var/www/izradi-sajt

# Instaliraj dependencies
npm install

# Build produkcijsku verziju
npm run build

# Proveri build
ls -la .next/
```

---

## KORAK 5: STARTUJ SA PM2

```bash
# Startuj Next.js
pm2 start npm --name "portfolio" -- start

# Proveri status
pm2 status

# Vidi logove
pm2 logs portfolio --lines 50

# Auto-restart na system reboot
pm2 startup
pm2 save
```

Aplikacija je sada dostupna na: `http://localhost:3000`

---

## KORAK 6: NGINX REVERSE PROXY

```bash
# Napravi Nginx config
sudo nano /etc/nginx/sites-available/izradi-sajt.com
```

Dodaj sledeći config:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name izradi-sajt.com www.izradi-sajt.com;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Aktiviraj config:

```bash
# Aktiviraj site
sudo ln -s /etc/nginx/sites-available/izradi-sajt.com /etc/nginx/sites-enabled/

# Testiraj config
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

Sajt je sada dostupan na: `http://izradi-sajt.com`

---

## KORAK 7: SSL SERTIFIKAT (HTTPS)

```bash
# Automatski SSL sa Let's Encrypt
sudo certbot --nginx -d izradi-sajt.com -d www.izradi-sajt.com

# Odgovori:
# Email: nikolakremic15@gmail.com
# Terms of Service: Yes (Y)
# Share email: No (N)
# Redirect HTTP to HTTPS: Yes (2)

# Testuj auto-renewal
sudo certbot renew --dry-run
```

Gotovo! Sajt je sada na: **https://izradi-sajt.com** 🎉

---

## KORAK 8: DNS KONFIGURACIJA

### A) Glavni domen (internet.bs)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `YOUR_SERVER_IP` | 3600 |
| A | www | `YOUR_SERVER_IP` | 3600 |

### B) Resend Email (za kontakt formu)

Idi na: https://resend.com/domains/izradi-sajt.com

Dodaj DNS zapise:

| Type | Name | Value | Priority | TTL |
|------|------|-------|----------|-----|
| TXT | resend._domainkey | `p=MIGfMA0GCSq...` (kopiraj iz Resend) | - | 3600 |
| MX | send | `feedback-smtp.eu-west-1.amazonses.com` | 10 | 3600 |
| TXT | send | `v=spf1 include:amazonses.com ~all` | - | 3600 |

Sačekaj 5-30 minuta za DNS propagaciju.

Proveri na: https://mxtoolbox.com/SuperTool.aspx?action=mx%3aizradi-sajt.com

---

## KORAK 9: FIREWALL (UFW)

```bash
# Dozvoli SSH, HTTP, HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable

# Proveri status
sudo ufw status
```

---

## 📋 MAINTENANCE KOMANDE

### Ažuriranje koda

```bash
cd /var/www/izradi-sajt
git pull
npm install
npm run build
pm2 restart portfolio
```

### Monitoring

```bash
# Vidi logove
pm2 logs portfolio

# Real-time monitoring
pm2 monit

# Status
pm2 status

# Restart
pm2 restart portfolio

# Stop
pm2 stop portfolio
```

### Nginx

```bash
# Reload config
sudo systemctl reload nginx

# Restart
sudo systemctl restart nginx

# Status
sudo systemctl status nginx

# Error logs
sudo tail -f /var/log/nginx/error.log
```

### SSL Renewal

```bash
# Certbot automatski renewuje svaka 3 meseca
# Ručno renewal:
sudo certbot renew

# Proveri validity
sudo certbot certificates
```

---

## 🔍 TROUBLESHOOTING

### Sajt ne radi

```bash
# Proveri Next.js
pm2 logs portfolio --lines 100

# Proveri Nginx
sudo nginx -t
sudo systemctl status nginx

# Proveri port 3000
sudo lsof -i :3000
```

### Kontakt forma ne šalje email

```bash
# Proveri logove
pm2 logs portfolio | grep "contact"

# Proveri .env.local
cat /var/www/izradi-sajt/.env.local

# Proveri Resend dashboard
# https://resend.com/emails
```

### SSL problemi

```bash
# Renewal SSL
sudo certbot renew --force-renewal

# Proveri certificate
sudo certbot certificates
```

---

## ✅ FINALNA PROVERA

1. Otvori: https://izradi-sajt.com
2. Proveri language toggle (SR/EN)
3. Preuzmi CV
4. Pošalji test poruku preko kontakt forme
5. Proveri email u Gmail-u

---

## 📊 PERFORMANSE

Proveri brzinu sajta:
- https://pagespeed.web.dev/
- https://gtmetrix.com/

Očekivane ocene:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

**Deployment kompletiran!** 🚀

Za dodatnu pomoć:
- Email: nikolakremic15@gmail.com
- GitHub Issues: <tvoj-repo>/issues
