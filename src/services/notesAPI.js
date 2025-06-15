import axios from 'axios'

const API_URL = "https://vuwhqyacxviwmxlaaddo.supabase.co/rest/v1/note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1d2hxeWFjeHZpd214bGFhZGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQ3MTgsImV4cCI6MjA2NTE5MDcxOH0.bZPhAzDh06qpf6CzTybIhl_j0v5QdXlQ3y5lqu6Xjdw"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}