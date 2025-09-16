/*
  # Create bookings table for saree pre-pleating services

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `customer_name` (text, required)
      - `phone` (text, required)
      - `email` (text, optional)
      - `address` (text, required)
      - `number_of_sarees` (integer, required)
      - `services` (text array, required)
      - `preferred_date` (date, required)
      - `preferred_time` (text, required)
      - `special_instructions` (text, optional)
      - `total_amount` (decimal, required)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for public to insert bookings
    - Add policy for authenticated users to read all bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  phone text NOT NULL,
  email text,
  address text NOT NULL,
  number_of_sarees integer NOT NULL CHECK (number_of_sarees > 0),
  services text[] NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  special_instructions text,
  total_amount decimal(10,2) NOT NULL DEFAULT 0,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create bookings (for customer booking form)
CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all bookings (for admin panel)
CREATE POLICY "Authenticated users can read all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update bookings (for status updates)
CREATE POLICY "Authenticated users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();