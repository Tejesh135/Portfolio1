import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { createClient } from "@supabase/supabase-js";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env.local") });

async function run() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabasePrivateKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!supabaseUrl || !supabasePrivateKey || !apiKey) {
      console.error("Missing environment variables. Please check your .env.local file.");
      return;
    }

    const client = createClient(supabaseUrl, supabasePrivateKey);

    console.log("1. Loading Resume PDF...");
    // Path is relative to the `frontend` folder (which is process.cwd())
    const loader = new PDFLoader("../../Tejesh__Resume.pdf");  
    const rawDocs = await loader.load();

    console.log("2. Splitting text into chunks...");
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 100,
    });
    const docs = await textSplitter.splitDocuments(rawDocs);

    console.log(`Generated ${docs.length} chunks. Creating embeddings and uploading to Supabase...`);

    const embeddings = new GoogleGenerativeAIEmbeddings({ apiKey, model: "gemini-embedding-2" });

    await SupabaseVectorStore.fromDocuments(docs, embeddings, {
      client,
      tableName: "documents",
      queryName: "match_documents",
    });

    console.log("Success! RAG Vector Store has been populated.");
  } catch (error) {
    console.error("Error seeding vector store:", error);
  }
}

run();
