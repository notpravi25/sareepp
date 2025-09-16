import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please connect to Supabase first.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: string;
          customer_name: string;
          phone: string;
          email: string | null;
          address: string;
          number_of_sarees: number;
          services: string[];
          preferred_date: string;
          preferred_time: string;
          special_instructions: string | null;
          total_amount: number;
          status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          customer_name: string;
          phone: string;
          email?: string | null;
          address: string;
          number_of_sarees: number;
          services: string[];
          preferred_date: string;
          preferred_time: string;
          special_instructions?: string | null;
          total_amount?: number;
          status?: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          customer_name?: string;
          phone?: string;
          email?: string | null;
          address?: string;
          number_of_sarees?: number;
          services?: string[];
          preferred_date?: string;
          preferred_time?: string;
          special_instructions?: string | null;
          total_amount?: number;
          status?: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};