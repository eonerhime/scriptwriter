import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Create a more resilient client initialization
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

// For runtime checking, you can export this function
export function validateSupabaseConnection() {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables!");
  }
  return true;
}

export default supabase;
