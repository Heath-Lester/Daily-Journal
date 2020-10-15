
export const JournalEntryComponent = (entry) => {
    return `
    <div class="mainPostCard">
        <header id="entry--${entry.id}" class="mainPostCard__details">
        <span>
            <h4>${entry.date} | ${entry.concept} | ${entry.mood}</h4>
        </span>
        <button><h5>Edit/Delete</h5></button>
    </header>
    <p class="mainPostCard__Content">${entry.entry}</p>
    </div>
    `
}
