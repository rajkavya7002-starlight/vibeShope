import { supabase } from '../config/supabase.js';
import { AppError } from '../utils/AppError.js';
export const table = (name) => ({
  async all(query = q => q) { const { data, error } = await query(supabase.from(name).select('*')); if(error) throw new AppError(error.message,500); return data; },
  async byId(id) { const {data,error}=await supabase.from(name).select('*').eq('id',id).single(); if(error) throw new AppError('Record not found',404); return data; },
  async create(values) { const {data,error}=await supabase.from(name).insert(values).select().single(); if(error) throw new AppError(error.message,400); return data; },
  async update(id, values) { const {data,error}=await supabase.from(name).update(values).eq('id',id).select().single(); if(error) throw new AppError(error.message,400); return data; },
  async remove(id) { const {error}=await supabase.from(name).delete().eq('id',id); if(error) throw new AppError(error.message,400); }
});
