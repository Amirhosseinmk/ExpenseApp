export function getFormatedDate(date){
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}


export function calculateDay(currentDay,day){
    return new Date(currentDay.getFullYear(), currentDay.getMonth() , currentDay.getDate() - day)
}