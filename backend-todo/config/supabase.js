import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) console.warn('Supabase credentials are not configured. Add them to backend/.env.');
export const supabase = createClient(process.env.SUPABASE_URL || 'https://placeholder.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder');
