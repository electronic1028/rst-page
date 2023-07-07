fetch('../../activity/activity.json')
  .then(response => response.json())
  .then(data => {
    const title = document.querySelector('#ac_title')
    const time = document.querySelector('#ac_time')
    const split_line = document.querySelector('#ac_split_line')
    const body = document.querySelector('#ac_body')
    title.innerText = data.title
    time.innerText = data.time
    split_line.innerText = data.split_line
    body.innerHTML = data.body
  })
  .catch(console.error)


fetch('../../activity/activity_2.json')
  .then(response => response.json())
  .then(data => {
    const title_2 = document.querySelector('#ac_title_2')
    const time_2 = document.querySelector('#ac_time_2')
    const split_line_2 = document.querySelector('#ac_split_line_2')
    const body_2 = document.querySelector('#ac_body_2')
    title_2.innerText = data.title
    time_2.innerText = data.time
    split_line_2.innerText = data.split_line
    body_2.innerHTML = data.body
  })
  .catch(console.error)

console.log('fetch.js引入正常。')