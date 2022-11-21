import React from 'react'

import TimePicker from 'reactjs-timepicker'

export default function Time() {

return (
<div className="timepicker">
<TimePicker
defaultTime={'00:00'}
onChange={console.log}
/>
</div>
)

}

