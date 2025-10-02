import { supabase } from "./supabase.js";

// Buscar eventos com músicas e grupos
export async function getEventos() {
  const { data, error } = await supabase
    .from("eventos")
    .select(`
      id, titulo, local, data_evento, data_ensaio, hora_ensaio, spotify_link,
      musicas (id, titulo, cantor),
      eventos_grupos (grupos (id, nome))
    `)
    .order("data_evento", { ascending: true });

  if (error) {
    console.error("Erro ao buscar eventos:", error);
    return [];
  }
  return data;
}

// Criar evento
export async function criarEvento(evento) {
  const { data, error } = await supabase.from("eventos").insert([evento]).select().single();
  if (error) console.error("Erro ao criar evento:", error);
  return data;
}

// Atualizar evento
export async function atualizarEvento(id, evento) {
  const { data, error } = await supabase.from("eventos").update(evento).eq("id", id).select().single();
  if (error) console.error("Erro ao atualizar evento:", error);
  return data;
}

// Deletar evento
export async function deletarEvento(id) {
  const { error } = await supabase.from("eventos").delete().eq("id", id);
  if (error) console.error("Erro ao deletar evento:", error);
}

// Adicionar músicas a um evento
export async function adicionarMusicas(eventoId, musicas) {
  const { data, error } = await supabase
    .from("musicas")
    .insert(musicas.map(m => ({ evento_id: eventoId, titulo: m.titulo, cantor: m.cantor })));
  if (error) console.error("Erro ao adicionar músicas:", error);
  return data;
}
