# SustainWell

**SustainWell** empowers communities to monitor, manage, and sustain shared resources like boreholes and water points. By combining cutting-edge technology and a commitment to sustainability, SustainWell enhances transparency, ensures equitable access, and promotes long-term resource sustainability. Our platform is tailored for community-led management and builds resilience for future generations.

---

## Table of Contents

- [Overview](#overview)
- [Inspiration & Background](#inspiration--background)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Backend Setup (Django)](#backend-setup-django)
  - [Frontend Setup (React)](#frontend-setup-react)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## Overview

SustainWell is a community-centric platform designed to facilitate the monitoring, management, and sustainability of vital water resources.
With an intuitive interface and robust analytics, SustainWell bridges the gap between technology and community-led resource management,
ensuring that every community has the tools it needs to maintain and improve its water infrastructure.

---

## Inspiration & Background

SustainWell draws inspiration from a comprehensive Master's project focused on monitoring and evaluation and sustainability of county government-funded borehole water projects in Kaloleni Sub County, Kilifi County, Kenya.
This research highlighted the challenges and opportunities in managing shared water resources at the community level and fueled the vision for a scalable, technology-driven solution that can empower communities and build long-term resilience.

---

## Features

- **Real-Time Resource Monitoring:**  
  Keep track of water usage for boreholes and water points with live data updates.
- **Maintenance Alerts:**  
  Receive timely notifications for maintenance and repairs, ensuring uninterrupted service.
- **Community Dashboard:**  
  Access detailed analytics and visual reports that empower informed decision-making.
- **User Management:**  
  Role-based access for community members, administrators, and local officials.
- **Data Analytics & Reporting:**  
  Export and analyze water usage data to drive sustainable management practices.
- **Scalable & Adaptable:**  
  Designed to expand beyond boreholes to include other shared community resources in the future.

---

## Technologies Used

- **Backend:** Django, Django REST Framework
- **Frontend:** React, Axios
- **Database:** PostgreSQL (SQLite is used during development)
- **Styling:** CSS (with optional integration of Tailwind CSS)
- **Deployment:** Platforms like Heroku, Vercel, or similar cloud services

---

## Getting Started

Follow the instructions below to set up the project locally for development and testing.

### Backend Setup (Django)

1. **Clone the Repository:**

```bash
git clone https://github.com/yourusername/sustainwell.git
cd sustainwell/SustainWell-backend
```

2. **Create a Virtual Environment and Install Dependencies:**

```bash
python -m venv env
source env/bin/activate  # For Windows: env\Scripts\activate
pip install -r requirements.txt
```

3. **Apply Migrations and Run the Server:**

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

The backend API will be accessible at http://127.0.0.1:8000/.

### Frontend Setup (React)

1. **Navigate to the Frontend Directory:**

```bash
cd ../frontend
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Run the React Development Server:**

```bash
npm start
```

The frontend will run at http://localhost:3000/.

**Note:**

Ensure the API base URL in your React app (e.g., in src/services/api.js) is set to
http://127.0.0.1:8000/api/ during development.

---

## Usage

Once both the backend and frontend servers are running, you can:

- Monitor Water Resources: View real-time data on borehole and water point usage.
- Manage Data: Add or update resource information and submit maintenance requests.
- Analyze Trends: Utilize the dashboard to view reports and insights that drive sustainable decisions.
- Engage Community Leaders: Empower local administrators and stakeholders with accessible data and management tools.-

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.

2. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```bash
git commit -m "Add feature or fix bug"
```

4. Push to your branch:

```bash
git push origin feature/your-feature-name
```

5. Open a pull request describing your changes

---

## License

This project is licensed under the Apache License. See the LICENSE file for details.

---

## Contact

For any questions or suggestions, please reach out via email at [buyekeobare@gmail.com].

---

## Acknowledgements

- Special thanks to the communities in Kaloleni Sub-County, Kilifi County, whose resilience and collaboration have inspired this project.
- I am deeply grateful to my academic mentors and colleagues for their invaluable guidance throughout my research.
- Finally, I appreciate all the open-source contributors and tools that made this project possible.

---

Thank you for exploring SustainWell. Together, we can build a sustainable future for communities around the world!
