
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://aealgiyzbenbhhftwkxb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlYWxnaXl6YmVuYmhoZnR3a3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzMDM1MTUsImV4cCI6MjA4Nzg3OTUxNX0.2v1ZhTmAbpcAk5jyiiH9oCz5Yd5sFwjtPdq4irIg-uE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
