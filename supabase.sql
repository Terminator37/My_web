-- Pega TODO esto en Supabase → SQL Editor → Run

create table productos (
  id bigint generated always as identity primary key,
  nombre text not null,
  categoria text not null default 'General',
  descripcion text,
  precio numeric not null,
  activo boolean not null default true,
  creado timestamptz not null default now()
);

create table pedidos (
  id bigint generated always as identity primary key,
  creado timestamptz not null default now(),
  cliente text,
  items jsonb not null,
  total numeric not null
);

alter table productos enable row level security;
alter table pedidos enable row level security;

-- Cualquiera puede VER los productos activos
create policy "ver productos" on productos for select using (activo = true or auth.role() = 'authenticated');
-- Solo tú (con sesión iniciada) puedes crear, editar y borrar productos
create policy "admin productos" on productos for all to authenticated using (true) with check (true);
-- Cualquier cliente puede CREAR un pedido, pero solo tú puedes leerlos
create policy "crear pedido" on pedidos for insert to anon, authenticated with check (true);
create policy "admin ve pedidos" on pedidos for select to authenticated using (true);
