-- Supabase Database Schema for Portfolio

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- Enable vector extension for embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- 1. Bookings Table (For Interview Scheduling)
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    recruiter_name TEXT NOT NULL,
    company_name TEXT,
    email TEXT NOT NULL,
    meeting_type TEXT NOT NULL, -- e.g., 'Google Meet', 'Zoom', 'Microsoft Teams'
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    purpose TEXT,
    notes TEXT,
    status TEXT DEFAULT 'pending' -- 'pending', 'confirmed', 'completed', 'canceled'
);

-- 2. Messages Table (For AI Chatbot History)
CREATE TABLE IF NOT EXISTS public.chat_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID NOT NULL, -- To group messages by user session
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    role TEXT NOT NULL, -- 'user' or 'assistant'
    content TEXT NOT NULL
);

-- 3. Analytics Table (For tracking views)
CREATE TABLE IF NOT EXISTS public.analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    event_type TEXT NOT NULL, -- 'page_view', 'resume_download', 'project_view'
    path TEXT,
    metadata JSONB -- Additional info like project name, user agent, etc.
);

-- 4. Documents Table for Vector Embeddings (pgvector + LangChain)
CREATE TABLE IF NOT EXISTS public.documents (
    id BIGSERIAL PRIMARY KEY,
    content TEXT, -- corresponds to Document.pageContent
    metadata JSONB, -- corresponds to Document.metadata
    embedding vector(768) -- 1536 works for OpenAI embeddings. Change if using local/HF embeddings.
);

-- Create a function to search for documents
CREATE OR REPLACE FUNCTION match_documents (
  query_embedding vector(768),
  match_count int DEFAULT null,
  filter jsonb DEFAULT '{}'
) RETURNS TABLE (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE plpgsql
AS $$
#variable_conflict use_column
BEGIN
  RETURN query
  SELECT
    id,
    content,
    metadata,
    1 - (documents.embedding <=> query_embedding) AS similarity
  FROM documents
  WHERE metadata @> filter
  ORDER BY documents.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Enable RLS (Row Level Security) - Basic Setup
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- Bookings: allow insert from anyone, read only from admin
CREATE POLICY "Allow public insert to bookings" ON public.bookings FOR INSERT WITH CHECK (true);

-- Chat messages: allow insert from anyone, read from anyone with same session_id
CREATE POLICY "Allow public insert to chat_messages" ON public.chat_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow read based on session_id" ON public.chat_messages FOR SELECT USING (true);

-- Analytics: allow insert from anyone
CREATE POLICY "Allow public insert to analytics" ON public.analytics FOR INSERT WITH CHECK (true);

-- Documents: allow read from anyone, insert only from admin (or authenticated backend)
CREATE POLICY "Allow public read to documents" ON public.documents FOR SELECT USING (true);
