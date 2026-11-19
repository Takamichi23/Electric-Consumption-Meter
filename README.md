<<<<<<< HEAD
# Electric Meter Consumption Calculator

A lightweight web application for calculating monthly electricity consumption (kWh) and estimated electricity cost (PHP), complete with input validation, Lottie animations, calculation breakdown, and energy-saving tips.

## Project Structure

```text
Electric Meter Consumption Calculator/
├── index.html          # Main calculator form & loading transition screen
├── pages/
│   └── result.html     # Calculation results, breakdown, tips & thank-you screen
├── css/
│   ├── index.css       # Styles for the calculator page
│   └── result.css      # Styles for the results page
├── js/
│   ├── calculator.js   # Form validation, computation & localStorage save
│   └── result.js       # Result rendering & thank-you screen redirect
├── assets/
│   └── favicon.svg     # App icon
├── prototype/          # Archived early static UI mockups
└── README.md
```

## How to Run

This is a static frontend project (HTML, CSS, JavaScript) with no build step required. Running it through a local HTTP server is recommended so `localStorage` and Lottie animations work consistently across pages.

### Option 1: Python (Built-in Server)

Open a terminal inside the project folder and run:

```powershell
python -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

### Option 2: Node.js (`npx serve`)

```powershell
npx serve .
```

Then open the local URL printed in the terminal (typically **http://localhost:3000**).

### Option 3: VS Code Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension (if not already installed).
3. Right-click `index.html` and choose **Open with Live Server**.

## Input Requirements

- **Meter Number:** 4 letters followed by 4 digits (e.g., `ABCD1234`)
- **Previous Reading (kWh):** Positive number, up to 5 digits
- **Current Reading (kWh):** Positive number greater than or equal to the previous reading, up to 5 digits
- **Cost per kWh (PHP):** Positive number (e.g., `12.50`)
=======
# Electric Consumption Meter ⚡📊

A **web-based electric consumption meter** designed to help users track and calculate their electricity usage efficiently.  

This project uses **HTML, CSS, Tailwind, and JavaScript** to create a responsive and interactive interface.  

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Styling:** Tailwind CSS  
- **Responsive Design:** Works across desktop, tablet, and mobile  

---

## ⚡ Features

- Input your electricity usage and rate to calculate monthly consumption cost  
- Dynamic calculations using JavaScript  
- Clean and modern UI with Tailwind CSS  
- Responsive layout for all devices  
- Easy-to-use and intuitive interface  

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)  

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/electric-consumption-meter.git](https://github.com/Takamichi23/Electric-Consumption-Meter.git)
>>>>>>> origin/main
