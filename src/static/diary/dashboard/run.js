import { showEmptyMessage } from "../../general/js/display.js"
import { populateCache } from "../js/cache.js"
import { loadEntry, loadAddButton } from "./compile.js"


// Populate cache and get dates of all entries
const entryDates = await populateCache()

// Load all entries into page from newly populated cache
entryDates.forEach(async (date) => {
    loadEntry(date, false)
})

if (entryDates.length === 0) {
    showEmptyMessage(document.querySelector('.entry-parent'))
}

// Load the add button if today's entry does not exist
await loadAddButton()
