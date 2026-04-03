import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kayzjwnvzupfvvuyqxnm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtheXpqd252enVwZnZ2dXlxeG5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxOTU5NDIsImV4cCI6MjA4Nzc3MTk0Mn0.uLuv09JPJ8HHP9Ix_5fHinp5M-8SO5rnwFpMVlpuP7Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
