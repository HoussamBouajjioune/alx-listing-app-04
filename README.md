
# ALX Listing App

## 📌 Project Overview

The **ALX Listing App** is a foundational project to scaffold an Airbnb clone. This milestone focuses on setting up a clean and maintainable Next.js application using the **Pages Router** (App Router disabled), **TypeScript**, **TailwindCSS**, and **ESLint**. The goal is to create a scalable codebase with reusable components, type-safe interfaces, and organized assets to build a responsive listing page.

---

## 🎯 Project Goals

- Scaffold a Next.js app with the Pages Router (no App Router).
- Enable TypeScript for type safety.
- Configure TailwindCSS for styling and responsive UI.
- Integrate ESLint to maintain clean code.
- Establish a clear folder structure with reusable components.
- Organize assets for easy access and maintenance.

---

## 🗂️ Project Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx           # Reusable card component for property display
│       └── Button.tsx         # Reusable button component for UI actions
├── interfaces/
│   └── index.ts               # TypeScript interfaces for component props
├── constants/
│   └── index.ts               # Reusable constants like API URLs and config
├── public/
│   └── assets/                # Static assets like images and SVGs
├── pages/
│   └── index.tsx              # Main landing page of the app
├── styles/
│   └── globals.css            # Tailwind base styles only
├── tailwind.config.js         # TailwindCSS configuration
├── tsconfig.json              # TypeScript configuration
├── .eslintrc.json             # ESLint configuration
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** version 16 or higher
- Code editor like **VS Code**
- Recommended extensions: TypeScript, TailwindCSS

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HoussamBouajjioune/alx-listing-app.git
   cd alx-listing-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Assets

All images, icons, and SVGs used in the project should be placed inside the `public/assets/` directory. This organization ensures assets are easily accessible and maintainable.

---

## 📝 Notes

- The project uses the **Pages Router**; the App Router is disabled.
- Files are placed directly under the root, with **no `src` directory**.
- Default import aliases are used without customization.
- TailwindCSS is configured minimally in `tailwind.config.js` with content pointing to pages and components.
- The global styles (`styles/globals.css`) import Tailwind’s base, components, and utilities only:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## 🛠️ Technologies Used

- Next.js 13+
- TypeScript
- TailwindCSS
- ESLint
