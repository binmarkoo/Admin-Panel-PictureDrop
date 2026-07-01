<div align="center">

# 🖼️ Admin Panel – PictureDrop 🎛️

### *Das Kontrollzentrum hinter PictureDrop* 🚀

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Angular](https://img.shields.io/badge/Angular_19-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

*Workspaces, Submissions, User & Gutscheine — alles unter Kontrolle.* 🎯

</div>

---

## 🎛️ Worum geht's?

Ein Admin-Panel für die PictureDrop-Plattform. Full-Stack, mit **NestJS-Backend** und **Angular-Frontend** samt Charts. Verwalte Workspaces, Submissions, User und ein komplettes Gutschein-System. 📊

## ✨ Features

- 🗂️ **Workspace-Management** — Submissions organisieren
- 📤 **Submission-Handling** — Einreichungen & Items verwalten
- 👥 **User-Management** — Plattform-User administrieren
- 🎟️ **Gutschein-System** — Voucher anlegen & managen
- 📊 **Dashboard & Charts** — Datenvisualisierung mit Chart.js
- 🔧 **OpenAPI-Client** — type-safe API-Layer im Frontend
- 📖 **Swagger-Doku** fürs Backend

## 🏗️ Architektur

### 🔌 Backend (`Backend/`)
Modulare NestJS-API — jedes Modul nach dem Schema Controller / Service / DTO / Entity:

`🗂️ Workspaces` · `📤 Submissions` · `📦 Submission Items` · `👥 Users` · `🎟️ Vouchers`

Mit **PostgreSQL** via **TypeORM** und **Swagger**.

### 🎨 Frontend (`Frontend/PictureDrop/`)
Angular-App mit:
- 🧩 Komponenten: Arbeitsbereich, Gutscheinsystem, Login
- 📊 **Chart.js** für Dashboards
- 🔧 API-Client aus dem OpenAPI-Spec generiert
- 🖥️ Server-Side Rendering (SSR)

## 🛠️ Tech Stack

| Layer | Womit |
|-------|-------|
| 🔌 Backend | ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white) ![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=flat) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) |
| 🎨 Frontend | ![Angular](https://img.shields.io/badge/Angular_19-DD0031?style=flat&logo=angular&logoColor=white) ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white) |

## 🚀 Los geht's

### 🔌 Backend

```bash
git clone https://github.com/binmarkoo/Admin-Panel-PictureDrop.git
cd Admin-Panel-PictureDrop/Backend
npm install
npm run start:dev   # 🏃‍♂️ Watch-Mode
```
> ⚙️ PostgreSQL-Connection vorher in den Config-/Env-Files einstellen.

### 🎨 Frontend

```bash
cd Admin-Panel-PictureDrop/Frontend/PictureDrop
npm install
npm run generate-api   # 🔧 API-Client (optional, wenn API sich ändert)
npm start              # 👉 http://localhost:4200
```

## 🗂️ Projektstruktur

```
Admin-Panel-PictureDrop/
├── 🔌 Backend/                    # NestJS API
│   └── src/
│       ├── 🗂️ workspaces/
│       ├── 📤 submission/
│       ├── 📦 submission-item/
│       ├── 👥 users/
│       └── 🎟️ vouchers/
└── 🎨 Frontend/PictureDrop/       # Angular App
    └── src/app/Components/
        ├── 🗂️ arbeitsbereich/
        ├── 🎟️ gutscheinsystem/
        └── 🔐 login/
```

---

