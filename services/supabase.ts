import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://jkfbjdknfmnaevfmzdrq.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZmJqZGtuZm1uYWV2Zm16ZHJxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzIwNjU4MSwiZXhwIjoyMDMyNzgyNTgxfQ.Jb1T1aEvmTHQt7wB_suqKUC2GpU4lwo8YbY2RFQ5ZA8"
const supabase = createClient (supabaseUrl, supabaseKey);

export default supabase;