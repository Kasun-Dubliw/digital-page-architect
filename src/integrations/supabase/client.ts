// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hdldaakyqsnqjwvybvmz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkbGRhYWt5cXNucWp3dnlidm16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMTEzODMsImV4cCI6MjA2NDU4NzM4M30.ZCcZmYAIHFfiN5dVnArlRQac-CYm7k7uuC8uP42M0M0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);