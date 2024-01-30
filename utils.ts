export function formatDateTime(dateString: string) {

    const [date, time] = dateString.split("T");
    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");
    const formattedDateTime = `${hour}:${minute} ${day}/${month}/${year}`;

    return formattedDateTime;
}