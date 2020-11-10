export interface Event {
    id?: string;
    title?: string;
    description?: string;
    date?: string;
    type?: number;
}

// Type event:
// 1: General
// 2: Reunión
// 3: Cita
// 4: Visita
// 5: Recordatorio