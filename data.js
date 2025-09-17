window.SITE = {
name: "[Allahra Dionadji]",
role: "Control & Intelligent Systems Engineer",
location: "Ndjamena, Chad",
email: "allahradionadji@gmail.com \n School: adgilchrist",
github: "https://github.com/allahraddji",
linkedin: "https://www.linkedin.com/in/yourhandle/",
scholar: "https://scholar.google.com/citations?user=XXXX",
metrics: { years: "3", robots: "5", pubs: "4", stars: "120" },
skills: {
control: ["PID", "LQR/LQG", "MPC (linear/nonlinear)", "Kalman/UKF/EKF", "System ID", "Optimal Control"],
robotics: ["ROS/ROS2", "C++ / Python", "STM32 / ESP32", "Linux / RTOS", "MATLAB/Simulink", "Sensors/Actuators"],
ai: ["RL (DQN/PPO)", "Imitation Learning", "Policy Gradients", "Model‑based RL", "PyTorch"],
tooling: ["Git/GitHub", "Docker", "CI/CD", "SITL/HIL", "AWS/GCP"]
},
projects: [
{ title: "Self-Driving Wheelchair", summary: "NMPC with constraints; Python+CasADi sim; C++ ROS2 onboard.", tags: ["control","robotics","Matlab","ROS2","CoppeliaSim"], link: "#", image: "https://placehold.co/600x400?text=NMPC+Quadrotor" },
{ title: "Visual-Inertial State Estimation", summary: "EKF/UKF fusion; real-time VIO with loop closure.", tags: ["estimation","robotics","EKF","VIO"], link: "#", image: "https://placehold.co/600x400?text=VIO+Estimation" },
{ title: "Learning-Based Control for Inverted Pendulum", summary: "PPO controller + CBF safety filter.", tags: ["rl","control","CBF"], link: "#", image: "https://placehold.co/600x400?text=RL+Control" }
],
publications: [
{ authors: "[You], A. Collaborator", title: "Safe Learning-Based Control with CBFs", venue: "IEEE CDC", year: 2024, link: "#", doi: "" },
{ authors: "[You], B. Collaborator", title: "Nonlinear MPC for Quadrotor Maneuvers", venue: "IFAC World Congress", year: 2023, link: "#", doi: "" }
],
experience: [
{ role: "Control Engineer", org: "Robotics Lab / Company", period: "2023 – Present", bullets: ["Designed MPC for mobile robots with real-time constraints.", "Built SITL/HIL CI pipelines."] },
{ role: "Research Intern", org: "Autonomy Research Center", period: "2022 – 2023", bullets: ["Implemented EKF sensor fusion; reduced drift by 30%.", "Co-authored safe RL for control paper."] }
]
};

