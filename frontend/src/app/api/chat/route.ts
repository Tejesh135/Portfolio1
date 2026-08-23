import { NextResponse } from 'next/server';
import { GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { Document } from "@langchain/core/documents";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

// Custom Memory Vector Store to bypass Langchain module resolution issues
class CustomMemoryVectorStore {
  documents: Document[] = [];
  vectors: number[][] = [];
  embeddings: GoogleGenerativeAIEmbeddings;

  constructor(embeddings: GoogleGenerativeAIEmbeddings) {
    this.embeddings = embeddings;
  }

  static async fromDocuments(docs: Document[], embeddings: GoogleGenerativeAIEmbeddings) {
    const store = new CustomMemoryVectorStore(embeddings);
    await store.addDocuments(docs);
    return store;
  }

  async addDocuments(docs: Document[]) {
    this.documents.push(...docs);
    const texts = docs.map(d => d.pageContent);
    const vecs = await this.embeddings.embedDocuments(texts);
    this.vectors.push(...vecs);
  }

  async similaritySearch(query: string, k: number = 3) {
    const qVec = await this.embeddings.embedQuery(query);
    const scores = this.vectors.map((v, i) => {
      const dot = v.reduce((sum, val, idx) => sum + val * qVec[idx], 0);
      const mag1 = Math.sqrt(v.reduce((sum, val) => sum + val * val, 0));
      const mag2 = Math.sqrt(qVec.reduce((sum, val) => sum + val * val, 0));
      return { score: dot / (mag1 * mag2), idx: i };
    });
    scores.sort((a, b) => b.score - a.score);
    return scores.slice(0, k).map(s => this.documents[s.idx]);
  }

  asRetriever(k: number = 3) {
    return {
      invoke: async (query: string) => this.similaritySearch(query, k)
    };
  }
}

// Portfolio Knowledge Base for the AI Digital Twin
const TEJESH_CORPUS = [
  new Document({ 
    pageContent: "I am Tejesh, a highly skilled Data Analyst, Machine Learning Engineer, and AI Developer. My email is poolatejesh2006@gmail.com. I currently work as a Data Science Intern at Rubixee and as a Data Science & AI Trainee at Datamites Global Institution, both based in Hyderabad, India.",
    metadata: { source: "Resume - Experience" }
  }),
  new Document({
    pageContent: "At Rubixee in Hyderabad (Jan 2026 - Present), I architect and deploy end-to-end Machine Learning pipelines, develop Full Stack AI web applications using Next.js and FastAPI, and optimize model inference times by 40% through efficient serving architectures.",
    metadata: { source: "Resume - Rubixee" }
  }),
  new Document({
    pageContent: "At Datamites in Hyderabad (Jan 2026 - Present), I engineer features for large-scale financial datasets, build and evaluate predictive models using Scikit-Learn and TensorFlow, and underwent rigorous training in state-of-the-art AI algorithms, data pipelines, and deep neural networks.",
    metadata: { source: "Resume - Datamites" }
  }),
  new Document({
    pageContent: "My technical skills include: Languages (Python, JavaScript, SQL, HTML, CSS), Machine Learning & AI (PyTorch, Scikit-Learn, Hugging Face Transformers, PEFT, LoRA, NLP, Deep Learning, Neural Networks, BERT, DistilBERT, LLM Fine-Tuning), Data Engineering (Pandas, NumPy, PySpark, ETL Pipelines, Data Quality, Feature Engineering, SQL Database Management), Web Development (React.js, REST APIs, Node.js, MongoDB, PostgreSQL, FastAPI), Cloud & DevOps (AWS, Git Version Control), Data Visualization (Power BI, Tableau, Matplotlib, Seaborn, Excel Analytics). I have 15+ Completed Projects, 6+ Certifications, and 2 Professional Experiences. I also hold a Pearson MePro Level 10 Expert certification.",
    metadata: { source: "Resume - Skills" }
  }),
  new Document({
    pageContent: "Project 1: Neuralretail Recommendation Engine (Datamites). An advanced retail analytics and demand forecasting platform utilizing deep learning models for accurate inventory prediction and customer segmentation algorithms. Built with Python, TensorFlow, Pandas, Scikit-Learn. I built this to solve retail inventory problems.",
    metadata: { source: "Projects - Neuralretail" }
  }),
  new Document({
    pageContent: "Project 2: Home Loan Default Prediction (Datamites). A machine learning pipeline designed to predict home loan defaults using complex financial datasets, improving risk assessment accuracy for financial institutions. Built with Python, XGBoost, Data Engineering, Seaborn. This model helps banks minimize default risks.",
    metadata: { source: "Projects - Home Loan" }
  }),
  new Document({
    pageContent: "Project 3: House Price Prediction (Rubixee). End-to-end predictive model analyzing real estate features to forecast housing prices with high precision using regression techniques. Built with Python, Scikit-Learn, Matplotlib, FastAPI.",
    metadata: { source: "Projects - House Price" }
  }),
  new Document({
    pageContent: "Project 4: Rice Leaf Disease Classification (Rubixee). Computer vision application employing Convolutional Neural Networks (CNNs) to accurately detect and classify diseases in rice leaves from images. Built with PyTorch, OpenCV, Deep Learning, React.",
    metadata: { source: "Projects - Rice Leaf" }
  }),
  new Document({
    pageContent: "Project 5: Full Stack AI Architecture (Rubixee). A robust, scalable full stack application integrating advanced AI models seamlessly into a modern React frontend with a secure backend API. Built with Next.js, Node.js, MongoDB, TailwindCSS.",
    metadata: { source: "Projects - Full Stack AI" }
  }),
  new Document({
    pageContent: "Why hire Tejesh? Because I bridge the gap between complex machine learning models and user-friendly frontend interfaces in production environments. I don't just build models in notebooks; I architect complete, scalable AI ecosystems.",
    metadata: { source: "Interview Answers" }
  })
];

let vectorStoreInstance: CustomMemoryVectorStore | null = null;

async function getVectorStore(embeddings: GoogleGenerativeAIEmbeddings) {
  if (vectorStoreInstance) return vectorStoreInstance;
  vectorStoreInstance = await CustomMemoryVectorStore.fromDocuments(TEJESH_CORPUS, embeddings);
  return vectorStoreInstance;
}

export async function POST(req: Request) {
  try {
    const { message, isInterviewMode } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ reply: "I'm currently in demo mode as my API keys haven't been set up yet. But I am Tejesh's AI Digital Twin!" });
    }

    const embeddings = new GoogleGenerativeAIEmbeddings({ apiKey, model: "gemini-embedding-2" });
    const vectorStore = await getVectorStore(embeddings);
    const retriever = vectorStore.asRetriever(3);
    
    const docs = await retriever.invoke(message);
    const contextStr = docs.map((doc: Document) => doc.pageContent).join("\n\n");
    
    const llm = new ChatGoogleGenerativeAI({
        apiKey,
        model: "gemini-2.5-flash", 
        temperature: isInterviewMode ? 0.3 : 0.7, // More precise in interview mode
    });

    const promptTemplate = isInterviewMode 
    ? `
      You are Tejesh, in a technical interview setting with a recruiter or engineering manager.
      You must answer their question professionally, technically, and concisely, drawing ONLY from your experience.
      
      Your Knowledge & Background:
      {context}

      Interviewer's Question:
      {question}

      Your professional answer (as Tejesh):
    `
    : `
      You are the AI Digital Twin of Tejesh. 
      You are an interactive, intelligent agent living on his portfolio website.
      Answer the user's questions confidently, professionally, and creatively, highlighting Tejesh's engineering excellence.
      
      Relevant Context about Tejesh:
      {context}

      User Question:
      {question}

      Your Response (as Tejesh's Digital Twin):
    `;

    const prompt = PromptTemplate.fromTemplate(promptTemplate);
    const chain = prompt.pipe(llm).pipe(new StringOutputParser());

    const reply = await chain.invoke({
      context: contextStr,
      question: message
    });

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ reply: "I encountered an error connecting to my AI brain. Please try again or reach out to Tejesh directly!" });
  }
}
