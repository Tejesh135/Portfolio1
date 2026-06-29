import { NextResponse } from 'next/server';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const TEJESH_PROFILE = `
Name: Tejesh
Role: Python Developer, Data Scientist, Data Analyst
Experience: 
- Data Science Intern at Rubixee (Jan 2026 - Present): Architected ML pipelines, Full Stack AI apps (Next.js/FastAPI), optimized inference times by 40%.
- Data Science & AI Trainee at Datamites (Jan 2026 - Present): Scikit-Learn, TensorFlow, engineered large financial datasets, built recommendation engines.
Skills: 
- Languages: Python, JavaScript, SQL, HTML, CSS
- Machine Learning & AI: PyTorch, Scikit-Learn, Hugging Face Transformers, PEFT, LoRA, NLP, Deep Learning, Neural Networks, BERT, DistilBERT, LLM Fine-Tuning
- Data Engineering: Pandas, NumPy, PySpark, ETL Pipelines, Data Quality, Feature Engineering, SQL Database Management
- Web Development: React.js, REST APIs, Node.js, MongoDB, PostgreSQL, FastAPI
- Cloud & DevOps: AWS (AI services, ML services), Git Version Control
- Data Visualization: Power BI, Tableau, Matplotlib, Seaborn, Excel Analytics
Projects: Neuralretail Recommendation Engine, Home Loan Default Prediction, House Price Prediction, Rice Leaf Disease CNN, Full Stack AI Architecture.
Certifications: Pearson MePro Level 10 Expert.
`;

export async function POST(req: Request) {
  try {
    const { jobDescription } = await req.json();

    if (!jobDescription) {
      return NextResponse.json({ error: 'Job description is required' }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ 
          error: "API key not configured",
          matchScore: 85,
          summary: "Demo Mode: Based on keyword matching, Tejesh is a strong fit for AI and Data Science roles.",
          matchingSkills: ["Python", "Machine Learning"],
          missingSkills: ["Kubernetes (Example)"]
        });
    }
    
    const llm = new ChatGoogleGenerativeAI({
        apiKey,
        model: "gemini-2.5-flash", 
        temperature: 0.2, // Low temperature for consistent analysis
    });

    const promptTemplate = `
      You are an expert ATS (Applicant Tracking System) and Technical Recruiter.
      Compare the following Job Description against Tejesh's Profile.
      
      Tejesh's Profile:
      {profile}

      Job Description:
      {jobDescription}

      Analyze the match and provide the output EXACTLY in this JSON format:
      {{
        "matchScore": <number between 0 and 100>,
        "summary": "<a 2-3 sentence hiring summary explaining why Tejesh is or isn't a fit>",
        "matchingSkills": ["<skill1>", "<skill2>"],
        "missingSkills": ["<skill1>", "<skill2>"]
      }}

      Return ONLY valid JSON. Do not include markdown formatting like \`\`\`json.
    `;

    const prompt = PromptTemplate.fromTemplate(promptTemplate);
    const chain = prompt.pipe(llm).pipe(new StringOutputParser());

    const result = await chain.invoke({
      profile: TEJESH_PROFILE,
      jobDescription: jobDescription
    });

    // Parse the JSON result
    try {
      const parsedResult = JSON.parse(result.trim());
      return NextResponse.json(parsedResult);
    } catch (e) {
      console.error("Failed to parse LLM JSON output:", result);
      return NextResponse.json({ error: "Failed to parse analysis." }, { status: 500 });
    }

  } catch (error) {
    console.error("Job Match API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
