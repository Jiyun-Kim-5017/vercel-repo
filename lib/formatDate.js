export default function formatDate(date) {
    const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(date.getUTCDate()).padStart(2, "0");
    const yyyy = String(date.getUTCFullYear());

    return `${yyyy}. ${mm}. ${dd}.`;
}
