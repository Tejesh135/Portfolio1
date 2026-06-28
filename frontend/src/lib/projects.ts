export const projectData = [
  {
    id: "neural-retail",
    title: "Neuralretail Recommendation Engine",
    category: "Datamites",
    subtitle: "Advanced retail analytics and demand forecasting platform",
    overview: "Neuralretail is an intelligent recommendation engine built to solve complex retail challenges. It leverages deep learning models to predict inventory demand, analyze customer behavior, and segment users to maximize sales efficiency. This project involved building robust data pipelines, feature engineering, and model training.",
    challenges: [
      "Handling massive, imbalanced transactional datasets.",
      "Optimizing deep learning models for fast inference times.",
      "Designing a scalable backend to serve real-time predictions."
    ],
    solutions: [
      "Implemented advanced data imputation and SMOTE for class balancing.",
      "Utilized TensorFlow and Keras to build deep neural networks tailored for time-series forecasting.",
      "Deployed the model as an API using Flask/FastAPI for seamless integration with frontend systems."
    ],
    techStack: ["Python", "TensorFlow", "Keras", "Pandas", "Scikit-Learn", "Matplotlib", "Flask/FastAPI"],
    images: [
      "/projects/neural-retail/Screenshot (524).png",
      "/projects/neural-retail/Screenshot (525).png",
      "/projects/neural-retail/Screenshot (526).png",
      "/projects/neural-retail/Screenshot (527).png",
      "/projects/neural-retail/Screenshot (528).png",
      "/projects/neural-retail/Screenshot (529).png",
      "/projects/neural-retail/Screenshot (530).png",
      "/projects/neural-retail/Screenshot (531).png",
      "/projects/neural-retail/Screenshot (532).png",
    ]
  },
  {
    id: "home-loan",
    title: "Home Loan Default Prediction",
    category: "Datamites",
    subtitle: "Risk assessment engine for financial institutions",
    overview: "This project addresses the critical challenge of predicting whether a loan applicant will default. By analyzing historical financial datasets, demographic information, and credit scores, a robust machine learning pipeline was constructed to enhance decision-making for loan approvals.",
    challenges: [
      "Dealing with noisy, missing, and highly skewed financial data.",
      "Identifying the most influential features for default prediction without overfitting.",
      "Ensuring the model's predictions are interpretable for financial auditors."
    ],
    solutions: [
      "Applied extensive exploratory data analysis (EDA) using Seaborn and Matplotlib to uncover hidden trends.",
      "Engineered new financial ratios and utilized XGBoost and Random Forest algorithms for high-accuracy predictions.",
      "Generated feature importance charts and SHAP values for model explainability."
    ],
    techStack: ["Python", "XGBoost", "Random Forest", "Data Engineering", "Seaborn", "Pandas", "Jupyter"],
    images: [
      "/projects/home-loan/Screenshot (516).png",
      "/projects/home-loan/Screenshot (517).png",
      "/projects/home-loan/Screenshot (518).png",
      "/projects/home-loan/Screenshot (519).png",
      "/projects/home-loan/Screenshot (520).png",
      "/projects/home-loan/Screenshot (521).png",
      "/projects/home-loan/Screenshot (522).png",
    ]
  },
  {
    id: "house-price",
    title: "House Price Prediction",
    category: "Rubixee",
    subtitle: "Real estate forecasting using regression analysis",
    overview: "A machine learning solution developed during the Rubixee internship to accurately predict housing prices based on various structural, geographic, and economic features. The system is designed to help real estate agents and buyers make data-driven decisions.",
    challenges: [
      "Handling categorical variables and outliers in real estate data.",
      "Selecting the right regression algorithm to minimize Mean Absolute Error (MAE)."
    ],
    solutions: [
      "Used One-Hot Encoding and scaling techniques to prepare the data.",
      "Evaluated multiple models including Linear Regression, Decision Trees, and Gradient Boosting.",
      "Deployed the best performing model via an interactive web interface."
    ],
    techStack: ["Python", "Scikit-Learn", "Matplotlib", "FastAPI", "Pandas", "NumPy"],
    images: [
      "/projects/house-price/Screenshot (523).png",
    ]
  },
  {
    id: "rice-leaf",
    title: "Rice Leaf Disease Classification",
    category: "Rubixee",
    subtitle: "Computer vision application for agricultural tech",
    overview: "Developed to assist farmers in identifying diseases affecting rice crops. By uploading an image of a rice leaf, the system utilizes a Convolutional Neural Network (CNN) to instantly classify the disease (e.g., Leaf Smut, Bacterial Leaf Blight, Brown Spot) and suggest remedies.",
    challenges: [
      "Training a highly accurate model on a limited dataset of leaf images.",
      "Deploying a deep learning model to run efficiently in a web environment."
    ],
    solutions: [
      "Employed Transfer Learning with pre-trained models (like ResNet or VGG) using PyTorch.",
      "Implemented image augmentation techniques (rotation, flipping, zooming) to improve model generalization.",
      "Built a responsive React frontend for users to easily upload images and view results."
    ],
    techStack: ["PyTorch", "OpenCV", "Deep Learning", "React", "Python", "Torchvision"],
    images: [
      "/projects/rice-leaf/Screenshot (535).png",
    ]
  },
  {
    id: "full-stack-ai",
    title: "Full Stack AI Architecture",
    category: "Rubixee",
    subtitle: "Scalable modern web application integrating AI",
    overview: "A comprehensive project showcasing the ability to bridge the gap between machine learning models and end-user applications. This full-stack architecture seamlessly integrates predictive models into a modern web interface with secure authentication, database management, and a polished UI.",
    challenges: [
      "Architecting a system where the frontend and backend can communicate asynchronously with heavy AI models.",
      "Ensuring application security, state management, and high performance."
    ],
    solutions: [
      "Built a RESTful API with Node.js/Express (or Next.js API routes) to handle model inference requests.",
      "Designed a sleek, responsive user interface using React and TailwindCSS.",
      "Integrated MongoDB for data persistence and user session management."
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "Express", "REST API", "JWT"],
    images: [
      "/projects/full-stack-ai/Screenshot (538).png",
      "/projects/full-stack-ai/Screenshot (539).png",
      "/projects/full-stack-ai/Screenshot (540).png",
      "/projects/full-stack-ai/Screenshot (541).png",
      "/projects/full-stack-ai/Screenshot (542).png",
      "/projects/full-stack-ai/Screenshot (543).png",
      "/projects/full-stack-ai/Screenshot (544).png",
    ]
  }
];

export function getProjectById(id: string) {
  return projectData.find(project => project.id === id);
}
