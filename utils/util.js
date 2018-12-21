const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const judgeDay = () => {
  const today = new Date();
  var current = 0;
  if( today.getFullYear() == 2019 && today.getMonth() == 1) {
    const diff = today.getDate() - 3;
    if( diff > 0 && diff < 8 ){
      current = diff;
    }
  }
  return current;
}

module.exports = {
  formatTime: formatTime,
  judgeDay: judgeDay,
}
