'use client';

export default function Page() {
    return (
        <form action={"../events"}>
            <label htmlFor="event-name">
                Nombre del evento
            </label>
            
            <input
                type="text"
                name="event"
                id="event"
                placeholder="Junta en mi casa"
            />

            <button type="submit">Crear evento</button>
      </form>
    );
}