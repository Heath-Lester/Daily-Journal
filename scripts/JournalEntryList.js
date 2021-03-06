
import {  useJournalEntries  } from './JournalDataProvider.js';
import {  JournalEntryComponent  } from './JournalEntry.js';

const entryLog = document.querySelector(".postViewer")

export const EntryListComponent = () => {

    const entries = useJournalEntries()

    for (const entry of entries) {
        entryLog.innerHTML += JournalEntryComponent(entry)
    }
}