import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ailrqnjvuoybkjqizcpf.supabase.co"; // your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpbHJxbmp2dW95YmtqcWl6Y3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMDc1NjcsImV4cCI6MjA1OTc4MzU2N30.tMd3_QYTSCo8MTZ92XueC2-oCmfMKjYqeUoKI-nSsoE"; // your public anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
