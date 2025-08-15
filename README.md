# ITC About Us - Simple Setup Guide

## 🚀 Quick Start

This guide will get your ITC About Us project running in minutes using the provided demo database.

## 📋 What You Need

- **DDEV** installed on your machine
- **Git** for cloning the project
- The demo database file: `itc-about-us-database-20250816.sql.gz`

## 🛠️ Setup Steps

### 1. Clone & Start Project
```bash
# Clone the project
cd itc-about-us

# Start DDEV
ddev start
```

### 2. Install Dependencies
```bash
# Install PHP dependencies
ddev composer install
```

### 3. Import Demo Database
```bash
# Import the demo database (this will give you a working site)
ddev import-db --file=itc-about-us-database-20250816.sql.gz
```

### 4. Access Your Site
```bash
# Open in browser
ddev launch
```
Open /admin/content, and you'll find the About Us page there."
**That's it!** 
