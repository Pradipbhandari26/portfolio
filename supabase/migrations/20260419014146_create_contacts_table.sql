/*
  # Create contacts table for portfolio contact form

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required) - sender's full name
      - `email` (text, required) - sender's email address
      - `subject` (text, required) - message subject
      - `message` (text, required) - message body
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `contacts` table
    - Public insert policy: anyone can submit a contact form
    - No read policy for anonymous users (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  subject text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name <> '' AND
    email <> '' AND
    message <> ''
  );
