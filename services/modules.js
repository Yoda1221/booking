exports.curentDate = () => {
    const today = new Date()
    return dateToDbString(today, '. ')
}
exports.timeToDate = (t) => {
    const today = new Date(t)
    return dateToDbString(today, '. ')
}
exports.dateToDb = () => {
    const today = new Date()
    return dateToDbString(today, '-')
}
exports.timeToDb = (t) => {
    const today = new Date(t)
    return dateToDbString(today, '-')
}
exports.timeToDbWithT = (t) => {
    const today = new Date(t * 1000)
    return dateToStringWithT(today, '-')
}
exports.dateToDbPlusDays = (days) => {
    const today = new Date(Date.now() + days * 24*60*60*1000)
    return dateToDbString(today, '-')
}
/** @tetszőleges_dátum + x nap */
exports.dateToDbPlus30Days = (t, days) => {
    const future = new Date(t)
    future.setDate(future.getDate() + days)
    return dateToDbString(future, '-')
}

const dateToDbString = (day, separator) => {
  const date  = day.getFullYear() + separator + (addZero(day.getMonth()+1)) + separator + addZero(day.getDate()) + separator
  const time  =`${addZero(day.getHours())}:${addZero(day.getMinutes())}:${addZero(day.getSeconds())}`
  return date + ' ' + time
}

const dateToStringWithT = (day, separator) => {
  const date  = day.getFullYear() + separator + (addZero(day.getMonth()+1)) + separator + addZero(day.getDate()) + separator
  const time  =`${addZero(day.getHours())}:${addZero(day.getMinutes())}:${addZero(day.getSeconds())}`
  return date + 'T' + time
}
const addZero = (n) => { return (parseInt(n, 10) < 10 ? '0' : '') + n; }
