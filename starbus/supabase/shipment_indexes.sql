-- SHIPMENT SEARCH INDEXES
-- These indexes will dramatically speed up searching by receiver info, sender info, and bus number.
-- This reduces the load on the database when multiple branches are searching simultaneously.

CREATE INDEX IF NOT EXISTS idx_shipments_receiver_name ON public.shipments USING gin (receiver_name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_shipments_receiver_phone ON public.shipments (receiver_phone);
CREATE INDEX IF NOT EXISTS idx_shipments_sender_name ON public.shipments USING gin (sender_name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_shipments_sender_phone ON public.shipments (sender_phone);
CREATE INDEX IF NOT EXISTS idx_shipments_tracking_number ON public.shipments (tracking_number);
CREATE INDEX IF NOT EXISTS idx_shipments_bus_number ON public.shipments (bus_number);
CREATE INDEX IF NOT EXISTS idx_shipments_status ON public.shipments (status);
CREATE INDEX IF NOT EXISTS idx_shipments_destination_branch_id ON public.shipments (destination_branch_id);
CREATE INDEX IF NOT EXISTS idx_shipments_created_at ON public.shipments (created_at DESC);

-- Note: trgm_ops requires pg_trgm extension
CREATE EXTENSION IF NOT EXISTS pg_trgm;
