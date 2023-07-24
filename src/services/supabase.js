import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "../utils/Constatnts";

const supabaseUrl = SUPABASE_URL;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpya3RndmNlbXRlZHZ4ZmZkb3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMTU1MjcsImV4cCI6MjAwNTc5MTUyN30.YAmG6madzlOIUXpZBPXBhMOtvc4LOZ9WRH0SZ5oCUFg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
