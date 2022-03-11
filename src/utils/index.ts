export default class Utils {
    static leadToMinutes(days: string, hours: string, minutes: string): number {
        return (parseInt(days) * 24 + parseInt(hours)) * 60 + parseInt(minutes)
    }
}