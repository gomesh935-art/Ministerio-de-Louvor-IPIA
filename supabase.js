import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = 'https://xbmclnljphaifebpdmty.supabase.co';  // <-- cole aqui
const SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhibWNsbmxqcGhhaWZlYnBkbXR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNTgxMDEsImV4cCI6MjA3NDkzNDEwMX0.8hOyCpQX0OxCIrF9VC4oVMgIIjIXHG4GQnEahhoiBL4;           // <-- cole aqui

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
