export default function getFormatedDate(date){
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}


export default function calculateDay(currentDay,day){
    return new Date(date.getFullYear(), date.getMonth() , date.getDate() - day)
}